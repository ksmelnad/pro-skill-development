"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { skillSchema, type SkillFormValues } from "@/lib/zodSchemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { upsertSkillsAction } from "@/app/actions/profile";
import {
  PlusCircle,
  Trash2,
  Edit3,
  Save,
  XCircle,
  Lightbulb,
  Check,
  Loader2,
  Star,
} from "lucide-react";
import { ProfileWithPayload } from "@/types";
import { Skill } from "@prisma/client"; // Prisma's Skill type

const SKILL_LEVEL_OPTIONS = [
  { value: "Beginner", label: "Beginner" },
  { value: "Skilled", label: "Skilled" },
  { value: "Advanced", label: "Advanced" },
  { value: "Expert", label: "Expert" },
];
import { useState, useEffect } from "react";

interface SkillsFormProps {
  initialData: ProfileWithPayload; // Changed to Prisma's Skill type
  mutateProfile: (
    data?:
      | ProfileWithPayload
      | Promise<ProfileWithPayload | undefined>
      | undefined,
    options?: any
  ) => Promise<ProfileWithPayload | undefined>;
}

export function SkillsForm({ initialData, mutateProfile }: SkillsFormProps) {
  const { toast } = useToast();
  // Local state uses SkillFormValues which might have a temporary client-side 'id'
  const [skills, setSkills] = useState<SkillFormValues[]>(
    initialData.skills.map((skill, index) => ({
      ...skill,
      id: `initial-${index}-${skill.name}`,
    }))
  );
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isSavingAll, setIsSavingAll] = useState(false);

  const form = useForm<SkillFormValues>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      level: "Beginner",
      experienceYears: 0,
    },
  });

  const { reset, control, handleSubmit } = form;

  useEffect(() => {
    // Sync local state when initialData from SWR changes
    setSkills(
      initialData.skills.map((skill, index) => ({
        ...skill,
        id: `initial-${index}-${skill.name}`,
      }))
    );
  }, [initialData]);

  useEffect(() => {
    if (editingIndex !== null && skills[editingIndex]) {
      reset(skills[editingIndex]);
    } else if (isAdding) {
      reset({ name: "", level: "Beginner", experienceYears: 0 });
    }
  }, [editingIndex, isAdding, skills, reset]); // skills dependency is important here

  const handleAddNew = () => {
    setEditingIndex(null);
    setIsAdding(true);
    reset({ name: "", level: "Beginner", experienceYears: 0 });
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setIsAdding(false);
    form.reset(skills[index]);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setIsAdding(false);
    form.reset({ name: "", level: "Beginner", experienceYears: 0 });
  };

  // This onSubmit is for adding/editing a single skill to the *local* list
  const onSubmit = (data: SkillFormValues) => {
    let updatedSkills;
    const entryWithId = {
      ...data,
      id: data.id || `temp-${data.name}-${Date.now()}`,
    }; // Ensure local id for keys
    if (editingIndex !== null && skills[editingIndex]) {
      updatedSkills = skills.map((skill, i) =>
        i === editingIndex ? entryWithId : skill
      );
    } else {
      // Check if skill already exists (case-insensitive)
      const existingSkill = skills.find(
        (s) => s.name.toLowerCase() === data.name.toLowerCase()
      );
      if (existingSkill) {
        toast({
          title: "Skill Exists",
          description: `Skill "${data.name}" is already in your list. You can edit it.`,
          variant: "destructive",
        });
        return;
      }
      updatedSkills = [...skills, entryWithId];
    }
    setSkills(updatedSkills);
    toast({
      title: "Skill Ready",
      description: `Skill "${data.name}" ${
        editingIndex !== null ? "updated locally" : "added locally"
      }. Remember to 'Save All Skills'.`,
    });
    handleCancel();
  };

  const handleDelete = (indexToDelete: number) => {
    const updatedSkills = skills.filter((_, i) => i !== indexToDelete);
    setSkills(updatedSkills);
    toast({
      title: "Skill Deleted",
      description: "Skill removed from your list.",
      variant: "destructive",
    });
    if (editingIndex === indexToDelete) {
      handleCancel();
    }
  };

  const handleSaveAllSkills = async () => {
    setIsSavingAll(true);

    // Prepare skills data for the backend: map SkillFormValues[] to Skill[]
    // This involves removing the temporary 'id' and ensuring types are correct.
    // The 'level' should match Prisma's Level enum values.
    // skillSchema should ensure 'level' is one of "Beginner", "Skilled", "Advanced", "Expert"
    // and experienceYears is a valid Int.
    const skillsToSave: Skill[] = skills.map(({ id, ...rest }) => {
      const expYearsValue = rest.experienceYears;
      let finalExpYears: number;

      if (expYearsValue === undefined || expYearsValue === null) {
        finalExpYears = 0; // Default to 0 if undefined or null
      } else {
        const parsed = Number(expYearsValue);
        finalExpYears = isNaN(parsed) ? 0 : parsed; // Default to 0 if NaN, else use parsed number
      }

      return {
        name: rest.name,
        level: rest.level as Skill["level"], // Prisma Level enum
        experienceYears: finalExpYears,
      };
    });

    const originalProfileDataForRollback = await mutateProfile(undefined, {
      revalidate: false,
    });

    // Optimistic update
    // await mutateProfile(
    //   (currentProfile?: ProfileWithPayload) => {
    //     if (!currentProfile) return undefined;
    //     // Ensure the returned object structurally matches ProfileWithPayload
    //     const updatedData = {
    //       ...currentProfile,
    //       skills: skillsToSave,
    //     };
    //     return updatedData as ProfileWithPayload; // Assert type if confident, or ensure all fields match
    //   },
    //   { revalidate: false }
    // );

    await mutateProfile(
      {
        ...initialData,
        skills: skillsToSave,
      },
      { revalidate: false }
    );

    try {
      const result = await upsertSkillsAction({ skills: skillsToSave });

      if (result.success && result.updatedSkills) {
        toast({
          title: "Success!",
          description: result.message || "All skills saved successfully.",
        });
        // Mutate with actual data from server to ensure consistency and get any server-generated values
        // await mutateProfile(
        //   (currentProfile?: ProfileWithPayload) => {
        //     if (!currentProfile) return undefined;
        //     return { ...currentProfile, skills: result.updatedSkills! };
        //   },
        //   { revalidate: true } // Revalidate to fetch the latest state
        // );
      } else {
        toast({
          title: "Error Saving",
          description: result.error || "Failed to save skills.",
          variant: "destructive",
        });
        await mutateProfile(originalProfileDataForRollback, {
          revalidate: false,
        }); // Rollback
      }
    } catch (error) {
      toast({
        title: "Unexpected Error",
        description: "Could not save skills.",
        variant: "destructive",
      });
      await mutateProfile(originalProfileDataForRollback, {
        revalidate: false,
      }); // Rollback
    } finally {
      setIsSavingAll(false);
    }
  };

  const renderSkillLevelIcon = (level: SkillFormValues["level"]) => {
    switch (level) {
      case "Beginner":
        return <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />;
      case "Skilled":
        return (
          <>
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          </>
        );
      case "Advanced":
        return (
          <>
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          </>
        );
      case "Expert":
        return (
          <>
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          </>
        );
      default:
        return null;
    }
  };

  const renderSkillItem = (skill: SkillFormValues, index: number) => (
    <Card key={skill.id || index} className="mb-4 border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-md font-semibold flex items-center gap-2">
            {skill.name}
            <span className="flex">{renderSkillLevelIcon(skill.level)}</span>
          </CardTitle>
          <CardDescription>
            {skill.level}{" "}
            {skill.experienceYears !== undefined && skill.experienceYears > 0
              ? ` - ${skill.experienceYears} year(s) exp.`
              : ""}
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleEdit(index)}>
            <Edit3 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDelete(index)}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">Your Skills</CardTitle>
        <CardDescription>
          Manage your skills, proficiency levels, and years of experience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {skills.map(renderSkillItem)}

        {(isAdding || editingIndex !== null) && (
          <Card className="mt-6 border-primary">
            <CardHeader>
              <CardTitle className="font-headline text-lg">
                {editingIndex !== null ? "Edit Skill" : "Add New Skill"}
              </CardTitle>{" "}
              {/* typo: CardTitle */}
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E.g., JavaScript, Python, Project Management"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proficiency Level</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SKILL_LEVEL_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="experienceYears"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="E.g., 5"
                              {...field}
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value === ""
                                    ? undefined
                                    : parseInt(e.target.value, 10)
                                )
                              }
                              value={
                                field.value === undefined ? "" : field.value
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCancel}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Check className="mr-2 h-4 w-4" />{" "}
                      {/* Changed Icon for local save */}
                      {editingIndex !== null ? "Update" : "Add"} Skill
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {!(isAdding || editingIndex !== null) && (
          <Button
            onClick={handleAddNew}
            variant="outline"
            className="mt-6 w-full"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Skill
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleSaveAllSkills}
          disabled={isSavingAll || skills.length === 0}
        >
          {isSavingAll && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          <Save className="mr-2 h-4 w-4" />
          Save All Skills to Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

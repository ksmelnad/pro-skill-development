"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useCallback, useState } from "react"; // Import useCallback
import { upsertEducationLevelsAction } from "@/app/actions/education";
import { Education, EducationLevel } from "@prisma/client";
import {
  Edit3,
  Loader2,
  Plus,
  PlusCircle,
  Save,
  Trash2,
  XCircle,
} from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  EDUCATION_LEVEL_OPTIONS,
  // GRADUATION_OPTIONS, // No longer needed directly here
  // Import DegreeOption if not already
} from "@/lib/constants";
import {
  educationFormSchema,
  type EducationFormValues,
} from "@/lib/zodSchemas";
import { DegreeOption } from "@/types";

// Define the schema for the entire form, which contains an array of education levels
const educationArrayFormSchema = z.object({
  educationLevels: z.array(educationFormSchema),
});
type EducationArrayFormValues = z.infer<typeof educationArrayFormSchema>;

const EducationForm = ({
  educationData,
  mutateEducation,
}: {
  educationData: Education;
  mutateEducation: (
    // Define the type for mutateEducation
    data?: Education | Promise<Education | undefined> | undefined,
    options?: any
  ) => Promise<Education | undefined>;
}) => {
  const { toast } = useToast();
  const [isSavingAll, setIsSavingAll] = useState(false);

  const levelOrder = React.useMemo(
    () => [
      "10th",
      "12th",
      "diploma",
      "graduation",
      "postgraduation",
      "doctorate",
    ],
    []
  );

  const sortEducationLevels = useCallback(
    (a: EducationFormValues, b: EducationFormValues) => {
      const indexA = levelOrder.indexOf(a.level);
      const indexB = levelOrder.indexOf(b.level);
      return indexA - indexB;
    },
    [levelOrder]
  );

  const form = useForm<EducationArrayFormValues>({
    resolver: zodResolver(educationArrayFormSchema),
    defaultValues: {
      educationLevels: (educationData.educationLevels || [])
        .map(mapPrismaToFormValues)
        .sort(sortEducationLevels),
    },
  });

  const { control, handleSubmit, reset, watch, getValues } = form;

  useEffect(() => {
    // Sync local `educationLevels` state when `educationData` prop changes (e.g., after SWR revalidation)
    reset({
      educationLevels: (educationData.educationLevels || [])
        .map(mapPrismaToFormValues)
        .sort(sortEducationLevels),
    });
  }, [educationData, reset, sortEducationLevels]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationLevels",
  });

  function mapPrismaToFormValues(level: EducationLevel): EducationFormValues {
    return {
      level: level.level,
      subjects: level.subjects,
      grade: level.grade,
      completed: level.completed,
      board: level.board ?? undefined,
      institute: level.institute ?? undefined,
      degree: level.degree ?? undefined,
      year: level.year ?? undefined,
      expectedYear: level.expectedYear ?? undefined,
      currentSemester: level.currentSemester ?? undefined,
    };
  }

  const handleAddNew = () => {
    // Basic duplicate check for 10th/12th before appending
    const currentFormLevels = getValues("educationLevels");
    const newLevelDefault = {
      level: "",
      board: "",
      institute: "",
      degree: "",
      subjects: "",
      grade: "",
      completed: true,
      year: new Date().getFullYear(),
      expectedYear: new Date().getFullYear() + 1,
      currentSemester: 1, // Default to 1, adjust as needed
    };
    append(newLevelDefault, { shouldFocus: true });
  };

  const handleDelete = (indexToDelete: number) => {
    remove(indexToDelete);
    toast({
      title: "Education Deleted",
      description:
        "Education entry removed locally. Remember to 'Save All Educations'.",
      variant: "destructive",
    });
  };

  const onSubmit = async (data: EducationArrayFormValues) => {
    setIsSavingAll(true);

    const educationLevelsToSave: EducationLevel[] = data.educationLevels
      .map((edu) => {
        const cleanedData: Partial<EducationLevel> & {
          level: string;
          subjects: string;
          grade: string;
          completed: boolean;
        } = { ...edu };

        if (cleanedData.level !== "10th" && cleanedData.level !== "12th") {
          delete cleanedData.board;
        }
        if (
          !["graduation", "postgraduation", "diploma", "doctorate"].includes(
            cleanedData.level
          )
        ) {
          delete cleanedData.institute;
          delete cleanedData.degree;
        }
        if (cleanedData.completed) {
          delete cleanedData.expectedYear;
          delete cleanedData.currentSemester;
        } else {
          delete cleanedData.year;
        }

        return {
          ...cleanedData, // Spread cleaned data first
          level: edu.level, // Ensure required fields are present
          subjects: edu.subjects,
          grade: edu.grade,
          completed: edu.completed,
          board: edu.board || null,
          institute: edu.institute || null,
          degree: edu.degree || null,
          year: edu.year === undefined ? null : Number(edu.year),
          expectedYear:
            edu.expectedYear === undefined ? null : Number(edu.expectedYear),
          currentSemester:
            edu.currentSemester === undefined
              ? null
              : Number(edu.currentSemester),
        } as EducationLevel;
      })
      .sort((a, b) =>
        sortEducationLevels(a as EducationFormValues, b as EducationFormValues)
      ); // Sort before saving

    const originalEducationDocForRollback = await mutateEducation(undefined, {
      revalidate: false,
    });

    await mutateEducation(
      {
        ...(educationData || { id: "", userId: "" }), // Provide a fallback if educationData can be null/undefined
        educationLevels: educationLevelsToSave,
      },
      { revalidate: false }
    );

    try {
      const result = await upsertEducationLevelsAction({
        educationLevels: educationLevelsToSave,
      });

      if (result.success && result.education) {
        toast({
          title: "Success!",
          description: result.message || "Education history saved.",
        });
        await mutateEducation(result.education, { revalidate: true });
        // Form will be reset by useEffect if educationData prop changes
      } else {
        toast({
          title: "Error Saving",
          description: result.error || "Failed to save education history.",
          variant: "destructive",
        });
        await mutateEducation(originalEducationDocForRollback, {
          revalidate: false,
        });
      }
    } catch (error) {
      toast({
        title: "Unexpected Error",
        description: "Could not save education history.",
        variant: "destructive",
      });
      await mutateEducation(originalEducationDocForRollback, {
        revalidate: false,
      });
    } finally {
      setIsSavingAll(false);
    }
  };

  // Helper to check if a specific 10th/12th level can be added to avoid duplicates in dropdown
  // This is for UI filtering, actual validation should be with Zod .refine on the array if strict
  const getAvailableEducationLevels = (currentIndex: number) => {
    const currentFormValues = getValues("educationLevels");
    return EDUCATION_LEVEL_OPTIONS.filter((opt) => {
      if (opt.level === "10th" || opt.level === "12th") {
        return !currentFormValues.some(
          (edu, idx) => edu.level === opt.level && idx !== currentIndex
        );
      }
      return true;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">
          Education History
        </CardTitle>
        <CardDescription>
          Add and manage your educational qualifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {fields.map((item, index) => {
              const selectedLevel = watch(`educationLevels.${index}.level`);
              const isCompleted = watch(`educationLevels.${index}.completed`);
              const availableLevelsForThisItem =
                getAvailableEducationLevels(index);

              // Dynamically get degree options based on selectedLevel
              const levelConfig = EDUCATION_LEVEL_OPTIONS.find(
                (opt) => opt.level === selectedLevel
              );
              const degreeOptions: DegreeOption[] = levelConfig?.options || [];

              // Determine if the degree field should be shown
              const showDegreeField =
                selectedLevel &&
                !["10th", "12th"].includes(selectedLevel) &&
                degreeOptions.length > 0;

              return (
                <Card key={item.id} className="border-primary p-4">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 px-0 pt-0">
                    <CardTitle className="font-headline text-lg">
                      {`# ${index + 1}`}
                    </CardTitle>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(index)}
                    >
                      <Trash2 color="red" className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6 px-0 pb-0">
                    <FormField
                      control={control}
                      name={`educationLevels.${index}.level`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Education Level</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              form.setValue(
                                `educationLevels.${index}.degree`,
                                ""
                              ); // Reset degree when level changes
                            }}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {availableLevelsForThisItem.map((l) => (
                                <SelectItem key={l.level} value={l.level}>
                                  {l.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedLevel &&
                      ["10th", "12th"].includes(selectedLevel) && (
                        <FormField
                          control={control}
                          name={`educationLevels.${index}.board`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Board/University</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="E.g., CBSE, State Board, etc."
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                    {selectedLevel &&
                      !["10th", "12th"].includes(selectedLevel) && (
                        <FormField
                          control={control}
                          name={`educationLevels.${index}.institute`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Institute Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Name of your school/college/university"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                    {selectedLevel && showDegreeField && (
                      <FormField
                        control={control}
                        name={`educationLevels.${index}.degree`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Degree/Course</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select degree/course" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {degreeOptions.map((opt) => (
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
                    )}

                    <FormField
                      control={control}
                      name={`educationLevels.${index}.subjects`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subjects / Specialization</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="E.g., Science, Commerce, Computer Engineering"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name={`educationLevels.${index}.grade`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade / Percentage / CGPA</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="E.g., 85%, 8.5 CGPA, A+"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name={`educationLevels.${index}.completed`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Completed this education level?
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    {isCompleted ? (
                      <FormField
                        control={control}
                        name={`educationLevels.${index}.year`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year of Completion</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="YYYY"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.value === ""
                                      ? undefined
                                      : parseInt(e.target.value, 10)
                                  )
                                }
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <>
                        <FormField
                          control={control}
                          name={`educationLevels.${index}.expectedYear`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expected Year of Completion</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="YYYY"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      e.target.value === ""
                                        ? undefined
                                        : parseInt(e.target.value, 10)
                                    )
                                  }
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={control}
                          name={`educationLevels.${index}.currentSemester`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Semester/Year</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="E.g., 3 for 3rd Sem/Year"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      e.target.value === ""
                                        ? undefined
                                        : parseInt(e.target.value, 10)
                                    )
                                  }
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            <Button
              type="button"
              onClick={handleAddNew}
              variant="outline"
              className="mt-6 w-full"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Education
            </Button>

            <div className="mt-8 flex justify-end border-t pt-6">
              <Button
                type="submit"
                disabled={isSavingAll || fields.length === 0}
              >
                {isSavingAll && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                <Save className="mr-2 h-4 w-4" />
                Save All Educations
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EducationForm;

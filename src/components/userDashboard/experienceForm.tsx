"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form"; // Import useFieldArray
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";

import { useState, useEffect, useCallback } from "react"; // Removed useOptimistic, useTransition (will re-add for save all)
import {
  upsertExperienceDetailsAction,
  ExperienceDetailCreateInput,
} from "@/app/actions/experience"; // Updated action

import { Loader2, Plus, PlusCircle, Save, Trash2, XCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Checkbox } from "../ui/checkbox";
import {
  Experience,
  Experience as ExperienceContainer,
  ExperienceDetails,
} from "@prisma/client"; // Experience is the container
import { KeyedMutator } from "swr";

const employmentTypeOptions = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
  { value: "Freelance", label: "Freelance" },
  { value: "Temporary", label: "Temporary" },
  { value: "Other", label: "Other" },
];

const locationTypeOptions = [
  { value: "Remote", label: "Remote" },
  { value: "On-site", label: "On-site" },
  { value: "Hybrid", label: "Hybrid" },
];

const experienceDetailFormSchema = z.object({
  company: z.string().min(2, {
    message: "Please enter the company name",
  }),
  jobTitle: z.string().min(2, {
    message: "Please enter the job title",
  }),
  employmentType: z.string({
    required_error: "Please select employment type",
  }),
  locationType: z.string({
    required_error: "Please select location type",
  }),
  location: z.string().optional(),
  startDate: z.date({
    required_error: "Please select a start date.",
  }),
  endDate: z.date().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
  skills: z.string().optional(),
});

type ExperienceFormValues = z.infer<typeof experienceDetailFormSchema>;

// This type represents the experience data structure after form processing
// and as it's expected in the experienceData prop and for optimistic updates.
export type EffectiveExperienceData = {
  company: string;
  jobTitle: string;
  employmentType: string;
  locationType: string;
  location?: string;
  startDate: Date; // Can be Date object or ISO string from server
  endDate?: Date; // Can be Date object or ISO string from server
  current: boolean;
  description?: string;
  skills: string[];
};

// Schema for the entire form containing an array of experiences
const experienceDetailsArrayFormSchema = z.object({
  experiences: z.array(experienceDetailFormSchema),
});
type ExperienceDetailsArrayFormValues = z.infer<
  typeof experienceDetailsArrayFormSchema
>;

// Type for the Experience container that includes its details
type ExperienceContainerWithDetails = ExperienceContainer & {
  experienceDetails: ExperienceDetails[];
};

const ExperienceForm = ({
  experienceDetails, // Renamed prop for clarity, represents ExperienceDetail[]-like data
  mutateExperience, // This will mutate the ExperienceContainerWithDetails
}: {
  experienceDetails: EffectiveExperienceData[]; // This is an array of UI-friendly detail objects
  mutateExperience: (
    data?: Experience | Promise<Experience> | undefined,
    options?: any
  ) => Promise<ExperienceContainerWithDetails | undefined>;
  // mutateExperience: KeyedMutator<Experience | undefined>;
}) => {
  const { toast } = useToast();
  const [isSavingAll, setIsSavingAll] = useState(false);

  const mapServerToFormValues = useCallback(
    (expDetail: EffectiveExperienceData): ExperienceFormValues => {
      // expDetail is an ExperienceDetail-like object
      return {
        company: expDetail.company,
        jobTitle: expDetail.jobTitle,
        employmentType: expDetail.employmentType,
        locationType: expDetail.locationType,
        location: expDetail.location || "",
        startDate: expDetail.startDate
          ? new Date(expDetail.startDate)
          : new Date(),
        endDate: expDetail.endDate ? new Date(expDetail.endDate) : undefined,
        current: expDetail.current,
        description: expDetail.description || "",
        skills: expDetail.skills ? expDetail.skills.join(", ") : "",
      };
    },
    []
  );

  const form = useForm<ExperienceDetailsArrayFormValues>({
    resolver: zodResolver(experienceDetailsArrayFormSchema),
    defaultValues: {
      experiences: experienceDetails.map(mapServerToFormValues), // map the details
    },
  });

  const { control, handleSubmit, reset, watch } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  useEffect(() => {
    reset({ experiences: experienceDetails.map(mapServerToFormValues) });
  }, [experienceDetails, mapServerToFormValues, reset]);

  const onSaveAll = async (formData: ExperienceDetailsArrayFormValues) => {
    setIsSavingAll(true);

    // This now maps to ExperienceDetailCreateInput[]
    const detailsToSave: ExperienceDetailCreateInput[] =
      formData.experiences.map((formExp) => ({
        company: formExp.company,
        jobTitle: formExp.jobTitle,
        employmentType: formExp.employmentType,
        locationType: formExp.locationType,
        location:
          formExp.locationType === "On-site" &&
          formExp.location &&
          formExp.location.trim() !== ""
            ? formExp.location.trim()
            : null,
        startDate: formExp.startDate,
        endDate: formExp.current || !formExp.endDate ? null : formExp.endDate,
        current: formExp.current,
        description: formExp.description || null,
        skills: formExp.skills
          ? formExp.skills
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s) // filter out empty strings
          : [],
      }));

    const originalExperienceContainerForRollback = await mutateExperience(
      undefined,
      {
        revalidate: false,
      }
    );

    // Optimistic update:
    // Construct a temporary ExperienceContainerWithDetails
    const optimisticExperienceContainer: ExperienceContainerWithDetails = {
      id:
        originalExperienceContainerForRollback?.id ||
        `temp-exp-container-${Date.now()}`,
      userId: originalExperienceContainerForRollback?.userId || "temp-user-id", // Placeholder, actual value from server if exists
      profileId:
        originalExperienceContainerForRollback?.profileId || "temp-profile-id", // Placeholder
      createdAt:
        originalExperienceContainerForRollback?.createdAt || new Date(),
      updatedAt: new Date(),
      experienceDetails: detailsToSave.map((detail, index) => ({
        ...detail,
        // Temporary IDs for optimistic rendering if needed by UI keys
        id: `temp-detail-${Date.now()}-${index}`,
        experienceId:
          originalExperienceContainerForRollback?.id ||
          `temp-exp-container-${Date.now()}`, // Link to container
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    };

    await mutateExperience(optimisticExperienceContainer, {
      revalidate: false,
    });

    try {
      // Call the new action
      const result = await upsertExperienceDetailsAction(detailsToSave);

      if (result.success && result.experiences) {
        toast({ title: "Success!", description: "All experiences saved." });
        // Mutate with the actual updated container from the server
        await mutateExperience(result.experiences, { revalidate: true });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to save experiences.",
          variant: "destructive",
        });
        await mutateExperience(originalExperienceContainerForRollback, {
          revalidate: false,
        });
      }
    } catch (error) {
      toast({
        title: "Unexpected Error",
        description: "Could not save experiences.",
        variant: "destructive",
      });
      await mutateExperience(originalExperienceContainerForRollback, {
        revalidate: false,
      });
    } finally {
      setIsSavingAll(false);
    }
  };

  const handleAddNew = () => {
    append(
      {
        company: "",
        jobTitle: "",
        employmentType: "",
        locationType: "",
        current: false,
        startDate: new Date(),
        endDate: undefined,
        location: "",
        description: "",
        skills: "",
      },
      { shouldFocus: true }
    );
  };

  const handleDelete = (indexToDelete: number) => {
    remove(indexToDelete);
    toast({
      title: "Experience Deleted",
      description:
        "Experience entry removed locally. Remember to 'Save All Experiences'.",
      variant: "destructive",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">Work Experience</CardTitle>
        <CardDescription>
          Detail your professional background and roles.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSaveAll)} className="space-y-8">
            {fields.map((item, index) => {
              const isCurrentJob = watch(`experiences.${index}.current`);
              const locationType = watch(`experiences.${index}.locationType`);

              return (
                <Card key={item.id} className="border-primary p-4">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 px-0 pt-0">
                    <CardTitle className="font-headline text-lg">
                      {`Experience #${index + 1}`}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={control}
                        name={`experiences.${index}.jobTitle`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="E.g., Software Engineer"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name={`experiences.${index}.company`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="E.g., Google" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name={`experiences.${index}.employmentType`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Employment Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {employmentTypeOptions.map((opt) => (
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
                        name={`experiences.${index}.locationType`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {locationTypeOptions.map((opt) => (
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
                    </div>
                    {locationType === "On-site" && (
                      <FormField
                        control={control}
                        name={`experiences.${index}.location`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location (City, Country)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="E.g., Bangalore, India"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={control}
                        name={`experiences.${index}.startDate`}
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Start Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-[240px]  text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  autoFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {!isCurrentJob && (
                        <FormField
                          control={control}
                          name={`experiences.${index}.endDate`}
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>End Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-[240px]  text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    autoFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    <FormField
                      control={control}
                      name={`experiences.${index}.current`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal mb-0!">
                            I am currently working in this role
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`experiences.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your responsibilities and achievements"
                              {...field}
                              className="min-h-[100px]"
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`experiences.${index}.skills`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Skills Used (Optional, comma-separated)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="E.g., React, Node.js, Project Management"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Experience
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
                Save All Experiences
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ExperienceForm;

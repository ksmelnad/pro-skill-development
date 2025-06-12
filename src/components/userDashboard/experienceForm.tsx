"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

import { useState, useOptimistic, useTransition } from "react";
import { createExperience } from "@/app/actions/experience";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";

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

const experienceFormSchema = z.object({
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

export type ExperienceData = z.infer<typeof experienceFormSchema>;

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

const ExperienceForm = ({
  experienceData,
}: {
  experienceData: EffectiveExperienceData[];
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentEditingIndex, setCurrentEditingIndex] = useState<number | null>(
    null
  );
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [optimisticExperiences, addOptimisticExperience] = useOptimistic<
    EffectiveExperienceData[],
    EffectiveExperienceData
  >(experienceData, (currentOptimisticExperiences, newExperience) => {
    // Add the new experience. Appending it here.
    return [...currentOptimisticExperiences, newExperience];
  });

  const form = useForm<z.infer<typeof experienceFormSchema>>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: {
      company: "",
      jobTitle: "",
      employmentType: "",
      locationType: "",
      location: "",
      startDate: new Date(),
      endDate: undefined,
      current: false,
      description: "",
      skills: "",
    },
  });

  const { handleSubmit, watch, setValue } = form;
  const isCurrent = watch("current");
  const selectedStartDate = watch("startDate");

  const onSubmit = (data: z.infer<typeof experienceFormSchema>) => {
    startTransition(async () => {
      const newExperienceEntry: EffectiveExperienceData = {
        ...data,
        company: data.company,
        jobTitle: data.jobTitle,
        employmentType: data.employmentType,
        locationType: data.locationType,
        location: data.location,
        startDate: data.startDate, // This will be a Date object from the form
        description: data.description,
        current: data.current,
        skills: data.skills ? data.skills.split(",").map((s) => s.trim()) : [],
        endDate: data.current ? undefined : data.endDate, // This will be a Date object or undefined
      };

      // Optimistically add the new experience to the UI
      addOptimisticExperience(newExperienceEntry);

      // Reset editing state (though not fully used for updates yet)
      setEditing(false);
      setCurrentEditingIndex(null);

      // The dialog will close and form will reset via onOpenChange if successful,
      // or if the user closes it manually.

      try {
        const response = await createExperience({
          experienceData: newExperienceEntry,
        });

        if (response) {
          // Assuming response is truthy on success
          toast({
            title: "Experience Data Saved",
            description: "Your experience data has been saved successfully",
          });
          setDialogOpen(false); // Close dialog on success, which will trigger form reset via onOpenChange
        } else {
          // Server action completed but indicated failure
          toast({
            title: "Submission Issue",
            description: "Could not save experience data. Please try again.",
            variant: "destructive",
          });
          // The optimistic update will be visible until router.refresh() corrects it.
        }
      } catch (error) {
        console.error("Failed to create experience:", error);
        toast({
          title: "Error",
          description: "An error occurred while saving experience data.",
          variant: "destructive",
        });
        // The optimistic update remains visible until router.refresh() corrects it.
      } finally {
        // router.refresh() is crucial. It re-fetches data, updating the `experienceData` prop.
        // React then reconciles this with the optimistic state.
        router.refresh();
      }
    });
  };

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Experience
          </CardTitle>
          <CardDescription>
            Please provide your work experience details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Accordion type="single" collapsible>
            {optimisticExperiences?.map((item, index) => (
              <AccordionItem value={`${item.jobTitle}+${index}`} key={index}>
                <AccordionTrigger>
                  {item.jobTitle} at {item.company}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  <p className="font-semibold">
                    {item.employmentType} - {item.locationType}
                    {item.location && ` (${item.location})`}
                  </p>
                  <p>
                    {/* Ensure dates are parsed if they are strings from server data */}
                    {format(new Date(item.startDate), "MMM yyyy")} -{" "}
                    {item.current || !item.endDate
                      ? "Present"
                      : format(new Date(item.endDate), "MMM yyyy")}
                  </p>
                  {item.description && (
                    <p className="mt-2">{item.description}</p>
                  )}
                  {item.skills && item.skills.length > 0 && (
                    <p className="mt-2">Skills: {item.skills.join(", ")}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Dialog
            open={dialogOpen}
            onOpenChange={(open) => {
              setDialogOpen(open);
              if (!open) {
                setEditing(false);
                setCurrentEditingIndex(null);
                setValue("current", false);
                form.reset();
              }
            }}
          >
            <DialogTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondary"}
                onClick={() => {
                  setEditing(false);
                  setValue("current", false);
                  form.reset();
                }}
              >
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-lvh">
              <DialogHeader>
                <DialogTitle>Add Experience Details</DialogTitle>
                <DialogDescription>
                  Please provide your experience details.
                </DialogDescription>
              </DialogHeader>
              <div>
                <Form {...form}>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      name="company"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="jobTitle"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="employmentType"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employment Type</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Employment Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {employmentTypeOptions.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="locationType"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location Type</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Location Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {locationTypeOptions.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="location"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Start Date</FormLabel>
                          <Popover modal={true}>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
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
                                disabled={(date) => date > new Date()}
                                autoFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="current"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Currently Working</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {!isCurrent && (
                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>End Date</FormLabel>
                            <Popover modal={true}>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[240px] pl-3 text-left font-normal",
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
                                  disabled={(date) =>
                                    date < selectedStartDate ||
                                    date > new Date()
                                  }
                                  autoFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      name="description"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="skills"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Skills (Comma-separated)</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <DialogFooter>
                      <Button type="submit" disabled={isPending}>
                        {isPending && (
                          <Loader2 size={16} className="mr-2 animate-spin" /> // Use isPending for loader
                        )}
                        {editing ? "Update" : "Add"}
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExperienceForm;

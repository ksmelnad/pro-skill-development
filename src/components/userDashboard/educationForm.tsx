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

import { useState } from "react";
import { createEducation } from "@/app/actions/education";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const graduationOptions = [
  { value: "B.A", label: "Bachelor of Arts (B.A)" },
  { value: "B.Sc", label: "Bachelor of Science (B.Sc)" },
  { value: "B.Com", label: "Bachelor of Commerce (B.Com)" },
  { value: "B.Tech", label: "Bachelor of Technology (B.Tech)" },
  { value: "B.E", label: "Bachelor of Engineering (B.E)" },
  { value: "B.B.A", label: "Bachelor of Business Administration (BBA)" },
  { value: "B.C.A", label: "Bachelor of Computer Applications (BCA)" },
  { value: "B.Ed", label: "Bachelor of Education (B.Phil)" },
  { value: "Other", label: "Other" },
];
const postgraduationOptions = [
  { value: "M.A", label: "Master of Arts (M.A)" },
  { value: "M.Sc", label: "Master of Science (M.Sc)" },
  { value: "M.Com", label: "Master of Commerce (M.Com)" },
  { value: "M.Tech", label: "Master of Technology (M.Tech)" },
  { value: "M.E", label: "Master of Engineering (M.E)" },
  { value: "M.B.A", label: "Master of Business Administration (MBA)" },
  { value: "M.C.A", label: "Master of Computer Applications (MCA)" },
  { value: "M.Phil", label: "Master of Philosophy (M.Phil)" },
  { value: "M.Ed", label: "Master of Education (M.Ed)" },
  { value: "Other", label: "Other" },
];
const diplomaOptions = [
  { value: "Diploma", label: "Diploma" },
  { value: "PG Diploma", label: "Post Graduate Diploma" },
  { value: "Other", label: "Other" },
];
const doctorateOptions = [
  { value: "Ph.D", label: "Doctor of Philosophy (Ph.D)" },
];

// ------------------------------------------------------------------
// 4. Define Education Levels (each level has a key and label)
// Only higher education levels have degree options.
const educationLevels = [
  { level: "10th", label: "10th" },
  { level: "12th", label: "12th" },
  { level: "graduation", label: "Graduation", options: graduationOptions },
  {
    level: "postgraduation",
    label: "Postgraduation",
    options: postgraduationOptions,
  },
  { level: "diploma", label: "Diploma", options: diplomaOptions },
  { level: "doctorate", label: "Doctorate", options: doctorateOptions },
];

const educationFormSchema = z
  .object({
    level: z.string().min(2, {
      message: "Please select a level",
    }),
    board: z.string().optional(),
    institute: z.string().optional(),
    degree: z.string().optional(),
    subjects: z.string().min(2, {
      message: "Please enter the details",
    }),
    year: z.coerce
      .number({
        required_error: "Please enter your year",
      })
      .optional(),
    expectedYear: z.coerce.number().optional(),
    currentSemester: z.coerce
      .number({
        required_error: "Please enter your current semester",
      })
      .optional(),
    grade: z.string().min(2, {
      message: "Please enter the details",
    }),
    completed: z
      .boolean({
        required_error: "Please select if you have completed this level",
      })
      .default(true),
  })
  .superRefine((data, ctx) => {
    if (["10th", "12th"].includes(data.level) && !data.board) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter the board details",
        path: ["board"],
      });
    }

    if (
      ["graduation", "postgraduation", "diploma", "doctorate"].includes(
        data.level,
      ) &&
      !data.institute
    ) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter the institute details",
        path: ["institute"],
      });
    }

    if (data.completed) {
      if (!data.year) {
        ctx.addIssue({
          code: "custom",
          message: "Please endter year",
          path: ["year"],
        });
      }
    } else {
      if (!data.expectedYear) {
        ctx.addIssue({
          code: "custom",
          message: "Please enter expected year",
          path: ["expectedYear"],
        });
      }
      if (!data.currentSemester) {
        ctx.addIssue({
          code: "custom",
          message: "Please enter current semester/year",
          path: ["currentSemester"],
        });
      }
    }
  });

// export type EducationData = z.infer<typeof educationFormSchema>;
//
export type EducationData = {
  level: string;
  subjects: string;
  grade: string;
  completed: boolean;
  board?: string;
  institute?: string;
  degree?: string;
  year?: number;
  expectedYear?: number;
  currentSemester?: number;
};

const EducationForm = ({
  educationData,
}: {
  educationData: EducationData[];
}) => {
  // const [educationData, setEducationData] = useState<EducationData[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentEditingIndex, setCurrentEditingIndex] = useState<number | null>(
    null,
  );
  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof educationFormSchema>>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      level: "",
      board: "",
      institute: "",
      subjects: "",
      year: new Date().getFullYear(),
      expectedYear: new Date().getFullYear() + 1,
      currentSemester: 1,
      grade: "",
      completed: true,
    },
  });

  const { handleSubmit, watch } = form;

  const selectedLevel = watch("level");
  const completed = watch("completed");

  const onSubmit = async (data: z.infer<typeof educationFormSchema>) => {
    const cleanedData: EducationData = { ...data };

    if (cleanedData.level !== "10th" && cleanedData.level !== "12th") {
      delete cleanedData.board;
    }

    if (
      !["graduation", "postgraduation", "diploma", "doctorate"].includes(
        cleanedData.level,
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

    // let updatedData;
    // if (editing && currentEditingIndex !== null) {
    //   updatedData = educationData.map((item, index) =>
    //     index === currentEditingIndex ? cleanedData : item,
    //   );
    // } else {
    //   updatedData = [...educationData, cleanedData];
    // }

    // setEducationData(
    //   editing
    //     ? educationData.map((item, index) =>
    //         index === currentEditingIndex ? data : item,
    //       )
    //     : [...educationData, data],
    // );
    console.log(data);
    setEditing(false);
    setCurrentEditingIndex(null);

    const response = await createEducation({ educationData: cleanedData });
    if (response) {
      toast({
        title: "Education Data Saved",
        description: "Your education data has been saved successfully",
      });
    } else {
      console.log("Error in uploading education data");
      toast({
        title: "Error",
        description: "Error in uploading education data",
        variant: "destructive",
      });
    }

    router.refresh();

    form.reset();
    setDialogOpen(false);
  };

  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl">Education Details</h1>
      {educationData?.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <p>
                {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
                {item.degree && `: ${item.degree}`}
              </p>
              <Button
                variant={"outline"}
                onClick={() => {
                  setEditing(true);
                  setCurrentEditingIndex(index);
                  form.reset(item); // prefil with the selected item
                  setDialogOpen(true);
                }}
              >
                Edit
              </Button>
            </CardTitle>
            <CardDescription>
              {item.board
                ? `Board: ${item.board}`
                : item.institute &&
                  `University/College/Institute: ${item.institute}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Subjects: {item.subjects}</p>
            {item.completed ? (
              <>
                <p>Completed: Yes</p>
                <p>Year: {item.year}</p>
              </>
            ) : (
              <>
                <p>Expected Year: {item.expectedYear}</p>
                <p>Current Semester/Year: {item.currentSemester}</p>
              </>
            )}
            <p>Grade: {item.grade}</p>
          </CardContent>
        </Card>
      ))}
      <div className="space-x-2">
        <Dialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) {
              setEditing(false);
              setCurrentEditingIndex(null);
            }
          }}
        >
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditing(false);
                form.reset();
              }}
            >
              Add Education Details
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Education Details</DialogTitle>
              <DialogDescription>
                Please provide your education details.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    name="level"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Level</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {educationLevels.map((level) => (
                              <SelectItem key={level.level} value={level.level}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {(selectedLevel === "10th" || selectedLevel === "12th") && (
                    <FormField
                      name="board"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Board</FormLabel>
                          <Input {...field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {(selectedLevel === "graduation" ||
                    selectedLevel === "postgraduation" ||
                    selectedLevel === "diploma" ||
                    selectedLevel === "doctorate") && (
                    <>
                      <FormField
                        name="degree"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Degree</FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Degree" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {(
                                  educationLevels.find(
                                    (level) => level.level === selectedLevel,
                                  )?.options || []
                                ).map((degree, index) => (
                                  <SelectItem key={index} value={degree.value}>
                                    {degree.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="institute"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>University/College/Institute</FormLabel>
                            <Input {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {selectedLevel !== "" && (
                    <>
                      <FormField
                        name="subjects"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stream/Subjects/Major/Minor</FormLabel>
                            <Input {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="completed"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormLabel>Completed</FormLabel>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {completed ? (
                        <FormField
                          name="year"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year</FormLabel>
                              <Input type="number" {...field} />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ) : (
                        <div className="flex items-center justify-between gap-2">
                          <FormField
                            name="expectedYear"
                            control={form.control}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expected Year</FormLabel>
                                <Input type="number" {...field} />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            name="currentSemester"
                            control={form.control}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Semester/Year</FormLabel>
                                <Input type="number" {...field} />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      <FormField
                        name="grade"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grade/Percentage/CGPA</FormLabel>
                            <Input {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  <DialogFooter>
                    <Button
                      type="submit"
                      // disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting && (
                        <Loader2 size={16} className="mr-2 animate-spin" />
                      )}
                      {/* {editing ? "Update" : "Add"} */}
                      Add
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
        {/* {educationData.length > 0 && (
          <Button className="bg-green-700" onClick={uploadEducationData}>
            Save
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default EducationForm;

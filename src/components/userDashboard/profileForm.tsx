"use client";

import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { createProfile } from "@/app/actions/profile";
import { Profile } from "@prisma/client";
import { useToast } from "@/hooks/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Progress } from "@/components/ui/progress";

// import { DatePicker } from "./datepicker";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Loader2, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { format, isValid } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  image: z.string().optional(),
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  email: z.string().email(),
  mobile: z.string().optional(),
  relative: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  hobbies: z.string().optional(),
  areaImprovementCurrent: z.string().optional(),
  areaImprovementFuture: z.string().optional(),
});

export function ProfileForm({ profile }: { profile: Profile }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      fullName: "",
      dob: new Date(),
      email: "",
      mobile: "",
      relative: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      hobbies: "",
      areaImprovementCurrent: "",
      areaImprovementFuture: "",
    },
  });

  const { reset } = form;

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      reset({
        image:
          (user.hasImage && user.imageUrl) ||
          profile?.image! ||
          "/user-128.svg",
        fullName: user.fullName || profile?.fullName! || "",
        dob: new Date(profile?.dob!) || new Date(),
        email: user.emailAddresses[0]?.emailAddress || profile?.email! || "",
        mobile: profile?.mobile! || user.phoneNumbers[0]?.phoneNumber || "",
        relative: profile?.relative! || "",
        address: profile?.address! || "",
        city: profile?.city || "",
        state: profile?.state || "",
        country: profile?.country || "",
        postalCode: profile?.postalCode || "",
        hobbies: profile?.hobbies || "",
        areaImprovementCurrent: profile?.areaImprovementCurrent || "",
        areaImprovementFuture: profile?.areaImprovementFuture || "",
      });
    }
  }, [isLoaded, profile, isSignedIn, user, reset]);

  // const resumeRef = form.register("resume");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await createProfile({
        profile: {
          image: values.image,
          fullName: values.fullName,
          dob: values.dob.toISOString(),
          mobile: values.mobile as string,
          relative: values.relative,
          address: values.address,
          city: values.city,
          state: values.state,
          postalCode: values.postalCode,
          country: values.country,
          hobbies: values.hobbies,
          areaImprovementCurrent: values.areaImprovementCurrent,
          areaImprovementFuture: values.areaImprovementFuture,
        },
      });
      console.log(response);

      if (response.success === true) {
        toast({
          title:
            "🎉 Successfully saved your profile. Redirecting to assessment...",
          description: response.message,
        });
        router.push("/dashboard/assessment");
      } else {
        toast({
          title: "❌ Error ",
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const watchedValues = form.watch();
  const {
    formState: { errors, dirtyFields },
  } = form;

  const calculateProgress = () => {
    const totalFields = Object.keys(formSchema.shape).length;
    let validFilledCount = 0;

    Object.keys(formSchema.shape).forEach((fieldName) => {
      const key = fieldName as keyof typeof formSchema.shape;
      const value = watchedValues[key];
      const isDirty = dirtyFields[key];
      const hasError = !!errors[key];

      // Check if field is valid and filled
      if (typeof value === "string") {
        if (value.trim() !== "" && !hasError) validFilledCount++;
      } else if (key === "dob") {
        if (isValid(value) && !hasError) validFilledCount++;
      } else if (value !== undefined && !hasError) {
        validFilledCount++;
      }
    });

    return Math.round((validFilledCount / totalFields) * 100);
  };

  const progress = calculateProgress();

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 bg-white"
        >
          <div className="flex items-center gap-2">
            <Progress value={progress} className="flex-1" />
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Upload Profile Picture</FormLabel> */}
                <FormControl>
                  {field.value ? (
                    <Image
                      className="object-cover rounded"
                      src={field.value!}
                      alt="profile"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <div>Image</div>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value && isValid(field.value) ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <DatePicker /> */}
          <FormField
            control={form.control}
            name="email"
            disabled
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="relative"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Father/Husband Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <hr />

          <FormField
            control={form.control}
            name="hobbies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hobbies</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="areaImprovementCurrent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area of Improvement (Current)</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areaImprovementFuture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area of Improvement (Next)</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload CV</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}

          <Button
            disabled={form.formState.isSubmitting || form.formState.isSubmitted}
            type="submit"
          >
            {form.formState.isSubmitting && (
              <Loader2 className="animate-spin" />
            )}
            {form.formState.isSubmitting ? "Saving..." : "Save"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

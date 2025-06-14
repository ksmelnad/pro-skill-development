"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { PersonalInfo, Profile } from "@prisma/client";
import { useToast } from "@/hooks/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import {
  Brain,
  Briefcase,
  CalendarIcon,
  Globe,
  LinkIcon,
  Loader2,
  Mail,
  MapPin,
  Plus,
  Smartphone,
  Target,
  User,
  Users,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, isValid } from "date-fns";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "../phoneInput";
// import isValidPostalCode from "postal-codes-js";
// import "react-phone-number-input/style.css"; // Base styles for react-phone-number-input

import countriesWithStatesAndCities, {
  City,
  Country,
  State,
} from "@/data/countries_with_states_and_cities";
import { updatePersonalInfo } from "@/app/actions/profile";
// import { updatePersonalInfo } from "@/app/actions/profile";

// TODO: Postal code validation can be added later
// TODO: Country Flag along with country name can be added later

const formSchema = z.object({
  image: z.string().nullable(),
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  email: z.string().email(),
  mobile: z
    .string()
    .nullable()
    .refine(
      (val) => {
        // If the value is undefined, null, or an empty string, it's valid for an optional field.
        if (!val || val.trim() === "") {
          return true;
        }
        // Otherwise, validate the phone number (expects E.164 format)
        return isValidPhoneNumber(val);
      },
      { message: "Invalid phone number. Please enter a complete number." }
    ),
  relative: z.string().nullable(),
  address: z.string(),
  city: z.string(),
  state: z.string().min(2, {
    message: "State must be selected.",
  }),
  postalCode: z.string().nullable(),
  country: z.string().min(2, {
    message: "Country must be selected.",
  }),
  hobbies: z.string().nullable(),
  areaImprovementCurrent: z.string().nullable(),
  areaImprovementFuture: z.string().nullable(),
  linkedIn: z
    .string()
    .url({ message: "Invalid LinkedIn URL" })
    .refine(
      (url) => {
        if (!url) return true;
        try {
          const parsedUrl = new URL(url);
          return (
            parsedUrl.protocol === "https:" &&
            parsedUrl.hostname.includes("linkedin.com")
          );
        } catch (error) {
          return false;
        }
      },
      {
        message: "Must be a valid LinkedIn URL starting with https://",
      }
    )
    .or(z.literal(""))
    .nullable(),

  github: z
    .string()
    .url({ message: "Invalid GitHub URL" })
    .refine(
      (url) => {
        if (!url) return true;
        try {
          const parsedUrl = new URL(url);
          return (
            parsedUrl.protocol === "https:" &&
            parsedUrl.hostname.includes("github.com")
          );
        } catch (error) {
          return false;
        }
      },
      {
        message: "Must be a valid GitHub URL starting with https://",
      }
    )
    .or(z.literal(""))
    .nullable(),

  twitter: z
    .string()
    .url({ message: "Invalid Twitter URL" })
    .refine(
      (url) => {
        if (!url) return true;
        try {
          const parsedUrl = new URL(url);
          return (
            parsedUrl.protocol === "https:" &&
            parsedUrl.hostname.includes("x.com")
          );
        } catch (error) {
          return false;
        }
      },
      {
        message: "Must be a valid X (Twitter) URL starting with https://",
      }
    )
    .or(z.literal(""))
    .nullable(),
  facebook: z
    .string()
    .url({ message: "Invalid Facebook URL" })
    .refine(
      (url) => {
        if (!url) return true;
        try {
          const parsedUrl = new URL(url);
          return (
            parsedUrl.protocol === "https:" &&
            parsedUrl.hostname.includes("facebook.com")
          );
        } catch (error) {
          return false;
        }
      },
      {
        message: "Must be a valid Facebook URL starting with https://",
      }
    )
    .or(z.literal(""))
    .nullable(),
});

export function PersonalInfoForm({
  personalInfo,
}: {
  personalInfo?: PersonalInfo | null;
}) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { toast } = useToast();

  const [date, setDate] = useState<Date>();
  const [availableStates, setAvailableStates] = useState<State[]>([]);
  const [availableCities, setAvailableCities] = useState<City[]>([]);
  // State for Combobox open/close
  const [openCountry, setOpenCountry] = useState(false);
  const [openState, setOpenState] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      fullName: "",
      dob: undefined, // Will be set by useEffect
      email: "",
      mobile: null,
      relative: null,
      address: "",
      city: "",
      state: "",
      postalCode: null,
      country: "",
      hobbies: null,
      areaImprovementCurrent: null,
      areaImprovementFuture: null,
      linkedIn: null,
      github: null,
      twitter: null,
      facebook: null,
    },
  });

  const { reset, setValue } = form;

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      // Base values from Clerk user
      const baseValues: Partial<z.infer<typeof formSchema>> = {
        image: (user.hasImage && user.imageUrl) || "/user-128.svg",
        fullName: user.fullName || "",
        email: user.emailAddresses[0]?.emailAddress || "",
        mobile: user.phoneNumbers[0]?.phoneNumber || null,
        dob: new Date(), // Default, will be overridden by personalInfo if available and valid
      };

      if (personalInfo) {
        // Override with personalInfo data
        const personalInfoOverrides: Partial<z.infer<typeof formSchema>> = {
          ...baseValues,
          image: personalInfo.image || baseValues.image,
          fullName: personalInfo.fullName || baseValues.fullName,
          dob:
            personalInfo.dob && isValid(new Date(personalInfo.dob))
              ? new Date(personalInfo.dob)
              : baseValues.dob,
          email: personalInfo.email || baseValues.email,
          mobile: personalInfo.mobile || baseValues.mobile,
          relative: personalInfo.relative || null,
          address: personalInfo.address || "",
          postalCode: personalInfo.postalCode || null,
          hobbies: personalInfo.hobbies || null,
          areaImprovementCurrent: personalInfo.areaImprovementCurrent || null,
          areaImprovementFuture: personalInfo.areaImprovementFuture || null,
          linkedIn: personalInfo.linkedIn || null,
          github: personalInfo.github || null,
          twitter: personalInfo.twitter || null,
          facebook: personalInfo.facebook || null,
        };

        // Convert country/state/city names from personalInfo to IDs
        let countryId = "";
        let stateId = "";
        let cityId = "";

        if (personalInfo.country) {
          const foundCountry = countriesWithStatesAndCities.find(
            (c) => c.name === personalInfo.country
          );
          if (foundCountry) {
            countryId = String(foundCountry.id);
            if (personalInfo.state) {
              const foundState = foundCountry.states.find(
                (s) => s.name === personalInfo.state
              );
              if (foundState) {
                stateId = String(foundState.id);
                if (personalInfo.city) {
                  const foundCity = foundState.cities.find(
                    (c) => c.name === personalInfo.city
                  );
                  if (foundCity) {
                    cityId = String(foundCity.id);
                  }
                }
              }
            }
          }
        }

        reset({
          ...personalInfoOverrides,
          country: countryId,
          state: stateId,
          city: cityId,
        });
      } else {
        // No personalInfo, just use Clerk data and defaults from baseValues
        // and ensure other fields are reset
        reset({
          ...baseValues,
          country: "",
          state: "",
          city: "",
          address: "",
          relative: null,
          postalCode: null,
          hobbies: null,
          areaImprovementCurrent: null,
          areaImprovementFuture: null,
          linkedIn: null,
          github: null,
          twitter: null,
          facebook: null,
        });
      }
    }
  }, [isLoaded, isSignedIn, user, personalInfo, reset]);

  // Watch the selected country and state values
  const selectedCountryId = form.watch("country");
  const selectedStateId = form.watch("state");

  // Effect to update states when country changes
  useEffect(() => {
    if (selectedCountryId) {
      const country = countriesWithStatesAndCities.find(
        (c) => String(c.id) === selectedCountryId
      );
      if (country) {
        setAvailableStates(country.states);
      } else {
        setAvailableStates([]);
      }
    } else {
      setAvailableStates([]);
    }
  }, [selectedCountryId]);

  // Effect to update cities when state changes
  useEffect(() => {
    if (selectedStateId) {
      const country = countriesWithStatesAndCities.find(
        (c) => String(c.id) === selectedCountryId
      );
      if (country) {
        const state = country.states.find(
          (s) => String(s.id) === selectedStateId
        );
        if (state) {
          setAvailableCities(state.cities);
        } else {
          setAvailableCities([]);
        }
      } else {
        setAvailableCities([]);
      }
    } else {
      setAvailableCities([]);
    }
  }, [selectedStateId, selectedCountryId]);

  // const resumeRef = form.register("resume");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Original form values (with IDs)
    console.log("Original form values (IDs):", values);

    // --- Transformation to names ---
    let countryName = values.country; // Start with the ID or undefined/empty string
    let stateName = values.state;
    let cityName = values.city;

    if (values.country && values.country !== "") {
      const countryObject = countriesWithStatesAndCities.find(
        (c) => String(c.id) === values.country
      );
      if (countryObject) countryName = countryObject.name;
      // else, countryName remains the ID if not found (as a fallback)
    }

    // availableStates is already filtered based on the selected country
    if (values.state && values.state !== "" && availableStates.length > 0) {
      const stateObject = availableStates.find(
        (s) => String(s.id) === values.state
      );
      if (stateObject) stateName = stateObject.name;
    }

    // availableCities is already filtered based on the selected state
    if (values.city && values.city !== "" && availableCities.length > 0) {
      const cityObject = availableCities.find(
        (c) => String(c.id) === values.city
      );
      if (cityObject) cityName = cityObject.name;
    }
    // --- End Transformation ---

    const valuesWithNames = {
      ...values,

      country: countryName,
      state: stateName,
      city: cityName,
    };

    console.log("Form values with names:", valuesWithNames);

    try {
      const response = await updatePersonalInfo(valuesWithNames);
      if (response.success === true) {
        toast({
          title: "🎉 Personal Information has been updated successfully",
          description: response.message,
        });
      }
    } catch (error) {}

    // console.log(response)

    // try {
    //   const response = await createProfile({
    //     personalInfo: {
    //       image: valuesWithNames.image,
    //       fullName: valuesWithNames.fullName,
    //       dob: valuesWithNames.dob.toISOString(),
    //       mobile: valuesWithNames.mobile as string,
    //       relative: valuesWithNames.relative,
    //       address: valuesWithNames.address,
    //       city: valuesWithNames.city, // Now this will be the name
    //       state: valuesWithNames.state, // Now this will be the name
    //       postalCode: valuesWithNames.postalCode,
    //       country: valuesWithNames.country, // Now this will be the name
    //       hobbies: valuesWithNames.hobbies,
    //       areaImprovementCurrent: valuesWithNames.areaImprovementCurrent,
    //       areaImprovementFuture: valuesWithNames.areaImprovementFuture,
    //       linkedIn: valuesWithNames.linkedin || null,
    //       github: valuesWithNames.github || null,
    //       twitter: valuesWithNames.twitter || null,
    //       facebook: valuesWithNames.facebook || null,
    //     },
    //   });
    //   console.log(response);
    //   if (response.success === true) {
    //     toast({
    //       title:
    //         "🎉 Successfully saved your personalInfo. Redirecting to assessment...",
    //       description: response.message,
    //     });
    //     router.push("/dashboard/assessment");
    //   } else {
    //     toast({
    //       title: "❌ Error ",
    //       description: "Something went wrong",
    //       variant: "destructive",
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
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

  // const selectedCountry = form.watch("country");
  // const selectedState = form.watch("state");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">
          Personal Information
        </CardTitle>
        <CardDescription>
          Manage your personal details and contact information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-center gap-2">
              <Progress value={progress} className="flex-1" />
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Upload Profile Picture</FormLabel> */}
                    <FormControl>
                      {field.value ? (
                        <Image
                          className="object-cover rounded-full"
                          src={field.value!}
                          alt="personalInfo"
                          width={200}
                          height={200}
                        />
                      ) : (
                        <div>Image</div>
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </FormLabel>

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
                    <FormLabel className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Date of Birth
                    </FormLabel>
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
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          autoFocus
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </FormLabel>
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
                    <FormLabel className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      Mobile Number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        international
                        defaultCountry={"IN"}
                        placeholder="Enter phone number"
                        // value={field.value || ""} // Ensure it's controlled
                        // onChange={field.onChange} // Passes E.164 string or undefined
                        // onBlur={field.onBlur} // For react-hook-form validation trigger
                        // The component is styled via the imported phone-input.css
                        // Country code is displayed and non-editable directly,
                        // user changes it by selecting a country.
                        {...field} // Spread the field props to ensure react-hook-form integration
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="relative"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Father/Spouse Name (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value ?? ""} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-semibold font-headline border-b pb-2 mt-16 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Address Information
            </h3>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Address" rows={3} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Country
                    </FormLabel>
                    <Popover open={openCountry} onOpenChange={setOpenCountry}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openCountry}
                            className={cn(
                              "w-[300px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? countriesWithStatesAndCities.find(
                                  (country) =>
                                    String(country.id) === field.value
                                )?.emoji +
                                "\u00a0".repeat(3) +
                                countriesWithStatesAndCities.find(
                                  (country) =>
                                    String(country.id) === field.value
                                )?.name
                              : "Select country"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput placeholder="Search country..." />
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandList>
                            <CommandGroup>
                              {countriesWithStatesAndCities.map((country) => (
                                <CommandItem
                                  value={country.name}
                                  key={country.id}
                                  onSelect={() => {
                                    form.setValue(
                                      "country",
                                      String(country.id)
                                    );
                                    form.setValue("state", ""); // Clear state
                                    form.setValue("city", ""); // Clear city
                                    setOpenCountry(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      String(country.id) === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {country.emoji}
                                  {"\u00a0".repeat(3)}
                                  {country.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>State/Province</FormLabel>
                    <Popover open={openState} onOpenChange={setOpenState}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openState}
                            disabled={!selectedCountryId}
                            className={cn(
                              "w-[300px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? availableStates.find(
                                  (state) => String(state.id) === field.value
                                )?.name
                              : "Select state/province"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput placeholder="Search state..." />
                          <CommandEmpty>No state found.</CommandEmpty>
                          <CommandList>
                            <CommandGroup>
                              {availableStates.map((state) => (
                                <CommandItem
                                  value={state.name}
                                  key={state.id + state.name}
                                  onSelect={() => {
                                    form.setValue("state", String(state.id));
                                    form.setValue("city", ""); // Clear city
                                    setOpenState(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      String(state.id) === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {state.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>City</FormLabel>
                    <Popover open={openCity} onOpenChange={setOpenCity}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openCity}
                            disabled={!selectedStateId}
                            className={cn(
                              "w-[300px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? availableCities.find(
                                  (city) => String(city.id) === field.value
                                )?.name
                              : "Select city"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput placeholder="Search city..." />
                          <CommandEmpty>No city found.</CommandEmpty>
                          <CommandList>
                            <CommandGroup>
                              {availableCities.map((city) => (
                                <CommandItem
                                  value={city.name}
                                  key={city.id + city.name}
                                  onSelect={() => {
                                    form.setValue("city", String(city.id));
                                    setOpenCity(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      String(city.id) === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {city.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
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
                      <Input
                        placeholder="Postal Code"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <h3 className="text-lg font-semibold font-headline border-b pb-2 mt-16 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-primary" />
              Social Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/in/"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>X (Twitter)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://x.com/"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://facebook.com/"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <h3 className="text-lg font-semibold font-headline border-b pb-2 mt-16 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Interests & Goals
            </h3>

            <FormField
              control={form.control}
              name="hobbies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hobbies</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} value={field.value ?? ""} />
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
                  <FormLabel className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Current Areas for Improvement (Optional)
                  </FormLabel>

                  <FormControl>
                    <Textarea rows={3} {...field} value={field.value ?? ""} />
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
                  <FormLabel className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Future Learning Goals (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} value={field.value ?? ""} />
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
              disabled={form.formState.isSubmitting}
              type="submit"
              className="w-full md:w-auto"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin" />
              )}
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

"use client";

import { useFieldArray } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface AddEducationProps {
  control: any;
  name: string; // e.g. "education.graduation"
  label: string;
  options: { value: string; label: string }[];
}

export function AddEducation({
  control,
  name,
  label,
  options,
}: AddEducationProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <Input {...field} />

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

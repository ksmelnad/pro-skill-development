// EducationSelectField.tsx
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
import { Plus } from "lucide-react";
import { X as XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationSelectFieldProps {
  control: any;
  name: string; // e.g. "education.graduation"
  label: string;
  options: { value: string; label: string }[];
}

export function EducationSelectField({
  control,
  name,
  label,
  options,
}: EducationSelectFieldProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="mb-4">
      <FormLabel>{label}</FormLabel>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <FormField
            control={control}
            name={`${name}.${index}.degree`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={`Select ${label} Degree`} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
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
            name={`${name}.${index}.subject`}
            render={({ field }) => (
              <FormItem>
                <Input {...field} placeholder="Subject" />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`${name}.${index}.institution`}
            render={({ field }) => (
              <FormItem>
                <Input {...field} placeholder="Institution" />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`${name}.${index}.grade`}
            render={({ field }) => (
              <FormItem>
                <Input {...field} placeholder="Grade" />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`${name}.${index}.year`}
            render={({ field }) => (
              <FormItem>
                <Input {...field} placeholder="Year" />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => remove(index)}
          >
            <XIcon size={16} />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append({ degree: "" })}
        className="mt-2"
        size="icon"
      >
        <Plus size={16} />
      </Button>
    </div>
  );
}

"use client";
import React from "react";
import { DropdownProps } from "react-day-picker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MonthAndYearDropdown({
  value,
  onChange,
  name,
  //   options,
  "aria-label": ariaLabel,
}: DropdownProps) {
  const handleChange = (value: string) => {
    const changeEvent = {
      target: {
        value,
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange?.(changeEvent);
  };

  return (
    <Select value={value?.toString()} onValueChange={handleChange}>
      <SelectTrigger name={name} aria-label={ariaLabel}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {/* {options?.map((option, childIdx: number) => (
          <SelectItem
            key={`${option.value}-${childIdx}`}
            value={option.value?.toString() ?? ""}
          >
            {option.label}
          </SelectItem>
        ))} */}
      </SelectContent>
    </Select>
  );
}

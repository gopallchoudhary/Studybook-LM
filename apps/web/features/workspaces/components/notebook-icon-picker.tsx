"use client";

import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const iconOptions = [
  { value: "🧠", label: "Study" },
  { value: "💻", label: "Coding" },
  { value: "📗", label: "Research" },
  { value: "📝", label: "Notes" },
  { value: "🔬", label: "Science" },
  { value: "🚀", label: "Projects" },
  { value: "🎨", label: "Creative" },
] as const;

type NotebookIconPickerProps = {
  onChange: (value: string) => void;
  value: string;
};

export function NotebookIconPicker({ onChange, value }: NotebookIconPickerProps) {
  return (
    <RadioGroup
      aria-label="Choose a notebook icon"
      className="flex w-full flex-wrap gap-2"
      onValueChange={(next) => {
        if (typeof next === "string") onChange(next);
      }}
      value={value}
    >
      {iconOptions.map((option) => (
        <RadioGroupItem
          aria-label={option.label}
          className="grid size-11 place-items-center rounded-xl border border-border text-xl transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring data-checked:border-brand data-checked:bg-brand/10 data-checked:ring-2 data-checked:ring-brand/25 [&_[data-slot=radio-group-indicator]]:hidden"
          key={option.value}
          value={option.value}
        >
          {option.value}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
}

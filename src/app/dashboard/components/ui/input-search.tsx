"use client";

import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const InputSearch = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Command className="w-10">
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            variant="ghost"
            size="icon"
            aria-expanded={open}
          >
            <Search />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="rounded-lg border shadow-md min-w-[350px]">
          <CommandInput placeholder="search..." />
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandEmpty className="text-gray-500 text-center text-sm">
              何もありません
            </CommandEmpty>
          </CommandList>
        </PopoverContent>
      </Command>
    </Popover>
  );
};

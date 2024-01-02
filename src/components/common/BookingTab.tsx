"use client";

import { CalendarIcon, Check, ChevronsUpDown, Plane } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Icons } from "./Icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";

const frameworks = [
  {
    value: "roundtrip",
    label: "Round Trip",
  },
  {
    value: "oneway",
    label: "One way",
  },
];

const BookingTab = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("roundtrip");
  const currentDate = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: currentDate,
    to: addDays(currentDate, 120),
  });

  console.log(value);

  console.log(date);

  return (
    <div className="bg-white min-w-[1232px] h-[280px] py-4 px-8 rounded-2xl shadow">
      <div className="flex gap-8 items-center justify-start">
        <div>
          <Link href={"#"} className="text-black flex items-center py-4 gap-1">
            <Plane className="fill-current" />
            <p className="capitalize font-bold">find flight</p>
          </Link>
          <div className="w-full h-[4px] bg-green-200" />
        </div>
        <div className="w-[4px] h-[55.9px] bg-slate-200" />
        <div>
          <Link href={"#"} className="flex items-center py-4 gap-1">
            <Icons.bed className="!fill-black" />
            <p className="capitalize font-bold text-black">find flight</p>
          </Link>
          <div className="w-full h-[4px] bg-green-200" />
        </div>
      </div>
      <div className="w-full flex items-center gap-6 py-8">
        {/* Trip */}
        <div>
          <Label>Trip</Label>
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Return"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* date picker */}
        <div>
          {value === "roundtrip" && (
            <>
              <Label>Depart-Return</Label>
              <div className="grid gap-2 ">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingTab;

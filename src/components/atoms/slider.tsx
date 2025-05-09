"use client";

import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";

import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Slider({ className, ...props }: ComponentProps<typeof Root>) {
  return (
    <Root
      className={twMerge(
        "relative flex w-full touch-none items-center select-none",
        className,
      )}
      {...props}
    >
      <Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-200">
        <Range className="absolute h-full bg-blue-700" />
      </Track>
      <Thumb className="block size-5 rounded-full border-2 border-blue-700 bg-blue-700 ring-offset-blue-700 transition-colors focus-visible:ring-blue-400 focus-visible:outline-none" />
    </Root>
  );
}

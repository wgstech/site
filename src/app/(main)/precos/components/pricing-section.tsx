"use client";

import { Slider } from "@/components/atoms/slider";
import { prices } from "@/lib/constants/prices";
import {
  defaultMachineCount,
  machineCountSliderSteps,
} from "@/lib/constants/recomendations";
import { parseAsInteger, useQueryState } from "nuqs";
import { PricingCard } from "./pricing-card";

export function PricingSection() {
  const [machineCount, setMachineCount] = useQueryState(
    "maquinas",
    parseAsInteger.withDefault(defaultMachineCount),
  );

  return (
    <>
      <div className="mx-auto my-12 flex w-full max-w-2xl flex-col gap-4 px-4">
        <label className="text-center font-medium">
          Quantas máquinas você tem?
        </label>
        <Slider
          min={0}
          max={machineCountSliderSteps.length - 1}
          defaultValue={[0]}
          value={[machineCountSliderSteps.indexOf(machineCount)]}
          onValueChange={(v) => {
            // this values always exist
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            void setMachineCount(machineCountSliderSteps[v[0]!]!);
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none flex justify-between px-[.5625rem]"
        >
          {machineCountSliderSteps.map((value) => (
            <div
              className="flex w-0 flex-col items-center justify-center text-[.625rem] whitespace-nowrap"
              key={value}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-4 mb-32 grid grid-cols-1 gap-y-16 max-md:divide-y max-sm:max-w-sm md:mb-56 lg:grid-cols-4 lg:divide-x">
        {prices.map((price) => (
          <PricingCard
            key={price.title}
            machineCount={machineCount}
            {...price}
          />
        ))}
      </div>
    </>
  );
}

import { CountUp } from "@/components/atoms/animations/count-up";

interface StatProps {
  name: string;
  value: number;
  hasPlus?: boolean;
  duration?: number;
}

export function Stat({
  name,
  value,
  hasPlus = false,
  duration = 1500,
}: StatProps) {
  return (
    <div className="flex flex-col-reverse gap-y-2 max-md:items-center">
      <dt className="w-fit text-base leading-7 font-medium text-slate-300">
        {name}
      </dt>
      <dd className="w-fit min-w-[3ch] text-9xl font-semibold tracking-tight">
        <CountUp to={value} duration={duration} delay={800} />
        {hasPlus && "+"}
      </dd>
    </div>
  );
}

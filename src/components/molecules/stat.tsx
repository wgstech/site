import type { Stat as StatType } from '@/lib/constants/stats'
import { CountUp } from '../atoms/animations/count-up';

export function Stat({ name, duration, value, hasPlus }: StatType) {
  return (
    <div className="flex max-w-xs flex-col gap-y-4">
      <dt className="text-center text-lg/7 text-sky-200">{name}</dt>
      <dd className="order-first text-right text-9xl font-semibold tracking-tight text-white max-sm:text-5xl">
        <CountUp to={value} duration={duration} />
        {hasPlus && "+"}
      </dd>
    </div>
  );
}

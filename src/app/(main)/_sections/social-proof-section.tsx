import { CountUp } from "@/lib/components/animations/count-up";
import type { PropsWithChildren } from "react";

const stats = [
  {
    name: "Ativos monitorados",
    value: 70,
    hasPlus: true,
    duration: 2,
  },
  {
    name: "Gigabytes em algum lugar",
    value: 1275,
    duration: 3,
  },
  {
    name: "Dados interessantes",
    value: 999,
    duration: 2.5,
  },
];

export function SocialProofSection() {
  return (
    <section
      id="prova-social"
      className="flex min-h-[80vh] bg-sky-600 text-white"
    >
      <dl className="grid w-full grid-cols-3 items-center justify-items-center max-sm:grid-cols-1">
        {stats.map((stat) => (
          <Stat description={stat.name} key={stat.name}>
            <CountUp to={stat.value} duration={stat.duration} />
            {stat.hasPlus && "+"}
          </Stat>
        ))}
      </dl>
    </section>
  );
}

interface StatProps extends PropsWithChildren {
  description: string;
}

function Stat({ children, description }: StatProps) {
  return (
    <div className="flex max-w-xs flex-col gap-y-4">
      <dt className="text-center text-lg/7 text-sky-200">{description}</dt>
      <dd className="order-first text-right text-9xl font-semibold tracking-tight text-white max-sm:text-5xl">
        {children}
      </dd>
    </div>
  );
}

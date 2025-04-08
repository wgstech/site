import { Stat } from "@/components/molecules/stat";
import { stats } from "@/lib/constants/stats";

export function SocialProofSection() {
  return (
    <section
      id="prova-social"
      className="flex py-30 bg-sky-600 text-white"
    >
      <dl className="grid w-full grid-cols-3 items-center justify-items-center max-sm:grid-cols-1">
        {stats.map((stat) => <Stat key={stat.name} {...stat}/>)}
      </dl>
    </section>
  );
}

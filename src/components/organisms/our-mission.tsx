import { CountUp } from "@/components/atoms/animations/count-up";
import { SectionTitle } from "@/components/molecules/section-title";

export function OurMission() {
	return (
		<div className="bg-white py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
					<SectionTitle className="text-pretty text-left font-semibold text-4xl text-gray-900 tracking-tight sm:text-5xl">
						Nossa Missão
					</SectionTitle>
					<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
						<div className="lg:w-full lg:max-w-2xl lg:flex-1">
							<p className="text-gray-600 text-xl/8">
								Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
								sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
								id at vitae feugiat egestas ac. Diam nulla orci at in viverra
								scelerisque eget. Eleifend egestas fringilla sapien.
							</p>
							<p className="mt-10 max-w-xl text-base/7 text-gray-700">
								Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
								risus enim. Mattis mauris semper sed amet vitae sed turpis id.
								Id dolor praesent donec est. Odio penatibus risus viverra tellus
								varius sit neque erat velit. Faucibus commodo massa rhoncus,
								volutpat. Dignissim sed eget risus enim. Mattis mauris semper
								sed amet vitae sed turpis id.
							</p>
						</div>
						<div className="lg:flex lg:flex-1 lg:justify-center">
							<dl className="w-64 space-y-8 xl:w-80">
								<Stat name="Ativos monitorados" value={70} hasPlus />
								<Stat name="Dados interessantes" value={999} />
								<Stat name="Gigabytes em algum lugar" value={1275} />
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

interface StatProps {
	name: string;
	value: number;
	hasPlus?: boolean;
}

function Stat({ name, value, hasPlus = false }: StatProps) {
	return (
		<div className="flex flex-col-reverse gap-y-4">
			<dt className="text-slate-600 leading-7">{name}</dt>
			<dd className="font-semibold text-5xl text-gray-900 tracking-tight">
				<CountUp to={value} duration={1000} />
				{hasPlus && "+"}
			</dd>
		</div>
	);
}

"use client";

import { parseAsStringEnum, useQueryState } from "nuqs";
import { Section } from "@/components/atoms/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { ForCompanies } from "./for-companies";

export function ServicesSection() {
	const [services, setServices] = useQueryState(
		"serviços",
		parseAsStringEnum(["empresa", "residencial"]).withDefault("empresa"),
	);

	return (
		<Section id="serviços">
			<Tabs
				value={services}
				onValueChange={(v) => setServices(v as "empresa" | "residencial")}
				className="flex flex-col"
			>
				<TabsList className="justify-self-center-safe mb-8 inline-flex self-center">
					<TabsTrigger value="residencial">Para Indivíduos</TabsTrigger>
					<TabsTrigger value="empresa">Para Empresas</TabsTrigger>
				</TabsList>
				<TabsContent value="residencial">
					<ForCompanies />
				</TabsContent>
				<TabsContent value="empresa">
					<ForCompanies />
				</TabsContent>
			</Tabs>
		</Section>
	);
}

"use client";

import { Section } from "@/components/atoms/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { parseAsStringEnum, useQueryState } from "nuqs";
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
        onValueChange={(v) => {
          void setServices(v as "empresa" | "residencial");
        }}
        className="flex flex-col"
      >
        <TabsList className="mb-8 inline-flex self-center justify-self-center-safe">
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

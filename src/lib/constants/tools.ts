import type { StaticImageData } from "next/image";
import cloudWgsImage from "@/assets/images/tools/cloud-wgs.webp";
import glpiAgentImage from "@/assets/images/tools/glpi-agent.webp";
import hdtuneImage from "@/assets/images/tools/hdtune.webp";
import logoControlImage from "@/assets/images/tools/logo-control.webp";
import resetEpsonImage from "@/assets/images/tools/reset-epson.webp";
import rmmImage from "@/assets/images/tools/rmm.webp";
import setupApacImage from "@/assets/images/tools/setup-apac.webp";

export interface Tool {
	name: string;
	site: string;
	image: StaticImageData;
	type?: "external-link" | "download";
}

export const tools = [
	{
		name: "HD Tune",
		site: "/hdtune_255.exe",
		image: hdtuneImage,
		type: "download",
	},
	{
		name: "Cloud WGS",
		site: "https://nuvem.wgstech.com.br/",
		image: cloudWgsImage,
	},
	{
		name: "GLPI Padronização",
		site: "https://nuvem.wgstech.com.br/index.php/s/Xp7kLMfRR8cpJZT",
		image: glpiAgentImage,
	},
	{
		name: "RMM WGS",
		site: "https://rmm.wgstech.com.br/",
		image: rmmImage,
	},
	{
		name: "Setup APAC 1.2.5",
		site: "https://nuvem.wgstech.com.br/index.php/s/3H8STsrQ6HZtM3A",
		image: setupApacImage,
	},
	{
		name: "Reset EPSON L3250",
		site: "https://nuvem.wgstech.com.br/index.php/s/bYCrZr2CzCpsGsw",
		image: resetEpsonImage,
	},
	{
		name: "Instalador XML",
		site: "https://nuvem.wgstech.com.br/index.php/s/oj2R6kJ7icJNkDN",
		image: logoControlImage,
	},
] satisfies Tool[];

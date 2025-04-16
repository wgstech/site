import process from "node:process";
import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' va.vercel-scripts.com 'unsafe-inline' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
  img-src 'self' data: ${process.env.NODE_ENV === "development" ? "images.unsplash.com" : ""};
  style-src 'self' 'unsafe-inline';
  frame-ancestors 'none';
  object-src 'none';
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
	output: "standalone",
	headers: async () => [
		{
			source: "/(.*)",
			headers: [
				{
					key: "Content-Security-Policy",
					value: cspHeader.replace(/\n/g, ""),
				},
			],
		},
	],
};

export default nextConfig;

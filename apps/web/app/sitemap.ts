import type { MetadataRoute } from "next";
import { env } from "~/env";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: new URL("/", env.NEXT_PUBLIC_SITE_URL).toString(),
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	];
}

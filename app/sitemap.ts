import type { MetadataRoute } from "next"
import { routes } from "@/lib/routes"
import { SITE_URL } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${SITE_URL}${route.href}`,
        lastModified: new Date(),
    }))
}

import type { MetadataRoute } from "next";

const SITE_URL = "https://cbconcrete.com.au";

/**
 * Indexing is OFF unless SITE_INDEXABLE is explicitly set to "true".
 *
 * The site is pre-launch (still on the old domain pending client approval),
 * so nothing here should be discoverable yet under this preview URL.
 *
 * Flip SITE_INDEXABLE to "true" in the Vercel project once the domain is
 * cut over, not before.
 */
export const indexable = process.env.SITE_INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

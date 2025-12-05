import type { MetadataRoute } from "next";

/**
 * Generates the robots.txt rules dynamically for Next.js
 * 
 * @returns {MetadataRoute.Robots} The robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  return {
    // Rules for all search engine crawlers
    rules: [
      {
        userAgent: "*", // Apply to all crawlers
        allow: "/", // Allow crawling of all pages by default
        disallow: [ // Paths to block from crawling
          "/contact/success", // Form success page
          "/contact/error",   // Form error page
          "/api/",            // API routes
          "/_next/",          // Next.js internal assets
          "/node_modules/",   // Node modules (shouldn't be exposed anyway)
        ],
      },
    ],
    // Link to sitemap for crawlers to find all pages
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
    // Host domain
    host: process.env.NEXT_PUBLIC_SITE_URL,
  };
}

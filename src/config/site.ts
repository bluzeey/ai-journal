import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "AI Journal",
  author: "Sahil Maheshwari",
  description:
    "An open-access AI journal dedicated to exploring advancements in AI, automation frameworks, and their impact across industries.",
  keywords: ["AI Journal", "AI Research", "Automation"],
  url: {
    base: "https://ai-journalling.vercel.app/", // Updated base URL
    author: "https://ai-journalling.vercel.app/",
  },
  links: {
    github: "https://github.com/bluzeey/ai-journal", // Updated GitHub link
  },
  ogImage: "https://ai-journalling.vercel.app/images/link-preview.png",
}

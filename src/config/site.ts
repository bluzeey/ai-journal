import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Gumloop | AI Automation Framework",
  author: "Sahil Maheshwari",
  description:
    "The no-code platform to build and host AI-powered business automations.",
  keywords: ["AI Automation", "No-code", "Business Automation", "Gumloop"],
  url: {
    base: "https://gumloop.com", // or env.NEXT_PUBLIC_APP_URL if needed
    author: "https://gumloop.com",
  },
  links: {
    github: "https://github.com/gumloop", // Assuming there's a GitHub link
  },
  ogImage: "https://gumloop.com/images/link-preview.png",
}

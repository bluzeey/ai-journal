import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { JournalProvider } from "@/providers/JournalContext";
import "./globals.css";
import { ProfileProvider } from "@/providers/ProfileContext";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Journal Master - Capture Your Thoughts",
  description:
    "A powerful journaling application to help you track, reflect, and enhance your experiences.",
  openGraph: {
    title: "Journal Master - Capture Your Thoughts",
    description:
      "A powerful journaling application to help you track, reflect, and enhance your experiences.",
    url: defaultUrl,
    image: "/og-image.jpg", // Add a relevant image path for previews
  },
  keywords: "journaling, journal, write, reflection, notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //TODO: Use theme switcher to add dark mode.
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProfileProvider>
            <JournalProvider>{children}</JournalProvider>
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

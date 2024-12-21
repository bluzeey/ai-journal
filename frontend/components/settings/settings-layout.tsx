import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-800">
      {" "}
      {/* Background for light and dark modes */}
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>{" "}
        {/* Text color for light and dark modes */}
        <Button variant="ghost" asChild>
          <Link
            href="/dashboard"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </header>
      <div className="space-y-12">{children}</div>
    </div>
  );
}

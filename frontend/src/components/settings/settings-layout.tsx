import { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button variant="ghost" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </header>
      <div className="space-y-12">{children}</div>
    </div>
  )
}

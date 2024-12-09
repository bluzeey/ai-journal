import { ReactNode } from "react"

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 overflow-y-auto p-6">
        <div className="container mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  )
}

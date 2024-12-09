import Link from "next/link"
import { Book, Home, PieChart, Settings, Trophy, User } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Book, label: "Journal", href: "/journal" },
  { icon: PieChart, label: "Insights", href: "/insights" },
  { icon: Trophy, label: "Gamification", href: "/gamification" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 bg-card p-4 text-card-foreground md:block">
      <div className="mb-8 flex items-center justify-center">
        <h1 className="text-2xl font-bold">AI Journal</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

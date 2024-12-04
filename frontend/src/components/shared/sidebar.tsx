"use client"

import { useState } from "react"
import Link from "next/link"
import { Book, Home, PieChart, Settings, Trophy, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Book, label: "Journal", href: "/journal" },
  { icon: PieChart, label: "Insights", href: "/insights" },
  { icon: Trophy, label: "Gamification", href: "/gamification" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function PrimarySidebar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <div className="flex w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center justify-center border-b">
        <h1 className="text-xl font-semibold text-gray-800">AI Journal</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {navItems.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  activeItem === label && "bg-gray-100"
                )}
                onClick={() => setActiveItem(label)}
              >
                <Link href={href} className="flex items-center">
                  <Icon className="mr-3 h-5 w-5" />
                  {label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start">
          <Avatar className="mr-2 h-6 w-6">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          Profile
        </Button>
      </div>
    </div>
  )
}

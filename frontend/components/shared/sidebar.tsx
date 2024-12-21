"use client";

import { useState } from "react";
import Link from "next/link";
import { Book, Home, PieChart, Settings, Trophy, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Book, label: "Journal", href: "/journal" },
  { icon: PieChart, label: "Insights", href: "/insights" },
  { icon: Trophy, label: "Mastery", href: "/mastery" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function PrimarySidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="flex w-64 flex-col border-r bg-white dark:bg-gray-900">
      {" "}
      {/* Background for light and dark modes */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-700">
        {" "}
        {/* Border for light and dark modes */}
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          AI Journal
        </h1>{" "}
        {/* Text color for light and dark modes */}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {navItems.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <Link href={href} className="flex items-center">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    activeItem === label
                      ? "bg-gray-100 text-blue-500 dark:bg-gray-800 dark:text-blue-400" // Active item styles for light and dark modes
                      : "hover:bg-gray-200 dark:hover:bg-gray-700" // Hover styles for light and dark modes
                  )}
                  onClick={() => setActiveItem(label)}
                >
                  <Icon className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />{" "}
                  {/* Icon colors */}
                  {label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 dark:text-gray-300"
        >
          <Avatar className="mr-2 h-6 w-6">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          Profile
        </Button>
      </div>
    </div>
  );
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookMarked,
  BookOpen,
  ChevronDown,
  CreditCard,
  Globe,
  Heart,
  Layers,
  Library,
  LockKeyhole,
  MessagesSquare,
  Newspaper,
  NotebookPen,
  Puzzle,
  User,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  content: { icon: React.ReactNode; label: string; link: string }[]
  icon?: React.ReactNode
}

const navItems: NavItem[] = [
  {
    label: "Use Cases",
    content: [
      {
        label: "Web Scraping",
        icon: <Globe className="h-4 w-4 text-pink-400" />,
        link: "/ai-web-scraping",
      },
      {
        label: "SEO Marketing",
        icon: <Layers className="h-4 w-4 text-pink-400" />,
        link: "/seo-marketing",
      },
      {
        label: "Document Processing",
        icon: <BookOpen className="h-4 w-4 text-pink-400" />,
        link: "/document-processing",
      },
    ],
    icon: <Layers className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />,
  },
  {
    label: "Resources",
    content: [
      {
        label: "Templates",
        icon: <BookOpen className="h-4 w-4 text-pink-400" />,
        link: "/templates",
      },
      {
        label: "Chrome Extension",
        icon: <Puzzle className="h-4 w-4 text-pink-400" />,
        link: "/browser-extension",
      },
      {
        label: "Discord Community",
        icon: <MessagesSquare className="h-4 w-4 text-pink-400" />,
        link: "https://discord.gg/xtbrafmzC7",
      },
      {
        label: "Documentation",
        icon: <BookOpen className="h-4 w-4 text-pink-400" />,
        link: "https://docs.gumloop.com/getting-started/introduction",
      },
      {
        label: "Youtube Channel",
        icon: <Youtube className="h-4 w-4 text-pink-400" />,
        link: "https://www.youtube.com/@Gumloop_AI",
      },
      {
        label: "Changelog",
        icon: <NotebookPen className="h-4 w-4 text-pink-400" />,
        link: "/changelog",
      },
    ],
    icon: <Library className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />,
  },
  {
    label: "Company",
    content: [
      {
        label: "Wall of Love",
        icon: <Heart className="h-4 w-4 text-pink-400" />,
        link: "/love",
      },
      {
        label: "Blog",
        icon: <Newspaper className="h-4 w-4 text-pink-400" />,
        link: "https://blog.gumloop.com/",
      },
      {
        label: "Handbook",
        icon: <BookMarked className="h-4 w-4 text-pink-400" />,
        link: "https://blog.gumloop.com/handbook/",
      },
      {
        label: "About Us",
        icon: <BookMarked className="h-4 w-4 text-pink-400" />,
        link: "https://blog.gumloop.com/about/",
      },
      {
        label: "Security Policies",
        icon: <LockKeyhole className="h-4 w-4 text-pink-400" />,
        link: "https://trust.gumloop.com/",
      },
    ],
    icon: <User className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />,
  },
]

export default function Header(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/gumloop_logo.svg"
            alt="Gumloop Logo"
            className="h-12 w-auto"
            width={112}
            height={112}
          />
        </Link>

        {/* Navigation Options with Dropdowns */}
        <nav
          className="font-inter hidden flex-row items-center justify-center space-x-8 md:flex"
          ref={dropdownRef}
        >
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex items-center space-x-2 outline-none"
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
              >
                <div className="mb-1 p-2">{item.icon}</div>
                <p className="text-xs text-black md:text-sm">{item.label}</p>
                <ChevronDown
                  className={`h-4 w-4 text-pink-400 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-1/2 mt-2 w-56 origin-top -translate-x-1/4 rounded-lg border border-pink-400 bg-white shadow-lg transition-all duration-300 ${
                  openDropdown === item.label
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                {item.content.map((subItem) => (
                  <div key={subItem.label} className="p-2">
                    <Link
                      href={subItem.link}
                      className="flex items-center space-x-2 text-neutral-700 transition-colors hover:text-pink-500"
                    >
                      {subItem.icon}
                      <span>{subItem.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Pricing Tab */}
          <div className="relative">
            <Link
              className="flex items-center space-x-2 rounded-xl pr-2 transition-all"
              href="https://gumloop.com/pricing"
            >
              <div className="mb-1 rounded-lg p-2">
                <CreditCard className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />
              </div>
              <span className="text-xs text-black md:text-sm">Pricing</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Get Started Button */}
        <Button className="hidden h-10 items-center justify-center gap-1 space-x-2 rounded-md border border-[#f06293] bg-[#fff0f4] px-5 py-2 text-sm font-medium text-[#f06293] ring-offset-background transition-all duration-100 ease-in-out hover:bg-pink-100 focus:outline-none md:inline-flex">
          Get Started
        </Button>
      </div>
    </header>
  )
}

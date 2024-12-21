"use client";

import Link from "next/link";
import Logo from "@/app/images/logo.png";
import Image from "next/image"; // Optional for theme switching

export function Navbar() {
  // If you have a theme switcher
  return (
    <nav className="relative bg-white bg-opacity-30 rounded-full max-w-4xl mx-auto w-full z-10 ">
      <div className="mt-10 w-full py-4 px-8 shadow-md mx-auto -mt-2 rounded-full">
        {/* Adjusted margin for overlapping effect */}
        <div className="flex w-full justify-around items-center">
          <Image
            src={Logo.src}
            width={125}
            height={75}
            alt="Logo"
            className="text-white"
          />{" "}
          <div className="flex space-x-8">
            <Link
              href="/features"
              className="z-10 text-white font-bold hover:underline"
            >
              Features
            </Link>
            <Link href="/how-it-works" className="text-white hover:underline">
              How it Works
            </Link>
            <Link href="/testimonials" className="text-white hover:underline">
              Testimonials
            </Link>
          </div>
          <Link href="/journal">
            <button className="bg-transparent border-2 border-white text-white hover:bg-gray-200 py-2 px-4 rounded-lg mx-2">
              Start Journaling
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link"; // Optional for theme switching

export function Navbar() {
  // If you have a theme switcher
  return (
    <nav className="relative rounded-full max-w-4xl mx-auto w-full z-10 ">
      <div className="bg-transparent mt-10  w-full dark:bg-blue-800 py-4 px-8 shadow-md mx-auto -mt-2 rounded-full">
        {" "}
        {/* Adjusted margin for overlapping effect */}
        <div className="flex w-full justify-around items-center">
          <div className="flex space-x-8">
            <Link href="/features" className="text-white hover:underline">
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
            <button className="bg-white text-blue-600 hover:bg-gray-200 py-2 px-4 rounded-lg mx-2">
              Start Journaling
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

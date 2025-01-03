"use client";

import Link from "next/link";
import Logo from "@/app/images/logo.png";
import Image from "next/image"; // Optional for theme switching
import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative bg-white bg-opacity-30 rounded-full max-w-4xl mx-auto w-full z-10 ">
      <div className="mt-10 w-full py-4 px-8 shadow-md mx-auto -mt-2 rounded-full">
        <div className="flex w-full justify-between items-center">
          <Image
            src={Logo.src}
            width={125}
            height={75}
            alt="Logo"
            className="text-white"
          />
          {isMobile ? (
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? "Close" : <MenuIcon />}
            </button>
          ) : (
            <div className="flex items-center space-x-8">
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
              <Link href="/journal">
                <button className="bg-[#2A5285] bg-opacity-75  border-2 border-white text-white hover:bg-gray-200 py-2 px-5 rounded-lg mx-2">
                  Start Journaling
                </button>
              </Link>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full mt-20 bg-white bg-opacity-50">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link
                href="/features"
                className="text-white font-bold hover:underline"
              >
                Features
              </Link>
              <Link href="/how-it-works" className="text-white hover:underline">
                How it Works
              </Link>
              <Link href="/testimonials" className="text-white hover:underline">
                Testimonials
              </Link>
              <Link href="/journal">
                <button className="bg-[#2A5285] bg-opacity-75  border-2 border-white text-white hover:bg-gray-200 py-2 px-5 rounded-lg mx-2">
                  Start Journaling
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    // Set initial value when component is mounted
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Clean up listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative bg-white bg-opacity-30 rounded-full max-w-4xl mx-auto w-full z-10">
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
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          ) : (
            <div className="flex items-center space-x-8">
              <Link
                href="/#"
                className="z-10 text-white font-bold hover:underline"
              >
                Features
              </Link>
              <Link href="/#" className="text-white hover:underline">
                How it Works
              </Link>
              <Link href="/#" className="text-white hover:underline">
                Testimonials
              </Link>
              <Link href="/journal">
                <button className="bg-[#2A5285] bg-opacity-75 border-2 border-white text-white hover:bg-gray-200 py-2 px-5 rounded-lg mx-2">
                  Start Journaling
                </button>
              </Link>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full mt-20 bg-white bg-opacity-50 z-20 rounded-lg">
            <div className="relative flex flex-col items-center space-y-4 p-4">
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
                <button className="bg-[#2A5285] bg-opacity-75 border-2 border-white text-white hover:bg-gray-200 py-2 px-5 rounded-lg mx-2">
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

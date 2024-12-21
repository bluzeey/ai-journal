"use client";
import bg from "@/app/images/cta-bg.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon from lucide-react

export default function Cta() {
  return (
    <div
      className="relative flex items-center !text-white justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute inset-0 bg-[#031F40] opacity-60" />{" "}
      {/* Dark overlay for better text visibility */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl max-w-5xl mx-auto text-center font-regular mb-4">
          Start Your AI-Powered Journaling Journey
          <span className="text-blue-300"> Today</span>
        </h1>

        <p className="text-3xl max-w-3xl mx-auto text-center mb-8">
          Unlock new insights about yourself and improve your mental well-being
          with our innovative AI Journal.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/journal">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-6 px-12 text-2xl rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

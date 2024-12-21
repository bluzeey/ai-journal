"use client";
import bg from "@/app/images/cta-bg.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Import ChevronRight icon from lucide-react

export default function Cta() {
  return (
    <div
      className="relative flex items-center text-white justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute inset-0 bg-[#031F40] opacity-60" />{" "}
      {/* Dark overlay for better text visibility */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl text-center font-regular mb-4">
          Unlock Your Mind with
        </h1>
        <h1 className="text-7xl  mx-auto text-center font-regular mb-4">
          <strong>AI-Powered Journaling</strong>
        </h1>
        <p className="text-3xl max-w-3xl text-center mb-8">
          Experience the future of self-reflection. Our AI Journal provides
          personalized insights to help you understand your thoughts and
          emotions better.
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

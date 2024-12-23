"use client";
import bg from "@/app/images/hero-bg.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "./Navbar"; // Import the Navbar component

export default function HeroSection() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute top-0 w-full  mt-10 mb-20 ">
        {/* Center the navbar */}
        <Navbar />
      </div>
      <div className="">
        <div className="absolute inset-0 bg-[#031F40] opacity-65" />{" "}
        {/* Dark overlay for better text visibility */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-regular mb-4">Unlock Your Mind with</h1>
          <h1 className="text-7xl mx-auto font-regular mb-4">
            <strong>AI-Powered Journaling</strong>
          </h1>
          <p className="text-3xl max-w-3xl mb-8">
            Experience the future of self-reflection. Our AI Journal provides
            personalized insights to help you understand your thoughts and
            emotions better.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/journal">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-6 px-12 text-2xl rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
                Start Journaling
              </button>
            </Link>
            <Link href="/learn-more">
              <button className="flex items-center bg-transparent hover:bg-white hover:text-black py-6 px-8 text-2xl rounded-full transition duration-200 ease-in-out">
                Learn More <ChevronRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

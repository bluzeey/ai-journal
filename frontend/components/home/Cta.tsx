"use client";
import bg from "@/app/images/cta-bg.png";
import Link from "next/link";
import Footer from "./Footer";
// Import ChevronRight icon from lucide-react

export default function Cta() {
  return (
    <div
      className="relative flex flex-col !text-white justify-center items-center  h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute inset-0 bg-[#031F40] opacity-65" />{" "}
      {/* Dark overlay for better text visibility */}
      <div className="relative z-10 text-center text-white ">
        <h1 className="text-4xl font-semibold max-w-5xl mx-auto text-center font-regular mb-4 lg:text-7xl md:text-5xl ">
          Start Your AI-Powered Journaling Journey
          <span className="text-blue-300"> Today</span>
        </h1>

        <p className="text-xl max-w-3xl mx-auto text-center my-8 md:text-3xl sm:text-2xl">
          Unlock new insights about yourself and improve your mental well-being
          with our innovative AI Journal.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/journal">
            <button className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full mt-10 ">
        {/* Center the navbar */}
        <Footer />
      </div>
    </div>
  );
}

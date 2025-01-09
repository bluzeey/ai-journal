"use client";
import bg from "@/app/images/hero-bg.png";
import Link from "next/link";
import { Navbar } from "./Navbar"; // Import the Navbar component

export default function HeroSection() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute top-0  w-5/6 mt-10 mb-20">
        {/* Center the navbar */}
        <Navbar />
      </div>
      <div className="">
        <div className="absolute inset-0 bg-[#031F40] opacity-65" />{" "}
        {/* Dark overlay for better text visibility */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            Unlock Your Mind with
          </h1>
          <h1 className="text-5xl md:text-7xl mx-auto font-light mb-4">
            <strong>AI-Powered Journaling</strong>
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mb-8">
            Experience the future of self-reflection. Our AI Journal provides
            personalized insights to help you understand your thoughts and
            emotions better.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link href="/journal">
              <button className="bg-gradient-to-b from-blue-300 to-blue-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105">
                Start Journaling
              </button>
            </Link>
            <Link href="/learn-more">
              <div className="group hover:bg-white rounded-full">
                <button className="flex items-center bg-transparent py-3 px-5 text-2xl rounded-full transition duration-200 ease-in-out">
                  <span className="text-white group-hover:text-black">
                    Learn More
                  </span>
                  <svg
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 text-white group-hover:text-black transition-colors duration-200"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.1297 11.2028C14.1513 10.9652 14.2665 10.7459 14.4498 10.5932C14.6331 10.4404 14.8695 10.3667 15.1072 10.3882L24.4405 11.2372C24.5603 11.2452 24.6772 11.2771 24.7845 11.3309C24.8917 11.3848 24.9871 11.4595 25.065 11.5508C25.143 11.642 25.2018 11.748 25.2382 11.8623C25.2746 11.9767 25.2878 12.0972 25.2769 12.2167C25.266 12.3362 25.2314 12.4523 25.175 12.5583C25.1186 12.6642 25.0415 12.7578 24.9484 12.8335C24.8553 12.9092 24.748 12.9655 24.6328 12.9991C24.5176 13.0328 24.3968 13.043 24.2776 13.0293L14.9442 12.1803C14.7066 12.1587 14.4873 12.0435 14.3346 11.8602C14.1818 11.6769 14.1081 11.4405 14.1297 11.2028Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.2895 22.3636C25.0519 22.3851 24.8154 22.3114 24.6321 22.1586C24.4488 22.0059 24.3337 21.7866 24.312 21.549L23.463 12.2156C23.4493 12.0964 23.4595 11.9756 23.4932 11.8604C23.5268 11.7452 23.5831 11.6379 23.6589 11.5448C23.7346 11.4517 23.8281 11.3747 23.9341 11.3183C24.04 11.2619 24.1561 11.2272 24.2756 11.2163C24.3951 11.2055 24.5156 11.2186 24.63 11.255C24.7443 11.2914 24.8503 11.3503 24.9415 11.4282C25.0328 11.5061 25.1076 11.6015 25.1614 11.7088C25.2153 11.816 25.2471 11.9329 25.2551 12.0527L26.1041 21.3861C26.1256 21.6237 26.0519 21.8602 25.8991 22.0435C25.7464 22.2268 25.5271 22.3419 25.2895 22.3636Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.3591 12.1325C24.5279 12.3013 24.6227 12.5302 24.6227 12.7689C24.6227 13.0076 24.5279 13.2365 24.3591 13.4053L12.2676 25.4968C12.0988 25.6656 11.8699 25.7604 11.6312 25.7604C11.3925 25.7604 11.1636 25.6656 10.9948 25.4968C10.826 25.328 10.7312 25.0991 10.7312 24.8604C10.7312 24.6217 10.826 24.3928 10.9948 24.224L23.0863 12.1325C23.2551 11.9637 23.484 11.8689 23.7227 11.8689C23.9614 11.8689 24.1903 11.9637 24.3591 12.1325Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

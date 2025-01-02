"use client";

import Image from "next/image"; // Import Image component from Next.js
import Link from "next/link";
import Benefit1 from "@/app/images/benefits/benefit-1.png";
import Benefit2 from "@/app/images/benefits/benefit-2.png";
import Benefit3 from "@/app/images/benefits/benefit-3.png";
import Benefit4 from "@/app/images/benefits/benefit-4.png";
import { Check, CircleAlert, MessageCircle } from "lucide-react"; // Import the check icon from Lucide

export function BenefitsSection() {
  return (
    <div className="bg-[#031F40] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between mt-10">
          <div className="flex flex-col items-center hidden lg:block">
            <Image
              src={Benefit1.src}
              alt="Reduce stress & anxiety"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <Image
              src={Benefit2.src}
              alt="Improve problem-solving skills"
              width={500}
              height={500}
              className="rounded-lg -mt-8 -ml-16"
            />
          </div>

          <div className="flex flex-col justify-center items-center p-4">
            {/* Centered text and button */}
            <h2 className="text-4xl font-bold text-center mb-4 flex flex-col items-center md:text-4xl sm:text-3xl">
              <span>Journaling for a Healthier Mind</span>
              <svg
                width="273"
                height="27"
                viewBox="0 0 273 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.5 25C85.1563 20.2272 96.5743 15.8779 109.11 13.0472C117.718 11.1033 126.462 9.40251 135.167 7.79521C147.138 5.5847 159.138 4.70539 171.313 3.78831C180.661 3.08421 189.904 2.2453 199.302 2.18102C213.053 2.08696 226.941 1.78039 240.682 2.27157C246.959 2.49597 252.497 4.0205 258.5 5.03339"
                  stroke="#558FD5"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </h2>
            <p className="text-xl text-center m-8 md:text-xl sm:text-lg">
              Journaling isn't just about writing—it's about decluttering your
              thoughts, reducing stress, and finding clarity. Experts agree it's
              one of the simplest ways to improve mental health.
            </p>
            <Link
              href="/journal"
              className="inline-flex items-center justify-center bg-[#031F40] border-2 border-[#87C3FF] text-white rounded-full py-3 px-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <span className="text-xl font-semibold md:text-xl sm:text-lg">
                Why Journaling
              </span>
              <MessageCircle className="ml-2 text-xl" />
            </Link>
            <div className="mt-4 text-xl text-[#88BCFB] text-center md:text-xl sm:text-lg">
              {" "}
              {/* Added a wrapper for benefits */}
              <h3 className="my-4 flex   items-center justify-center">
                <Check className="mr-2 text-blue-500" /> Improve problem-solving
                skills
              </h3>
              <h3 className="my-4 flex items-center justify-center">
                <Check className="mr-2 text-blue-500" /> Gain clarity for better
                decisions
              </h3>
              <h3 className="my-4  flex items-center justify-center">
                <Check className="mr-2 text-blue-500" /> Enhance creativity
              </h3>
              <h3 className="my-4  flex items-center justify-center">
                <Check className="mr-2 text-blue-500" /> Reduce stress & anxiety
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center hidden lg:block">
            <Image
              src={Benefit3.src}
              alt="Gain clarity for better decisions"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <Image
              src={Benefit4.src}
              alt="Enhance creativity"
              width={500}
              height={500}
              className="rounded-lg -mt-8 ml-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

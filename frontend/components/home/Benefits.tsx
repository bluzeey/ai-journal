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
          <div className="flex flex-col items-center">
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
            <h2 className="text-4xl font-bold text-center mb-4">
              Journaling for a Healthier Mind
            </h2>
            <p className="text-xl text-center m-8">
              Journaling isn't just about writing—it's about decluttering your
              thoughts, reducing stress, and finding clarity. Experts agree it's
              one of the simplest ways to improve mental health.
            </p>
            <Link
              href="/journal"
              className="inline-flex items-center justify-center bg-[#031F40] border-2 border-[#87C3FF] text-white rounded-full py-3 px-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <span className="text-xl font-semibold">Why Journaling</span>
              <MessageCircle className="ml-2 text-xl" />
            </Link>
            <div className="mt-4 text-xl text-[#88BCFB] text-center">
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

          <div className="flex flex-col items-center">
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
              className="rounded-lg -mt-8 -mr-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

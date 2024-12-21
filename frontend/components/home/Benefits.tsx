"use client";

import Image from "next/image"; // Import Image component from Next.js
import Link from "next/link";
import Benefit1 from "@/app/images/benefits/benefit-1.png";
import Benefit2 from "@/app/images/benefits/benefit-2.png";
import Benefit3 from "@/app/images/benefits/benefit-3.png";
import Benefit4 from "@/app/images/benefits/benefit-4.png";

export function BenefitsSection() {
  return (
    <div className="bg-gray-900 text-white py-20">
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

          <div className="flex flex-col justify-center items-center">
            {" "}
            {/* Centered text and button */}
            <h2 className="text-4xl font-bold text-center mb-4">
              Journaling for a Healthier Mind
            </h2>
            <p className="text-lg text-center mb-8">
              Journaling isn't just about writing—it's about decluttering your
              thoughts, reducing stress, and finding clarity. Experts agree it's
              one of the simplest ways to improve mental health.
            </p>
            <Link href="/journal">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-6 px-12 text-2xl rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
                Why journaling ?
              </button>
            </Link>
            <h3 className="mt-2 text-center">Improve problem-solving skills</h3>
            <h3 className="mt-2 text-center">
              Gain clarity for better decisions
            </h3>
            <h3 className="mt-2 text-center">Enhance creativity</h3>
            <h3 className="mt-2 text-center">Reduce stress & anxiety</h3>
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

"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image"; // Import Image for optimized loading
import { Laptop, CheckCircle, Eye } from "lucide-react";
import HowItWorks1 from "@/app/images/howitworks/1.png";
import HowItWorks2 from "@/app/images/howitworks/2.png";
import HowItWorks3 from "@/app/images/howitworks/3.png";
// Import icons

export function HowItWorks() {
  const steps = [
    {
      title: "Write your journal entry",
      description:
        "Express your thoughts and feelings freely in our intuitive text editor.",
      imageSrc: HowItWorks1,
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Click 'Analyze'",
      description:
        "Our AI processes your entry to generate personalized insights.",
      imageSrc: HowItWorks2,
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Reflect on AI insights",
      description: "Gain new perspectives and deepen your self-understanding.",
      imageSrc: HowItWorks3,
      icon: <Eye className="h-8 w-8 text-blue-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#031F40] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white dark:text-white sm:text-5xl">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${step.imageSrc})` }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-30 rounded-lg" />{" "}
              {/* Background overlay */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-semibold text-white dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 py-4 text-2xl text-[#88BCFB] font-normal ">
                  {step.description}
                </p>
              </div>
              <Image
                src={step.imageSrc}
                alt={step.title}
                width={400} // Adjust size as needed
                height={400} // Adjust size as needed
                className="rounded-lg"
              />
              <div className="absolute bg-blue-600 text-white rounded-md left-0 bottom-0 p-2 w-16 h-16 flex items-center justify-center text-lg">
                {" "}
                {/* Create a square for numbers */}
                {index + 1} {/* Display the index number (1-based) */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { BookOpen, Brain, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Testimonial from "@/components/ui/testimonials";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import { BenefitsSection } from "@/components/home/Benefits";
import { Navbar } from "@/components/home/Navbar";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import Cta from "@/components/home/Cta";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen  flex-col ">
      <main className="flex-1 ">
        <Hero />
        {/* New Section: Mental Health and Prominent Figures */}
        <BenefitsSection />
        <Features />
        {/* Remaining sections unchanged */}
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link"
import { BookOpen, Brain, Lightbulb, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Testimonial from "@/components/ui/testimonials"
import Footer from "@/components/home/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 text-gray-800" />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            AI Journal
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
            href="#testimonials"
          >
            Testimonials
          </Link>
        </nav>
      </header>

      <main className="flex-1 bg-white">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
                  Unlock Your Mind with AI-Powered Journaling
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Experience the future of self-reflection. Our AI Journal
                  provides personalized insights to help you understand your
                  thoughts and emotions better.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/journal">Start Journaling</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features" className="text-white">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* New Section: Mental Health and Prominent Figures */}
        <section
          id="mental-health-benefits"
          className="w-full bg-gray-50 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl">
              Journaling for Mental Health
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg text-gray-700">
                  Journaling has long been recognized as a powerful tool for
                  mental well-being. It helps to declutter your mind, process
                  emotions, and gain clarity on your thoughts. Experts suggest
                  that journaling can reduce stress, improve mood, and even
                  enhance problem-solving skills.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Prominent figures such as <strong>Sam Altman</strong>, CEO of
                  OpenAI, and
                  <strong> Paul Graham</strong>, co-founder of Y Combinator, are
                  known advocates of journaling. Both have shared how this
                  practice has helped them in managing their thoughts, gaining
                  perspective, and making better decisions.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  With our AI-powered journal, you not only document your
                  thoughts but also get personalized insights to help you
                  reflect and improve your mental health.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/sam_altman.png"
                  alt="Sam Altman"
                  className="h-64 w-64 rounded-full object-cover"
                />
                <img
                  src="/paul_graham.png"
                  alt="Paul Graham"
                  className="ml-4 h-64 w-64 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full bg-white py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <BookOpen className="mb-2 h-8 w-8 text-gray-800" />
                  <CardTitle>Intuitive Journaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Easy-to-use interface for capturing your thoughts and
                    feelings.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="mb-2 h-8 w-8 text-gray-800" />
                  <CardTitle>AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get personalized analysis and understanding of your journal
                    entries.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="mb-2 h-8 w-8 text-gray-800" />
                  <CardTitle>Emotional Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Develop greater self-awareness and emotional intelligence
                    over time.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Remaining sections unchanged */}
        <section
          id="how-it-works"
          className="w-full bg-white py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl">
              How It Works
            </h2>
            <ol className="grid list-inside list-decimal grid-cols-1 gap-8 md:grid-cols-3">
              <li className="text-xl font-semibold text-gray-800">
                Write your journal entry
                <p className="mt-2 text-base font-normal text-gray-600">
                  Express your thoughts and feelings freely in our intuitive
                  text editor.
                </p>
              </li>
              <li className="text-xl font-semibold text-gray-800">
                Click &apos;Analyze&apos;
                <p className="mt-2 text-base font-normal text-gray-600">
                  Our AI processes your entry to generate personalized insights.
                </p>
              </li>
              <li className="text-xl font-semibold text-gray-800">
                Reflect on AI insights
                <p className="mt-2 text-base font-normal text-gray-600">
                  Gain new perspectives and deepen your self-understanding.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <Testimonial />

        <section className="w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl">
                  Start Your AI-Powered Journaling Journey Today
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Unlock new insights about yourself and improve your mental
                  well-being with our innovative AI Journal.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/journal">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

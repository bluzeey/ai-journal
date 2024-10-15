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

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">AI Journal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#testimonials"
          >
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock Your Mind with AI-Powered Journaling
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
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
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <BookOpen className="mb-2 h-8 w-8" />
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
                  <Brain className="mb-2 h-8 w-8" />
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
                  <Lightbulb className="mb-2 h-8 w-8" />
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
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <ol className="grid list-inside list-decimal grid-cols-1 gap-8 md:grid-cols-3">
              <li className="text-xl font-semibold">
                Write your journal entry
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Express your thoughts and feelings freely in our intuitive
                  text editor.
                </p>
              </li>
              <li className="text-xl font-semibold">
                Click &apos;Analyze&apos;
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Our AI processes your entry to generate personalized insights.
                </p>
              </li>
              <li className="text-xl font-semibold">
                Reflect on AI insights
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Gain new perspectives and deepen your self-understanding.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Life-Changing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;The AI insights have helped me understand myself
                    better. It&apos;s like having a personal therapist.&quot;
                  </p>
                  <p className="mt-2 font-semibold">- Sarah K.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Insightful</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;I&apos;ve discovered patterns in my thinking that I
                    never noticed before. This tool is incredibly
                    insightful.&quot;
                  </p>
                  <p className="mt-2 font-semibold">- Mike R.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;The interface is so intuitive. It makes journaling a
                    joy rather than a chore.&quot;
                  </p>
                  <p className="mt-2 font-semibold">- Emily T.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Your AI-Powered Journaling Journey Today
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
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
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AI Journal. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

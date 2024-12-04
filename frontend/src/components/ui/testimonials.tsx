import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Testimonial: React.FC = () => {
  return (
    <section
    id="testimonials"
    className="w-full bg-gray-50 py-12 md:py-24 lg:py-32"
  >
    <div className="container px-4 md:px-6">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Life-Changing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              &quot;The AI insights have helped me understand myself
              better. It&apos;s like having a personal therapist.&quot;
            </p>
            <p className="mt-2 font-semibold text-gray-800">- Sarah K.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Insightful</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              &quot;I&apos;ve discovered patterns in my thinking that I
              never noticed before. This tool is incredibly
              insightful.&quot;
            </p>
            <p className="mt-2 font-semibold text-gray-800">- Mike R.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User-Friendly</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              &quot;The interface is so intuitive. It makes journaling a
              joy rather than a chore.&quot;
            </p>
            <p className="mt-2 font-semibold text-white">- Emily T.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Testimonial

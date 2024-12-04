import React from "react"
import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

const HowItWorks: React.FC = () => {
  return (
    <section>
      <div className="center h-full flex-col space-y-16 px-4 pt-48 lg:space-y-24">
        {/* Title */}
        <h1 className="text-center text-6xl font-semibold text-black">
          How it works
        </h1>

        {/* First Section */}
        <div className="center flex flex-wrap gap-8 lg:gap-16">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-semibold text-black">
              Pick &amp; place.
            </h1>
            <div className="text-xl tracking-tighter text-black">
              Fuel your workspace with our growing library of nodes. Connect to
              a world of possibilities.
            </div>
            <Button
              variant="outline"
              size="sm"
              className="inline-flex items-center justify-center gap-1 space-x-2 rounded-md border border-input bg-background px-5 py-2 text-sm font-medium ring-offset-background transition-all duration-300 hover:bg-gray-50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <span className="text-black">Explore nodes</span>
              <ArrowRight className="h-4" />
            </Button>
          </div>

          {/* Image 1 */}
          <div className="w-[90vw] rounded-lg border-4 border-pink-300 border-opacity-20 transition-all md:w-[600px] lg:w-[700px] xl:w-[800px]">
            <Image
              alt="Placing nodes in Gumloop"
              width={1256}
              height={720}
              className="rounded-lg object-cover"
              src="/place_operator.gif"
              unoptimized
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="center flex flex-col-reverse gap-8 md:gap-16 xl:flex-row">
          {/* Image 2 */}
          <div className="w-[90vw] rounded-lg border-4 border-pink-300 border-opacity-20 transition-all md:w-[600px] lg:w-[700px] xl:w-[800px]">
            <Image
              alt="Linking nodes in Gumloop"
              width={1024}
              height={720}
              className="rounded-lg object-cover"
              src="/link_operator.gif"
              unoptimized
            />
          </div>

          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-semibold text-black">
              Connect the nodes.
            </h1>
            <div className="text-xl tracking-tighter text-black">
              Pass data from A to Z with drag-and-click connections. No code
              required.
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="center flex flex-wrap gap-8 md:gap-16">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-semibold text-black">
              Run your workflow.
            </h1>
            <div className="text-xl tracking-tighter text-black">
              Test in our sandbox. See results. When you&apos;re ready, share it
              with anyone (or no one). You control that.
            </div>
            <Button
              variant="outline"
              size="sm"
              className="inline-flex items-center justify-center gap-1 space-x-2 rounded-md border border-input px-5 py-2 text-sm font-medium ring-offset-background transition-all duration-300 hover:bg-gray-50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <span className="text-black">Start a new workflow</span>
              <Plus className="h-4" />
            </Button>
          </div>

          {/* Image 3 */}
          <div className="w-[90vw] rounded-lg border-4 border-pink-300 border-opacity-20 transition-all md:w-[500px] lg:w-[600px] xl:w-[700px]">
            <Image
              alt="Running flows in Gumloop"
              width={862}
              height={720}
              className="rounded-lg object-cover"
              src="/run_pipeline.gif"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

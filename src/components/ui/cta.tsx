import React from "react"

const CTA: React.FC = () => {
  return (
    <div className="relative my-24 flex flex-col">
      <div className="px-6 py-24 sm:px-6 sm:py-8 lg:px-8 ">
        <div className="relative mx-auto max-w-2xl text-center">
          {/* Background Blur */}
          <div className=" -z-8 absolute h-56 w-[500px] rounded-full bg-pink-300/40 blur-3xl md:bg-pink-300/40"></div>

          {/* Title and Description */}
          <h4 className="pb-2 text-xl uppercase text-pink-400 sm:text-2xl">
            Ready to Automate?
          </h4>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Start using Gumloop today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Automate your complex business processes without writing a single
            line of code. No credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-1 space-x-2 rounded-md border border-[#f06293] bg-[#fff0f4] px-5 py-2 text-sm font-medium text-[#f06293] ring-offset-background transition-all duration-100 ease-in-out hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Get started
            </button>
            <button
              type="button"
              className="bg-warm-white inline-flex h-10 items-center justify-center gap-1 space-x-2 rounded-md bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground ring-offset-background transition-all duration-300 hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA

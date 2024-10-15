import React from "react"
import Image from "next/image"

const Testimonial: React.FC = () => {
  return (
    <div className=" my-14 max-w-5xl text-black md:w-2/3">
      <div className="m-auto flex flex-col justify-center p-8">
        {/* Header Section */}
        <h4 className="mb-4 text-center text-2xl font-semibold uppercase text-primary">
          Testimonials
        </h4>
        <h2 className="mb-4 text-center text-4xl font-semibold">
          See What Our Users Are Saying ❤️
        </h2>
        <div className="mb-8 text-center text-xl tracking-tighter">
          No phony or staged testimonials. Just real feedback from real users.
        </div>

        {/* Testimonials and Button Section */}
        <div className="flex flex-col items-start justify-between space-y-8 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
          {/* Testimonial */}
          <div className="w-full space-y-6 lg:w-2/3">
            <a
              className="group flex items-start space-x-4 rounded-lg p-6 text-left transition-colors hover:bg-gray-100"
              href="https://blog.gumloop.com/triptease-enterprise-case-study-ai-assisted-sales/"
            >
              <div className="mr-4 w-2 self-stretch rounded-full bg-primary"></div>
              <div className="flex-1">
                <p className="text-md mb-4 font-medium italic text-gray-800 transition-colors group-hover:text-pink-500 md:text-2xl">
                  Gumloop is gamechanging. It helped my team generate 65% more
                  meetings YoY and win 207% more revenue. I don&apos;t think
                  we&apos;ve even scratched the surface.
                </p>
                <div className="flex items-center">
                  {/* Testimonial Profile Image */}
                  <Image
                    alt="Ben from Triptease's profile picture"
                    width={48}
                    height={48}
                    className="mr-3 rounded-full"
                    src="/ben_triptease_headshot.png"
                  />
                  <p className="text-sm font-semibold text-gray-600">
                    Ben from Triptease
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Button Section */}
          <div className="flex w-full justify-center lg:w-1/3">
            <button
              type="button"
              className="mt-4 inline-flex h-10 items-center justify-center gap-1 space-x-2 rounded-md border border-[#f06293] bg-[#fff0f4] px-5 py-2 text-sm font-medium text-[#f06293] ring-offset-background transition-all duration-100 ease-in-out hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:mt-0"
            >
              See our Wall of Love -&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

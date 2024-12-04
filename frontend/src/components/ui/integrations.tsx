import React from "react"
import Image from "next/image"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

const Integration: React.FC = () => {
  const images = [
    "/gmail.png",
    "/reddit.png",
    "/openai.png",
    "/wordpress.png",
    "/gdrive.png",
    "/amazon.png",
    "/github.png",
    "/gdocs.png",
    "/gsheets.png",
    "/salesforce.png",
    "/zendesk.png",
    "/youtube.png",
    "/linear.png",
    "/hacker_news.png",
    "/google.png",
    "/twitter.png",
    "/outlook.png",
    "/gcalendar.png",
    "/slack.png",
    "/notion.png",
    "/typeform.png",
    "/airtable.png",
  ]

  return (
    <div className="my-24 flex h-full w-full items-center justify-center">
      {/* Centering Section */}
      <div className="center m-auto flex max-w-7xl flex-col justify-center">
        {/* Header Section */}
        <div className="center flex w-full flex-col justify-center space-y-4">
          <div className="center flex flex-col space-y-2">
            <h4 className="mx-auto text-2xl font-semibold uppercase text-primary">
              Nodes
            </h4>
            <h2 className="text-center text-4xl font-semibold text-black">
              Connect your workspace.
            </h2>
          </div>
          <div className="text-center text-2xl  text-black">
            Gumloop connects with dozens of platforms. Anything we&apos;re
            missing?
          </div>
          <div className="pt-5">
            {/* First Row of Logos */}
            <div className="mb-8 flex justify-center gap-8">
              {[...Array(9)].map((_, index) => (
                <Image
                  key={index}
                  alt={`platform logo ${index + 1}`}
                  src={
                    `https://www.gumloop.com/images` +
                    images[index % images.length]
                  }
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              ))}
            </div>
            {/* Second Row of Logos */}
            <div className="mb-8 flex justify-center gap-8">
              {[...Array(9)].map((_, index) => (
                <Image
                  key={index + 9}
                  alt={`platform logo ${index + 9}`}
                  src={
                    `https://www.gumloop.com/images` +
                    images[(index + 9) % images.length]
                  }
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              ))}
            </div>
            {/* Third Row of Logos */}
            {/* Fourth Row of Logos */}
            <div className="mb-8 flex items-center justify-center gap-8">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index + 18}
                  alt={`platform logo ${index + 19}`}
                  src={
                    `https://www.gumloop.com/images` +
                    images[(index + 18) % images.length]
                  }
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              ))}
              <Plus className="h-10 w-10 text-gray-400" />
            </div>
          </div>
          {/* Request Integration Button */}
          <div className="mx-auto pt-4">
            <button
              type="button"
              className="bg-warm-white flex h-11 w-full max-w-60 items-center justify-center gap-1 space-x-2 whitespace-nowrap rounded-md border border-input px-7 text-xs font-medium text-gray-500 ring-offset-background transition-all duration-300 hover:bg-gray-50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:text-base"
            >
              <span>Add an Integration</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right hidden h-4 lg:block"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integration

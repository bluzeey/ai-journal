import React from "react"
import Image from "next/image"
import { Linkedin, Twitter, Youtube } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full border-t border-t-gray-300 bg-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* Logo and Tagline */}
            <div className="flex h-20">
              <a href="/">
                <div className="relative h-20 w-40">
                  <Image
                    alt="Gumloop logo"
                    src="/gumloop_logo.svg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-secondary">Backed by</span>
              <div className="mt-1 flex items-center">
                <Image
                  alt="Y Combinator"
                  src="/y_combinator.png"
                  width={50}
                  height={50}
                  className="mr-1 h-8 w-8"
                />
                <span className="text-lg font-bold text-black">Combinator</span>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Automate any workflow with AI.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.youtube.com/@Gumloop_Ai"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Youtube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/gumloop"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/xtbrafmzC7"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Discord</span>
                <svg
                  className="h-6 w-5"
                  width="800px"
                  height="800px"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="#5865F2"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://twitter.com/gumloop_ai"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://medium.com/@max_82395"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Medium</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Popular Use Cases
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://gumloop.com/browser-extension"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Chrome Extension
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/ai-web-scraping"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Web Scraping
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/seo-marketing"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      SEO Automation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/document-processing"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Document Processing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://www.youtube.com/@Gumloop_Ai"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Youtube Channel
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/pricing"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.gumloop.com/getting-started"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/xtbrafmzC7"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Discord Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/changelog"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://gumloop.com/love"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Wall Of Love
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.gumloop.com/about"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ycombinator.com/companies/gumloop/jobs/iIpDrPG-founding-software-engineer-frontend-ux"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.gumloop.com/tag/handbook/"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Handbook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/blog"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://news.ycombinator.com/item?id=39302870"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Hacker News
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.gumloop.com/gumloop-vs-zapier/"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Gumloop vs Zapier
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://gumloop.com/privacy-policy"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gumloop.com/tos"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://trust.gumloop.com/"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Trust
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-900/10 pt-8 text-center">
          <p className="text-xs leading-5 text-gray-500">
            founders@gumloop.com
          </p>
          <p className="text-xs leading-5 text-gray-500">
            Made with ❤️ in Vancouver, Canada
          </p>
          <p className="text-xs leading-5 text-gray-500">
            © 2024 AgentHub Canada Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

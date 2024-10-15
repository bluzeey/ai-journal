import React from "react"
import {
  BarChart,
  Cloud,
  Cpu,
  Database,
  Lock,
  RefreshCw,
  Server,
  Users,
} from "lucide-react"

const Enterprise: React.FC = () => {
  return (
    <div className="mx-10 max-w-5xl py-4 md:w-2/3">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="center mb-12 flex flex-col space-y-2">
          <h4 className="text-center text-2xl font-semibold uppercase text-primary">
            Enterprise
          </h4>
          <h2 className="pb-4 text-center text-4xl text-black">
            Secure and Scalable by Default
          </h2>
          <p className="text-center text-xl text-gray-600">
            Gumloop is being built with a primary focus on security and
            scalability, ensuring ironclad protection for your data while
            providing the scalability to meet your evolving needs.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {/* Security Features */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-pink-400">
              Security Features
            </h2>

            <div className="mb-6 flex items-start">
              <Server className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  SOC 2 & GDPR Compliance
                </h3>
                <p className="text-gray-600">
                  We&apos;re entering the observation period for SOC 2 and GDPR
                  compliance. See details in the link below.
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <RefreshCw className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  No Training on Your Data
                </h3>
                <p className="text-gray-600">
                  Your data remains untouched for AI training, backed by
                  comprehensive data processing agreements.
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <Lock className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  State-of-the-Art Encryption
                </h3>
                <p className="text-gray-600">
                  Information safeguarded with AES-256 encryption, both at rest
                  and during transmission.
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <Users className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  Fine-Grained Access Control
                </h3>
                <p className="text-gray-600">
                  Implement precise user permissions and role-based access for
                  authorized users only.
                </p>
              </div>
            </div>
          </div>

          {/* Scalability Features */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-pink-500">
              Scalability Features
            </h2>

            <div className="mb-6 flex items-start">
              <Cpu className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  Auto-scaling Compute
                </h3>
                <p className="text-gray-600">
                  System automatically adjusts compute resources based on demand
                  for optimal performance.
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <Database className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  Reserved Compute for Enterprise
                </h3>
                <p className="text-gray-600">
                  Enterprise customers can reserve compute resources for
                  consistent performance.
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <Cloud className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  Parallelized Execution
                </h3>
                <p className="text-gray-600">
                  Workflows automatically execute steps in parallel to reduce
                  processing time and improve efficiency.
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <BarChart className="mr-4 h-6 w-6 flex-shrink-0 text-pink-400" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  Usage Tracking & Monitoring
                </h3>
                <p className="text-gray-600">
                  Track usage metrics and monitor system performance to optimize
                  workflows and resource allocation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex w-full justify-center py-4">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-1 space-x-2 rounded-md border border-[#f06293] bg-[#fff0f4] px-5 py-2 text-sm font-medium text-[#f06293] ring-offset-background transition-all duration-100 ease-in-out hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Read more about our policies
          </button>
        </div>
      </div>
    </div>
  )
}

export default Enterprise

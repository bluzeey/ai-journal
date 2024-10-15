import React from "react"
import Link  from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between border-t px-4 py-6 sm:flex-row md:px-6 bg-white">
    <p className="text-xs text-gray-600">
      © 2024 AI Journal. All rights reserved.
    </p>
    <p className="text-center">Made with ❤️ from India</p>
    <nav className="flex gap-4 sm:ml-auto sm:gap-6">
      <Link className="text-xs text-gray-600 underline-offset-4 hover:underline" href="#">
        Terms of Service
      </Link>
      <Link className="text-xs text-gray-600 underline-offset-4 hover:underline" href="#">
        Privacy
      </Link>
    </nav>
  </footer>
  )
}

export default Footer

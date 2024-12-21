import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex max-w-5xl items-center gap-4 mx-auto justify-around -mt-20 px-4 py-6 md:px-6">
      <p className="z-10 text-md">© 2024 AI Journal. All rights reserved.</p>
      <p className="z-10  text-md">Made with ❤️ from India</p>
      <nav className="flex gap-4 sm:ml-auto !text-white sm:gap-6">
        <Link
          className="z-10  text-md !text-white underline-offset-4 hover:underline"
          href="https://discord.gg/5DXkJHgG"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.505.074.074 0 00-.079.037 13.875 13.875 0 00-.597 1.229 19.871 19.871 0 00-5.927 0 13.8 13.8 0 00-.599-1.229.077.077 0 00-.078-.037A19.736 19.736 0 003.677 4.37a.072.072 0 00-.032.027C.533 9.039-.32 13.579.099 18.057a.085.085 0 00.032.058 19.974 19.974 0 005.99 3.031.073.073 0 00.079-.028 14.531 14.531 0 001.385-2.244.076.076 0 00-.041-.108 13.133 13.133 0 01-1.874-.897.075.075 0 01-.008-.127c.126-.095.251-.194.372-.296a.073.073 0 01.073-.01c3.927 1.825 8.18 1.825 12.061 0a.074.074 0 01.075.009c.12.102.245.201.371.296a.075.075 0 01-.006.127 12.89 12.89 0 01-1.876.896.076.076 0 00-.04.109 14.378 14.378 0 001.387 2.244.073.073 0 00.078.028 19.935 19.935 0 005.992-3.031.085.085 0 00.031-.058c.5-5.177-.838-9.677-3.547-13.661a.064.064 0 00-.032-.027zM8.02 15.726c-1.182 0-2.158-1.085-2.158-2.419 0-1.333.955-2.418 2.158-2.418 1.204 0 2.159 1.085 2.159 2.418 0 1.334-.955 2.419-2.16 2.419zm7.956 0c-1.182 0-2.159-1.085-2.159-2.419 0-1.333.955-2.418 2.159-2.418 1.204 0 2.158 1.085 2.158 2.418 0 1.334-.954 2.419-2.158 2.419z" />
          </svg>
        </Link>
        <Link
          className="z-10 text-md  underline-offset-4 hover:underline"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="z-10 text-md underline-offset-4 hover:underline"
          href="#"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;

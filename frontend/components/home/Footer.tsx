import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row max-w-5xl items-center gap-4 mx-auto text-white justify-center md:px-6 mb-10 w-full">
      <p className="z-10 text-md order-2 sm:order-0">
        © 2024 AI Journal. All rights reserved.
      </p>

      <p className="z-10 text-md order-1 sm:order-0 ">
        Made with ❤️ from India
      </p>
      <div className="flex gap-4 !text-white items-center sm:gap-6 sm:order-0">
        <Link
          className="z-10  text-md !text-white underline-offset-4 hover:underline"
          href="https://discord.gg/5DXkJHgG"
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5422 7.3386C24.6598 6.47767 22.6607 5.85021 20.574 5.5C20.3114 5.95236 20.0194 6.56523 19.8151 7.04676C17.5957 6.72573 15.3923 6.72573 13.2035 7.04676C12.9992 6.56523 12.6928 5.95236 12.4447 5.5C10.3434 5.85021 8.34434 6.47767 6.47508 7.3386C2.69573 12.9128 1.67428 18.3556 2.18501 23.7255C4.69484 25.5496 7.11716 26.6585 9.49714 27.3882C10.0808 26.6002 10.6061 25.7538 11.0585 24.8637C10.1976 24.5427 9.3804 24.1487 8.59243 23.6818C8.79673 23.5359 9.00102 23.3754 9.19072 23.2148C13.9477 25.3891 19.1003 25.3891 23.7988 23.2148C24.0031 23.3754 24.1928 23.5359 24.3972 23.6818C23.6092 24.1487 22.792 24.5427 21.9311 24.8637C22.3835 25.7538 22.9087 26.6002 23.4924 27.3882C25.8709 26.6585 28.3078 25.5496 30.8045 23.7255C31.4319 17.5094 29.8108 12.1103 26.5422 7.3386ZM11.7151 20.4131C10.2851 20.4131 9.11772 19.1144 9.11772 17.524C9.11772 15.9334 10.2559 14.6347 11.7151 14.6347C13.1597 14.6347 14.3417 15.9334 14.3125 17.524C14.3125 19.1144 13.1597 20.4131 11.7151 20.4131ZM21.3037 20.4131C19.8736 20.4131 18.7047 19.1144 18.7047 17.524C18.7047 15.9334 19.8444 14.6347 21.3037 14.6347C22.7483 14.6347 23.9302 15.9334 23.9009 17.524C23.9009 19.1144 22.7628 20.4131 21.3037 20.4131Z"
              fill="white"
            />
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
      </div>
    </footer>
  );
};

export default Footer;

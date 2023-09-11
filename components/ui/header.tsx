"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="relative lg:px-40 md:px-14 sm:px-6 px-4">
      <header className="w-full z-30 md:bg-opacity-90 mt-4 transition duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 rounded-full bg-white">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0">
              {/* <Logo /> */}
              <Link
                href="https://app.yomu.ai/signin"
                className="text-[16px] font-inter font-semibold bg-[#EF844F] rounded-full text-white hover:bg-[#e07c4b] px-5 sm:px-5 py-3 sm:py-3 flex items-center transition duration-150 ease-in-out"
              >
                Yomu AI
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow ">
              {/* Desktop menu links */}
              <ul className="flex grow justify-center flex-wrap items-center md:grow -mr-[30px] ">
                <li>
                  <Link
                    href="/features"
                    className="text-[#211E1D] font-inter font-semibold hover:text-gray-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-[#211E1D] font-inter font-semibold hover:text-gray-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    className="text-[#211E1D] font-inter font-semibold hover:text-gray-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[#211E1D] font-inter font-semibold hover:text-gray-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-[#211E1D] font-inter font-semibold hover:text-gray-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    Blog
                  </Link>
                </li>
              </ul>

              {/* Desktop sign in links */}
              <ul className="flex justify-end flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="https://app.yomu.ai/signin"
                    className="text-[16px] font-inter font-normal bg-[#F2F2F2] rounded-full text-[#211E1D] hover:bg-gray-300 px-5 sm:px-5 py-3 sm:py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.yomu.ai/signin"
                    className="text-[16px] font-inter font-normal bg-[#55B469] rounded-full text-white hover:bg-[#469457] px-5 sm:px-5 py-3 sm:py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>

            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
}

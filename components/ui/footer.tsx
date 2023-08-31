import Link from "next/link";
import Image from "next/image";

import Gmail from "@/public/image/Social_Gmail.png";
import Snack from "@/public/image/Social_X.png";
import Instagram from "@/public/image/Social_Instagram.png";
import TikTok from "@/public/image/Social_TikTok.png";
import LinkedIn from "@/public/image/Social_LinkedIn.png";

import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-10 pt-10 pb-6 sm:px-6 bg-[#ffffff] rounded-t-[40px] flex flex-col gap-10">
        <div>
          <div className="grid sm:grid-cols-12 gap-4 md:gap-24">
            <div className="sm:col-span-12 lg:col-span-3 gap-10 flex flex-col">
              <div>
                <Link
                  href="https://app.yomu.ai/signin"
                  className="font-medium py-4 px-5 bg-[#EF844F] rounded-full w-32 text-center justify-center text-white hover:text-gray-900 flex items-center transition duration-150 ease-in-out"
                >
                  Yomu AI
                </Link>
              </div>
              <div>
                <ul className="flex gap-3">
                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-xl shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <Image
                        className="rounded-xl shadow-2xl"
                        src={Gmail}
                        width={35}
                        height={35}
                        alt="Gmail Icon"
                      ></Image>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-xl shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <Image
                        className="rounded-xl shadow-2xl"
                        src={Snack}
                        width={35}
                        height={35}
                        alt="Snack Icon"
                      ></Image>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-xl shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <Image
                        className="rounded-xl shadow-2xl"
                        src={Instagram}
                        width={35}
                        height={35}
                        alt="Instagram Icon"
                      ></Image>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-xl shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <Image
                        className="rounded-xl shadow-2xl"
                        src={TikTok}
                        width={35}
                        height={35}
                        alt="TikTok Icon"
                      ></Image>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-xl shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <Image
                        className="rounded-xl shadow-2xl"
                        src={LinkedIn}
                        width={35}
                        height={35}
                        alt="LinkedIn Icon"
                      ></Image>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:col-span-12 lg:col-span-9 flex flex-col gap-10">
              <div className="w-full bg-[#FBFAF8] rounded-[20px] flex flex-col items-start p-6  gap-[24px]">
                <div className="flex-col gap-[16px]">
                  <p className="text-[#211E1D] font-semibold font-inter text-[20px]">
                    Stay in the loop with our newsletter
                  </p>
                  <p className="text-[#837E7C] self-stretch font-inter text-[16px]">
                    Get the latest news and articles to your inbox every month.
                  </p>
                </div>
                <div className="flex w-full">
                  <input
                    type="text"
                    className="form-input w-full appearance-none bg-[#F2F2F2] focus:border-gray-600 rounded-[16px] px-4  text-[#837E7C]"
                    placeholder="Your email…"
                    aria-label="Your email…"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-12 gap-4 md:gap-24">
            <div className="flex items-center md:items-end justify-center md:justify-start sm:col-span-12 lg:col-span-3">
              <div>
                <Link
                  className="flex btn p-4 text-white text-18 bg-[#55B469] border-t-[1px] border-r-[1px] border-b-[2px] border-l-[1px] border-[#2D8C41] rounded-full hover:bg-[#43c960] w-[100%] mb-4 sm:w-auto sm:mb-0"
                  href="/#"
                >
                  Start writing for free
                </Link>
              </div>
            </div>
            <div className="sm:col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="w-full ">
                  <h6 className="text-[#211E1D] text-[18px] font-semibold mb-2">
                    Yomu
                  </h6>
                  <ul className="text-sm">
                    <li className="mb-2">
                      <Link
                        href="/#"
                        className="text-[#837E7C]  text-[16px] hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/#"
                        className="text-[#837E7C] text-[16px] hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/#"
                        className="text-[#837E7C] text-[16px] hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Review
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-full">
                  <h6 className="text-[#211E1D] text-[18px] font-semibold mb-2">
                    Resources
                  </h6>
                  <ul className="text-sm">
                    <li className="mb-2">
                      <Link
                        href="/#"
                        className="text-[#837E7C] text-[16px] hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/#"
                        className="text-[#837E7C] text-[16px] hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Our values
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/#"
                        className="text-[#837E7C] text-[16px] hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="items-end justify-start grid sm:grid-cols-12 gap-4 md:gap-24">
            <div className="sm:col-span-6 lg:col-span-3">
              &copy; 2023. All rights reserved
            </div>
            <div className="sm:col-span-6 lg:col-span-9">
              <div className="w-full grid grid-cols-2">
                <div className="item-center justify-start text-left">
                  Privacy policy
                </div>
                <div className="item-center justify-end text-right">
                  Design by Inedbois
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

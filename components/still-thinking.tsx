import Image from "next/image";
import HeroImage from "@/public/image/HomeImage.png";
import VideoThumb from "@/public/images/hero-image-01.png";
import ModalVideo from "@/components/modal-video";
import styles from "./still-thinking.module.css";

export default function StillThinking() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 gap-12">
        {/* Hero content */}
        <div className="flex flex-col pt-12 md:pt-48">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <p
              className="text-[#211E1D] leading-tighter tracking-tighter mb-6 text-[50px] md:text-[56px] font-[600]"
              data-aos="zoom-y-out"
            >
              Still thinking?
              <br /> There’s even more coming
            </p>
          </div>

          {/* Hero image */}
          <div className="flex-row justify-between grid grid-cols-3 gap-4">
            <div className="flex flex-col col-span-2 w-full gap-4">
              <div className="bg-[#FFF] h-full flex flex-row rounded-3xl border-t-2 border-b-4 border-x-2 border-solid border-[#ECE8E7] ">
                <div className="flex flex-row">
                  <div className="flex flex-col w-full p-7">
                    <p className="text-[20px] font-[600]">
                      Avoid AI detectors with Yomu
                    </p>
                    <p className="text-[#837E7C] tracking-[-0.16px]">
                      Get tips how to rewrite your copy to avoid AI detectors
                    </p>
                  </div>

                  <div
                    className={`w-full bg-[#81A2E7] rounded-[20px] p-5 ${styles["scroll-container"]}`}
                  >
                    <div className="flex flex-col bg-[#FFF] p-4 rounded-3xl">
                      <p className="text-[#211E1D] font-[600]">
                        What is global warming?
                      </p>
                      <p className="text-[12px]">
                        Since the Industrial Revolution, the global annual
                        temperature has increased in total by a little more than
                        1 degree Celsius, or about 2 degrees Fahrenheit. Between
                        1880—the year that accurate recordkeeping began—and
                        1980, it rose on average by 0.07 degrees Celsius (0.13
                        degrees Fahrenheit) every 10 years. Since 1981, however,
                        the rate of increase has more than doubled: For the last
                        40 years, we’ve seen the global annual temperature rise
                        by 0.18 degrees Celsius, or 0.32 degrees Fahrenheit, per
                        decade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="w-full bg-[#FFF] rounded-3xl border-t-2 border-b-4 border-x-2 border-solid border-[#ECE8E7]">
                  <div className="flex flex-col p-7">
                    <p className="font-[600] text-[20px] text-[#211E1D]">
                      Plagiarism checker
                    </p>
                    <p className="font-[500] text-[16px] text-[#837E7C]">
                      Reduce your chances of receiving plagiarised text with
                      Yomu AI
                    </p>
                  </div>
                  <div
                    className={`bg-orange-100 px-4 py-5 rounded-[20px] h-72 ${styles["scroll-container"]}`}
                  >
                    <div className="bg-white flex flex-col rounded-2xl p-4 gap-[13.87px]">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2">
                          <div className="bg-gray-300 px-2 py-0 rounded-md">
                            2
                          </div>
                          <div className="text-[13.867] font-[500]">
                            Plagiarisms detected
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M14.7341 14.1994L11.2675 10.7328M11.2675 10.7328L7.80078 7.26611M11.2675 10.7328L14.7341 7.26611M11.2675 10.7328L7.80078 14.1995"
                              stroke="#211E1D"
                              strokeWidth="0.866667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div>
                              <p className="text-[#EF844F] text-[10.4px]">
                                24% similarity with this source:
                              </p>
                            </div>
                            <div className="bg-orange-100 p-2 rounded-2xl">
                              <p className="text-[#EF844F] text-[12px]">
                                What is global warming? Since the Industrial
                                Revolution, the global...
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-[#81A2E7] cursor-pointer">
                              https://www.nrdc.org/stories/global...
                            </p>
                            <div className="cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                              >
                                <path
                                  d="M5.45308 7.81403L8.2815 4.98561M4.39261 6.04616L3.68551 6.75326C2.90446 7.53431 2.90423 8.80073 3.68528 9.58178C4.46633 10.3628 5.73303 10.3626 6.51408 9.58155L7.22043 8.87452M6.51363 3.92466L7.22073 3.21755C8.00178 2.4365 9.26795 2.43664 10.049 3.21769C10.83 3.99874 10.83 5.26508 10.049 6.04612L9.34223 6.7532"
                                  stroke="#81A2E7"
                                  strokeWidth="0.749998"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row gap-[7px]">
                          <div className="flex flex-row cursor-pointer bg-[#55B469] items-center p-[10px] rounded-full gap-1">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                              >
                                <path
                                  d="M7.48437 5.1665L7.90863 7.74223L10.4844 8.1665L7.90863 8.59076L7.48437 11.1665L7.0601 8.59076L4.48438 8.1665L7.0601 7.74223L7.48437 5.1665Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.85937 3.6665L5.12453 5.27634L6.73437 5.5415L5.12453 5.80666L4.85937 7.41649L4.59421 5.80666L2.98438 5.5415L4.59421 5.27634L4.85937 3.6665Z"
                                  fill="white"
                                />
                                <path
                                  d="M7.10937 2.1665L7.26847 3.1324L8.23437 3.2915L7.26847 3.4506L7.10937 4.4165L6.95027 3.4506L5.98438 3.2915L6.95027 3.1324L7.10937 2.1665Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <p className="text-[#FFF]">Rewrite with AI</p>
                          </div>
                          <div className="flex flex-row cursor-pointer bg-[#FBFAF8] items-center p-[10px] rounded-full gap-1">
                            Discard
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div>
                              <p className="text-[#EF844F] text-[10.4px]">
                                24% similarity with this source:
                              </p>
                            </div>
                            <div className="bg-orange-100 p-2 rounded-2xl">
                              <p className="text-[#EF844F] text-[12px]">
                                What is global warming? Since the Industrial
                                Revolution, the global...
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-[#81A2E7] cursor-pointer">
                              https://www.nrdc.org/stories/global...
                            </p>
                            <div className="cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                              >
                                <path
                                  d="M5.45308 7.81403L8.2815 4.98561M4.39261 6.04616L3.68551 6.75326C2.90446 7.53431 2.90423 8.80073 3.68528 9.58178C4.46633 10.3628 5.73303 10.3626 6.51408 9.58155L7.22043 8.87452M6.51363 3.92466L7.22073 3.21755C8.00178 2.4365 9.26795 2.43664 10.049 3.21769C10.83 3.99874 10.83 5.26508 10.049 6.04612L9.34223 6.7532"
                                  stroke="#81A2E7"
                                  strokeWidth="0.749998"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row gap-[7px]">
                          <div className="flex flex-row cursor-pointer bg-[#55B469] items-center p-[10px] rounded-full gap-1">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                              >
                                <path
                                  d="M7.48437 5.1665L7.90863 7.74223L10.4844 8.1665L7.90863 8.59076L7.48437 11.1665L7.0601 8.59076L4.48438 8.1665L7.0601 7.74223L7.48437 5.1665Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.85937 3.6665L5.12453 5.27634L6.73437 5.5415L5.12453 5.80666L4.85937 7.41649L4.59421 5.80666L2.98438 5.5415L4.59421 5.27634L4.85937 3.6665Z"
                                  fill="white"
                                />
                                <path
                                  d="M7.10937 2.1665L7.26847 3.1324L8.23437 3.2915L7.26847 3.4506L7.10937 4.4165L6.95027 3.4506L5.98438 3.2915L6.95027 3.1324L7.10937 2.1665Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <p className="text-[#FFF]">Rewrite with AI</p>
                          </div>
                          <div className="flex flex-row cursor-pointer bg-[#FBFAF8] items-center p-[10px] rounded-full gap-1">
                            Discard
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div>
                              <p className="text-[#EF844F] text-[10.4px]">
                                24% similarity with this source:
                              </p>
                            </div>
                            <div className="bg-orange-100 p-2 rounded-2xl">
                              <p className="text-[#EF844F] text-[12px]">
                                What is global warming? Since the Industrial
                                Revolution, the global...
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-[#81A2E7] cursor-pointer">
                              https://www.nrdc.org/stories/global...
                            </p>
                            <div className="cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                              >
                                <path
                                  d="M5.45308 7.81403L8.2815 4.98561M4.39261 6.04616L3.68551 6.75326C2.90446 7.53431 2.90423 8.80073 3.68528 9.58178C4.46633 10.3628 5.73303 10.3626 6.51408 9.58155L7.22043 8.87452M6.51363 3.92466L7.22073 3.21755C8.00178 2.4365 9.26795 2.43664 10.049 3.21769C10.83 3.99874 10.83 5.26508 10.049 6.04612L9.34223 6.7532"
                                  stroke="#81A2E7"
                                  strokeWidth="0.749998"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row gap-[7px]">
                          <div className="flex flex-row cursor-pointer bg-[#55B469] items-center p-[10px] rounded-full gap-1">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                              >
                                <path
                                  d="M7.48437 5.1665L7.90863 7.74223L10.4844 8.1665L7.90863 8.59076L7.48437 11.1665L7.0601 8.59076L4.48438 8.1665L7.0601 7.74223L7.48437 5.1665Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.85937 3.6665L5.12453 5.27634L6.73437 5.5415L5.12453 5.80666L4.85937 7.41649L4.59421 5.80666L2.98438 5.5415L4.59421 5.27634L4.85937 3.6665Z"
                                  fill="white"
                                />
                                <path
                                  d="M7.10937 2.1665L7.26847 3.1324L8.23437 3.2915L7.26847 3.4506L7.10937 4.4165L6.95027 3.4506L5.98438 3.2915L6.95027 3.1324L7.10937 2.1665Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <p className="text-[#FFF]">Rewrite with AI</p>
                          </div>
                          <div className="flex flex-row cursor-pointer bg-[#FBFAF8] items-center p-[10px] rounded-full gap-1">
                            Discard
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-[#FFF] rounded-3xl border-t-2 border-b-4 border-x-2 border-solid border-[#ECE8E7]">
                  <div className="flex flex-col p-7">
                    <p className="font-[600] text-[20px] text-[#211E1D]">
                      Grammar & text improvements
                    </p>
                    <p className="font-[500] text-[16px] text-[#837E7C]">
                      Leverage our advanced grammar checker and plagiarism tool
                    </p>
                  </div>
                  <div
                    className={`bg-orange-50 px-4 py-5 rounded-[20px] h-72 ${styles["scroll-container"]}`}
                  >
                    <div className="bg-white flex flex-col rounded-2xl p-4 gap-[13.87px]">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2">
                          <div className="bg-gray-300 px-2 py-0 rounded-md">
                            7
                          </div>
                          <div className="text-[13.867] font-[500]">
                            Suggestions
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M14.7341 14.1994L11.2675 10.7328M11.2675 10.7328L7.80078 7.26611M11.2675 10.7328L14.7341 7.26611M11.2675 10.7328L7.80078 14.1995"
                              stroke="#211E1D"
                              strokeWidth="0.866667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div className="flex flex-row items-center gap-1">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="8"
                                  viewBox="0 0 8 8"
                                  fill="none"
                                >
                                  <circle
                                    cx="3.60143"
                                    cy="3.93298"
                                    r="3.46667"
                                    fill="#EF844F"
                                  />
                                </svg>
                              </div>
                              <p className="text-[#EF844F] text-[10.4px]">
                                Grammar Error
                              </p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <div>
                                <p
                                  className={`${styles["text-middle-line"]} text-[13.876px] line-through`}
                                >
                                  blesed
                                </p>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                >
                                  <path
                                    d="M18.268 11.266L13.9346 6.93262M18.268 11.266L13.9346 15.5993M18.268 11.266H2.66797"
                                    stroke="#211E1D"
                                    strokeWidth="0.866667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="bg-[#EF844F] rounded-lg">
                                <p className="text-[13.876px] text-white p-[6.93px]">
                                  blessed
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-black">
                              Lorem ipsum dolor set ruefutes major pontenus
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div className="flex flex-row items-center gap-1">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="8"
                                  viewBox="0 0 8 8"
                                  fill="none"
                                >
                                  <circle
                                    cx="3.60143"
                                    cy="3.93298"
                                    r="3.46667"
                                    fill="#81A2E7"
                                  />
                                </svg>
                              </div>
                              <p className="text-[#81A2E7] text-[10.4px]">
                                Text Improvement
                              </p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <div className="bg-[#81A2E7] rounded-lg">
                                <p className="text-[13.876px] text-white p-[6.93px]">
                                  The never-ending idea of world destr
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-black">
                              The never-ending idea of world destr
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div className="flex flex-row items-center gap-1">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="8"
                                  viewBox="0 0 8 8"
                                  fill="none"
                                >
                                  <circle
                                    cx="3.60143"
                                    cy="3.93298"
                                    r="3.46667"
                                    fill="#EF844F"
                                  />
                                </svg>
                              </div>
                              <p className="text-[#EF844F] text-[10.4px]">
                                Grammar Error
                              </p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <div>
                                <p
                                  className={`${styles["text-middle-line"]} text-[13.876px] line-through`}
                                >
                                  blesed
                                </p>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                >
                                  <path
                                    d="M18.268 11.266L13.9346 6.93262M18.268 11.266L13.9346 15.5993M18.268 11.266H2.66797"
                                    stroke="#211E1D"
                                    strokeWidth="0.866667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="bg-[#EF844F] rounded-lg">
                                <p className="text-[13.876px] text-white p-[6.93px]">
                                  blessed
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-black">
                              Lorem ipsum dolor set ruefutes major pontenus
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                        <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[13.87px]">
                          <div className="flex flex-col gap-[13.87px]">
                            <div className="flex flex-row items-center gap-1">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="8"
                                  viewBox="0 0 8 8"
                                  fill="none"
                                >
                                  <circle
                                    cx="3.60143"
                                    cy="3.93298"
                                    r="3.46667"
                                    fill="#81A2E7"
                                  />
                                </svg>
                              </div>
                              <p className="text-[#81A2E7] text-[10.4px]">
                                Text Improvement
                              </p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <div className="bg-[#81A2E7] rounded-lg">
                                <p className="text-[13.876px] text-white p-[6.93px]">
                                  The never-ending idea of world destr
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-[12px] text-black">
                              The never-ending idea of world destr
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF] flex-row rounded-3xl grid grid-cols-10 border-t-2 border-b-4 border-x-2 border-solid border-[#ECE8E7]">
                <div className="flex flex-col w-full p-7 col-span-4">
                  <p className="text-[20px] font-[600]">Citation</p>
                  <p className="text-[#837E7C] tracking-[-0.16px]">
                    Enhance your essays with our powerful source finding tool
                  </p>
                </div>
                <div className="w-full bg-gray-100 rounded-[20px] p-5 col-span-6">
                  <div className="bg-white flex flex-col rounded-2xl p-4 gap-[13.87px]">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-2">
                        <div className="bg-gray-300 px-2 py-0 rounded-md">
                          7
                        </div>
                        <div className="text-[13.867] font-[500]">
                          Citation suggestions
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M14.7341 14.1994L11.2675 10.7328M11.2675 10.7328L7.80078 7.26611M11.2675 10.7328L14.7341 7.26611M11.2675 10.7328L7.80078 14.1995"
                            stroke="#211E1D"
                            strokeWidth="0.866667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex flex-col p-2 border border-solid border-gray-300 rounded-2xl gap-4">
                      <div className="flex flex-col bg-[#FBFAF8] w-full p-3 rounded-2xl gap-[10.92px]">
                        <div className="flex flex-row">
                          <div className="bg-white rounded-lg py-2 px-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="41"
                              height="30"
                              viewBox="0 0 41 30"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_708_13679)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M40.98 9.42676C39.5824 10.2942 38.5703 10.8243 37.4137 11.499C30.4739 15.6918 23.7752 20.3665 18.6185 26.487L16.1125 29.5231L8.49805 17.3786C10.1848 18.728 14.4739 22.5352 16.2089 23.4027L21.7993 19.1617C25.7029 16.4147 36.739 10.4388 40.98 9.42676Z"
                                  fill="#F3D25E"
                                />
                                <path
                                  d="M12.0655 18.4872C12.2583 18.6317 12.4028 18.7763 12.5956 18.9209C11.1016 14.7281 8.45103 10.5354 4.69199 6.9209C3.43898 6.9209 2.18597 6.9209 0.884766 6.9209C5.70404 10.3908 9.46308 14.439 12.0655 18.4872Z"
                                  fill="#638BC4"
                                />
                                <path
                                  d="M13.3176 19.5953C13.4621 19.7398 13.6549 19.8362 13.7995 19.9808C13.5585 14.2941 11.438 8.46273 7.38985 3.45068C6.18503 3.45068 4.98021 3.45068 3.77539 3.45068C8.93202 8.22177 12.1127 14.0049 13.3176 19.5953Z"
                                  fill="#305CA5"
                                />
                                <path
                                  d="M14.3317 20.4147C14.91 20.8966 15.4883 21.3303 15.9702 21.6677C17.2232 15.5472 16.163 8.94477 12.8377 3.20983C18.4762 3.11345 24.1148 3.06525 29.7051 2.96887C30.9582 5.76405 31.6811 8.752 31.8738 11.8363C32.3557 11.5954 32.8377 11.3544 33.3678 11.1134C33.1268 7.93272 32.2594 4.55923 30.5726 0.607422C22.8618 0.607422 15.1991 0.607422 7.48828 0.607422C12.5003 6.53513 14.7654 13.7159 14.3317 20.4147Z"
                                  fill="#273D72"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_708_13679">
                                  <rect
                                    width="40"
                                    height="28.9157"
                                    fill="white"
                                    transform="translate(0.884766 0.607422)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div>
                              <p className="text-[#211E1D] text-[14.561px] font-[600]">
                                Effects of LNU Student’s Mental Hea...
                              </p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                              <p className="text-[#81A2E7] text-[12.741px] cursor-pointer">
                                semanticscholar.org
                              </p>
                              <div className="cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="16"
                                  viewBox="0 0 15 16"
                                  fill="none"
                                >
                                  <path
                                    d="M5.85712 6.29511V4.59641C5.85712 3.91682 5.85712 3.57677 5.98938 3.3172C6.10572 3.08888 6.29122 2.90338 6.51954 2.78704C6.77911 2.65479 7.11916 2.65479 7.79875 2.65479H11.1964C11.876 2.65479 12.2156 2.65479 12.4752 2.78704C12.7035 2.90338 12.8893 3.08888 13.0057 3.3172C13.1379 3.57677 13.1379 3.91657 13.1379 4.59616V7.99381C13.1379 8.67341 13.1379 9.0132 13.0057 9.27277C12.8893 9.50109 12.7033 9.68698 12.475 9.80331C12.2157 9.93544 11.8764 9.93544 11.1981 9.93544H9.49745M5.85712 6.29511H4.15842C3.47883 6.29511 3.13878 6.29511 2.87921 6.42737C2.65089 6.54371 2.46539 6.72921 2.34905 6.95753C2.2168 7.2171 2.2168 7.55715 2.2168 8.23674V11.6344C2.2168 12.314 2.2168 12.6536 2.34905 12.9132C2.46539 13.1415 2.65089 13.3273 2.87921 13.4436C3.13853 13.5758 3.47817 13.5758 4.15643 13.5758H7.5581C8.23636 13.5758 8.57553 13.5758 8.83484 13.4436C9.06317 13.3273 9.24899 13.1413 9.36533 12.913C9.49745 12.6537 9.49745 12.3144 9.49745 11.6361V9.93544M5.85712 6.29511H7.55606C8.23566 6.29511 8.57527 6.29511 8.83484 6.42737C9.06317 6.54371 9.24899 6.72921 9.36533 6.95753C9.49745 7.21685 9.49745 7.55649 9.49745 8.23477L9.49745 9.93544"
                                    stroke="#837E7C"
                                    strokeWidth="0.910082"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-2">
                          <p className="text-[12.741px] text-[#837E7C]">
                            Lorem ipsum dolor sit amet consectetur.
                            Pharetra tristique consectetur tempor leo. Etiam
                            condimentum imperdiet pellentesque ullamcorp...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col col-span-1 w-full grid grid-rows-3 gap-4">
              <div className=" bg-[#FFF] row-span-2 rounded-3xl border-t-2 border-b-4 border-x-2 border-solid border-[#ECE8E7]">
                <div className="flex flex-col p-7">
                  <p className="font-[600] text-[20px] text-[#211E1D]">
                    Powerful commands
                  </p>
                  <p className="font-[500] text-[16px] text-[#837E7C]">
                    Edit your essay with powerful suite of commands
                  </p>
                </div>
                <div
                  className={`bg-[#adeaba] px-4 py-5 rounded-[20px] h-[600px] ${styles["scroll-container"]}`}
                >
                  <div className="bg-white flex flex-col rounded-2xl">
                    <div className="px-[5px]">
                      <p className="text-[12px] text-gray-500 pt-[10.4px] px-[10.4px]">
                        Edit
                      </p>
                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_637_13104)">
                              <path
                                d="M9.11263 6.13338L3.7793 11.4667V14.1334L6.44596 14.1334L11.7793 8.80004M9.11263 6.13338L11.025 4.22094L11.0262 4.21981C11.2895 3.95655 11.4213 3.82469 11.5733 3.7753C11.7072 3.7318 11.8515 3.7318 11.9854 3.7753C12.1372 3.82466 12.269 3.95637 12.5318 4.21925L13.6917 5.37912C13.9557 5.64313 14.0878 5.77519 14.1372 5.92741C14.1807 6.06131 14.1807 6.20554 14.1372 6.33943C14.0878 6.49154 13.9554 6.62398 13.6917 6.88761L11.7793 8.80004M9.11263 6.13338L11.7793 8.80004"
                                stroke="#211E1D"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3.09961 2.80029L3.45316 4.94674L5.59961 5.30029L3.45316 5.65385L3.09961 7.80029L2.74606 5.65385L0.599609 5.30029L2.74606 4.94674L3.09961 2.80029Z"
                                fill="#211E1D"
                              />
                              <path
                                d="M6.09961 0.800293L6.31174 2.08816L7.59961 2.30029L6.31174 2.51242L6.09961 3.80029L5.88748 2.51242L4.59961 2.30029L5.88748 2.08816L6.09961 0.800293Z"
                                fill="#211E1D"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_637_13104">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0.599609 0.800293)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Paraphrase</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M9.93229 9.86686H3.26562M13.9323 7.2002H3.26562"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Shorten</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M9.26562 12.6001H3.26562M13.9323 9.93343H3.26562M13.9323 7.26676H3.26562M13.9323 4.6001H3.26562"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Expand</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M13.9323 12H3.26562M13.9323 9.33333H3.26562M13.9323 6.66667H10.2656M13.9323 4H10.2656"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.749 3.48535V3.78479C4.32054 4.00876 4.01379 4.24247 3.82877 4.48592C3.64375 4.72936 3.55124 4.99472 3.55124 5.28199C3.55124 5.4524 3.57559 5.56926 3.62428 5.63255C3.6681 5.70072 3.72166 5.7348 3.78495 5.7348C3.84825 5.7348 3.93346 5.71776 4.04057 5.68368C4.14769 5.64472 4.24507 5.62525 4.33271 5.62525C4.53234 5.62525 4.70518 5.70072 4.85125 5.85165C5.00219 5.99772 5.07766 6.17787 5.07766 6.39211C5.07766 6.62581 4.98758 6.82787 4.80743 6.99829C4.62728 7.16383 4.40331 7.2466 4.13552 7.2466C3.8093 7.2466 3.51473 7.1054 3.25181 6.82301C2.98888 6.54061 2.85742 6.19248 2.85742 5.77862C2.85742 5.29173 3.0181 4.83892 3.33945 4.42019C3.66566 3.99659 4.13552 3.68498 4.749 3.48535ZM8.23273 3.50726V3.78479C7.74096 4.06719 7.41718 4.32037 7.26137 4.54434C7.10557 4.76832 7.02766 5.03124 7.02766 5.33311C7.02766 5.46944 7.05444 5.57169 7.108 5.63985C7.16156 5.70802 7.21755 5.7421 7.27598 5.7421C7.32954 5.7421 7.40987 5.72263 7.51699 5.68368C7.62411 5.64472 7.73122 5.62525 7.83834 5.62525C8.03797 5.62525 8.21081 5.69828 8.35688 5.84435C8.50782 5.98555 8.58329 6.16083 8.58329 6.37019C8.58329 6.60877 8.48834 6.8157 8.29846 6.99098C8.11344 7.16627 7.8846 7.25391 7.61194 7.25391C7.29059 7.25391 7.00088 7.11514 6.74283 6.83761C6.48478 6.56008 6.35575 6.21439 6.35575 5.80053C6.35575 5.28929 6.51886 4.82431 6.84508 4.40558C7.1713 3.98198 7.63385 3.68254 8.23273 3.50726Z"
                              fill="#211E1D"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Summarise</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-[#211E1D] opacity-10"></div>

                    <div className="px-[5px]">
                      <p className="text-[12px] text-gray-500 pt-[10.4px] px-[10.4px]">
                        Brainstorm
                      </p>
                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M5.53575 9.92743L5.546 9.92389L5.55609 9.91991C5.72082 9.85491 5.84457 9.83301 5.93379 9.83301C6.15964 9.83301 6.36051 9.91767 6.55681 10.1378L6.56224 10.1439L6.56788 10.1498C6.76344 10.3552 6.86492 10.6046 6.86492 10.9316C6.86492 11.2847 6.7454 11.5807 6.49019 11.8438C6.24365 12.0884 5.94347 12.213 5.55497 12.213C5.10803 12.213 4.67138 12.0109 4.23673 11.5043C3.81827 11.0166 3.59961 10.4104 3.59961 9.65273C3.59961 8.99147 3.7452 8.36318 4.04203 7.76354C3.96928 8.03848 3.93252 8.32339 3.93252 8.61743C3.93252 8.81437 3.94527 8.99784 3.97656 9.16084C4.0057 9.3126 4.05641 9.47654 4.15248 9.61938C4.29191 9.84629 4.5305 10.0614 4.8815 10.0614C5.08618 10.0614 5.3121 10.0047 5.53575 9.92743ZM10.7603 6.79043L10.7603 6.79043L10.7603 6.79043ZM13.297 10.1286L13.3026 10.1347L13.3085 10.1406C13.5007 10.3358 13.5996 10.5726 13.5996 10.886C13.5996 11.2453 13.4738 11.5512 13.1986 11.8268L13.1985 11.8268L13.194 11.8315C12.9356 12.0971 12.6265 12.2282 12.2335 12.2282C11.7957 12.2282 11.3685 12.031 10.9436 11.535C10.5358 11.0591 10.3203 10.4587 10.3203 9.69841C10.3203 9.05863 10.4446 8.46 10.695 7.89842C10.6387 8.16188 10.6111 8.4375 10.6111 8.724C10.6111 9.05362 10.6681 9.39103 10.8604 9.6567C11.0031 9.85369 11.2413 10.0766 11.5881 10.0766C11.7923 10.0766 12.0221 10.0038 12.2347 9.91991C12.3864 9.86002 12.5301 9.83301 12.6685 9.83301C12.9003 9.83301 13.1026 9.91765 13.297 10.1286Z"
                              fill="#211E1D"
                              stroke="#211E1D"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Cite</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.60026 11.9333H7.26693M6.60026 8.59993H8.26693M6.60026 5.2666H13.2669M3.9349 11.9333V11.9346L3.93359 11.9346V11.9333H3.9349ZM3.9349 8.59993V8.60127L3.93359 8.60124V8.59993H3.9349ZM3.9349 5.2666V5.26793L3.93359 5.2679V5.2666H3.9349Z"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.4661 11.9702L11.3834 6.97021L9.30078 11.9702M12.633 10.3035H10.1338"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Bullets to text</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-[#211E1D] opacity-10"></div>

                    <div className="px-[5px]">
                      <p className="text-[12px] text-gray-500 pt-[10.4px] px-[10.4px]">
                        Text
                      </p>
                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M3.26758 13.3341H13.9342M3.26758 13.3341V10.6674L10.5133 3.42163L10.5145 3.42049C10.7777 3.15724 10.9096 3.02538 11.0616 2.97599C11.1955 2.93248 11.3397 2.93248 11.4736 2.97599C11.6255 3.02534 11.7572 3.15705 12.0201 3.41993L13.18 4.5798C13.444 4.84381 13.5761 4.97588 13.6255 5.1281C13.669 5.26199 13.669 5.40622 13.6255 5.54012C13.5761 5.69223 13.4442 5.82409 13.1806 6.08773L13.18 6.08829L5.93424 13.334L3.26758 13.3341Z"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Write indepth</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M3.26758 13.3341H13.9342M3.26758 13.3341V10.6674L10.5133 3.42163L10.5145 3.42049C10.7777 3.15724 10.9096 3.02538 11.0616 2.97599C11.1955 2.93248 11.3397 2.93248 11.4736 2.97599C11.6255 3.02534 11.7572 3.15705 12.0201 3.41993L13.18 4.5798C13.444 4.84381 13.5761 4.97588 13.6255 5.1281C13.669 5.26199 13.669 5.40622 13.6255 5.54012C13.5761 5.69223 13.4442 5.82409 13.1806 6.08773L13.18 6.08829L5.93424 13.334L3.26758 13.3341Z"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">
                            Write supporting argument
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M3.26758 13.3341H13.9342M3.26758 13.3341V10.6674L10.5133 3.42163L10.5145 3.42049C10.7777 3.15724 10.9096 3.02538 11.0616 2.97599C11.1955 2.93248 11.3397 2.93248 11.4736 2.97599C11.6255 3.02534 11.7572 3.15705 12.0201 3.41993L13.18 4.5798C13.444 4.84381 13.5761 4.97588 13.6255 5.1281C13.669 5.26199 13.669 5.40622 13.6255 5.54012C13.5761 5.69223 13.4442 5.82409 13.1806 6.08773L13.18 6.08829L5.93424 13.334L3.26758 13.3341Z"
                              stroke="#211E1D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">
                            Write opposing argument
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-[#211E1D] opacity-10"></div>

                    <div className="px-[5px]">
                      <p className="text-[12px] text-gray-500 pt-[10.4px] px-[10.4px]">
                        Personal
                      </p>
                      <div className="flex flex-row items-center gap-1 p-[10.4px]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="17"
                            viewBox="0 0 22 17"
                            fill="none"
                          >
                            <path
                              d="M5.79883 10.6004H10.9988M10.9988 10.6004H16.1988M10.9988 10.6004V15.8004M10.9988 10.6004V5.40039"
                              stroke="#211E1D"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#211E1D]">Create new command</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-[#55B469]  row-span-1 rounded-3xl border-t-2 border-b-4 border-x-2 border-solid border-[#ECE8E7]">
                <div className="p-6">
                  <p className="text-white text-[20px] font-[600]">
                    Submit desired feature
                  </p>
                </div>
                <div className="flex bg-[#FFF] rounded-[20px] h-full justify-center items-center">
                  <div className="flex flex-row bg-[#55B469] w-fit h-fit p-5 rounded-full items-center gap-3 cursor-pointer">
                    <p className="text-white text-[18px] select-none">
                      Send ideas
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle cx="9" cy="9" r="8.5" stroke="white" />
                      <rect
                        x="8.5"
                        y="4.5"
                        width="1"
                        height="9"
                        rx="0.5"
                        fill="white"
                      />
                      <rect
                        x="13.5"
                        y="8.5"
                        width="1"
                        height="9"
                        rx="0.5"
                        transform="rotate(90 13.5 8.5)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

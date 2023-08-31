"use client";

import { useState, useRef, useEffect } from "react";

export default function FeaturesHome() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-48">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-[40px] md:pb-[48px]">
            <p className=" text-[30px] text-[#211E1D] font-bold md:text-[56px] mb-4">
              Explore features
            </p>
            <p className="text-[24px] text-[#211E1D] font-bold ">
              Step into the future of the academic writing.
            </p>
          </div>
          {/* <div className="p-2 w-auto mb-8">
            <ul className="flex grow justify-center flex-wrap items-center gap-8">
              <li>Document AI</li>
              <li>Essay copilot</li>
              <li>Use AI</li>
              <li>Citation</li>
              <li>AI Detector</li>
              <li>Plagiarism Checker</li>
            </ul>
          </div> */}
          <div className="w-full flex-col flex-grow bg-[#ffffff] grid md:grid-cols-2 grid-cols-1 rounded-xl border-t-2 border-r-2 border-l-2 border-gray-300  shadow-md">
            <div className="flex p-8 flex-col justify-center items-start gap-8 flex-1 self-stretch">
              <p className="flex  justify-start text-[36px] font-bold text-[#211E1D] pb-[10px]">
                Never get stuck at writing
                <br /> your essay
              </p>
              <p className="text-gray-700 font-inter text-[20px] font-normal leading-tight tracking-tight">
                Use the intelligent Document Assistant to help write
                <br /> sections and give you feedback
              </p>
              <div className="flex text-white text-[18px] px-4 py-3 items-center gap-2 rounded-full border-t border-r border-b-2 border-l border-[#2D8C41] bg-[#55B469]">
                Try it out
              </div>
            </div>
            <div className="flex p-3 items-start gap-2 flex-1">
              <div className="w-full h-full rounded-[28px] pt-6 pl-6 pb-6 bg-[#f5f4f4] shadow-inner">
                <div className="inline-flex p-5 flex-col items-start gap-5 rounded-l-[19px] bg-gray-100">
                  <div className="w-full flex-1 text-Black font-inter text-[22px] font-bold leading-5">
                    What is global warming?
                  </div>
                  <div className="w-full flex-1 text-Light-Black font-inter text-[14px] font-normal leading-tight tracking-tighter">
                    Since the Industrial Revolution, the global annual
                    temperature has increased in total by a little more than 1
                    degree Celsius, or about 2 degrees Fahrenheit. Between
                    1880—the year that accurate recordkeeping began—and 1980, it
                    rose on average by 0.07 degrees Celsius (0.13 degrees
                    Fahrenheit) every 10 years. Since 1981, however, the rate of
                    increase has more than doubled: For the last 40 years, we’ve
                    seen the global annual temperature rise by 0.18 degrees
                    Celsius, or 0.32 degrees Fahrenheit, per decade.
                  </div>
                  <div className="flex w-full h-7 justify-center items-center gap-8 rounded-l-[8px] bg-[#f6f6f9]" />
                  <div className="flex w-full h-[100px] justify-center items-center gap-8 rounded-l-[16px] bg-[#f6f6f9]" />
                  <div className="inline-flex p-2 align-middle gap-2 border border-solid border-Stroke rounded-[20px] bg-White shadow-md">
                    <div className="flex p-1 items-center gap-1/3 rounded-[10px] text-[10px] text-white border border-[#FF7531] bg-[#EF844F]">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_763_3820)">
                            <path
                              d="M7.66797 5.33301L8.09223 7.90874L10.668 8.33301L8.09223 8.75727L7.66797 11.333L7.2437 8.75727L4.66797 8.33301L7.2437 7.90874L7.66797 5.33301Z"
                              fill="white"
                            />
                            <path
                              d="M4.33333 2.6665L4.66332 4.66985L6.66667 4.99984L4.66332 5.32982L4.33333 7.33317L4.00335 5.32982L2 4.99984L4.00335 4.66985L4.33333 2.6665Z"
                              fill="white"
                            />
                            <path
                              d="M7.66667 1.33301L7.90237 2.76397L9.33333 2.99967L7.90237 3.23538L7.66667 4.66634L7.43096 3.23538L6 2.99967L7.43096 2.76397L7.66667 1.33301Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_763_3820">
                              <rect
                                width="10.6667"
                                height="10.6667"
                                fill="white"
                                transform="translate(0.667969 0.666504)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>Document AI</span>
                    </div>
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

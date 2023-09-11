"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import FeatureImage1 from "@/public/image/feature1.svg";
import FeatureImage2 from "@/public/image/feature2.svg";
import FeatureImage3 from "@/public/image/feature3.svg";
import FeatureImage4 from "@/public/image/feature4.svg";
import FeatureImage5 from "@/public/image/feature5.svg";

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
    <section className="relative lg:px-40 md:px-14 sm:px-6 px-4">
      <div className="w-full">
        <div className="pt-32 sm:pt-40 md:pt-52">
          {/* Section header */}
          <div className="flex flex-col text-center gap-[5] md:gap-[6]  mb-8 sm:mb-12">
            <span className=" font-inter font-semibold text-[28px] sm:text-[40px] md:text-[56px] text-[#211E1D]">
              Explore features
            </span>
            <span className="font-inter font-semibold text-[18px] sm:text-[20px] md:text-[24px] text-[#211E1D]">
              Step into the future of the <br className="block sm:hidden" />
              academic writing.
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full flex-col  flex-grow bg-[#ffffff] rounded-[20px] sm:rounded-[40px] border-t-2 border-r-2 border-l-2 border-b-4 border-b-4 border-solid border-[#ECE8E7] border-Stroke shadow-md grid grid-cols-1 md:grid-cols-2">
              <div className="flex p-4 sm:p-12 md:p-8 flex-col flex-start justify-start items-start gap-8 flex-1 self-stretch">
                <div className="flex flex-col gap-2">
                  <span className="justify-start font-semibold font-inter text-[20px] sm:text-[28px] text-[#211E1D]">
                    Never get stuck at writing your essay
                  </span>
                  <span className="font-normal font-inter text-[#837E7C] leading-[160%] tracking-[0.32px] text-[16px] sm:text-[20px]">
                    Use the intelligent Document Assistant to help write
                    sections and give you feedback
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="font-inter font-normal text-white text-[18px] px-5 py-3 items-center rounded-full border-t border-r border-b-2 border-l border-[#2D8C41] bg-[#55B469]">
                    Try it out
                  </div>
                </div>
              </div>
              <div className="flex px-4 sm:px-12 md:px-3 py-0 md:py-3 items-start gap-2 flex-1">
                <Image
                  alt="FeatureImage1"
                  src={FeatureImage1}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 block md:hidden">
                <div className="text-white text-[16px] flex px-5 py-3 justify-center items-center gap-2 self-stretch text-center rounded-full border-[1px] border-[#2D8C41] border-t-[1px] border-r-[1px] border-b-2 border-l-[1px] bg-[#55B469]">
                  Try it out
                </div>
              </div>
            </div>
            <div className="w-full flex-col  flex-grow bg-[#ffffff] rounded-[20px] sm:rounded-[40px] border-t-2 border-r-2 border-l-2 border-b-4 border-solid border-[#ECE8E7] border-Stroke shadow-md grid grid-cols-1 md:grid-cols-2">
              <div className="flex px-4 sm:px-12 md:px-3 py-0 md:py-3 items-start gap-2 flex-1">
                <Image
                  alt="FeatureImage2"
                  src={FeatureImage2}
                  className="w-full h-full"
                />
              </div>
              <div className="flex p-4 sm:p-12 md:p-8 flex-col flex-start justify-center items-start gap-8 flex-1 self-stretch">
                <div className="flex flex-col gap-2">
                  <span className="justify-start font-semibold font-inter text-[20px] sm:text-[28px] text-[#211E1D]">
                    Your personal essay copilot
                  </span>
                  <span className="font-normal font-inter text-[#837E7C] leading-[160%] tracking-[0.32px] text-[16px] sm:text-[20px]">
                    Elevate your essay writing with an intelligent
                    autopilot that delivers smart suggestions
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="font-inter font-normal text-white text-[18px] px-5 py-3 items-center rounded-full border-t border-r border-b-2 border-l border-[#2D8C41] bg-[#55B469]">
                    Try it out
                  </div>
                </div>
              </div>
              <div className="p-4 block md:hidden">
                <div className="text-white text-[16px] flex px-5 py-3 justify-center items-center gap-2 self-stretch text-center rounded-full border-[1px] border-[#2D8C41] border-t-[1px] border-r-[1px] border-b-2 border-l-[1px] bg-[#55B469]">
                  Try it out
                </div>
              </div>
            </div>
            <div className="w-full flex-col  flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full flex-col  flex-grow bg-[#ffffff] rounded-[20px] sm:rounded-[40px] border-t-2 border-r-2 border-l-2 border-b-4 border-solid border-[#ECE8E7] border-Stroke shadow-md grid grid-cols-1">
                <div className="flex p-4 sm:p-12 md:p-8 flex-col flex-start justify-start items-start gap-8 flex-1 self-stretch">
                  <div className="flex flex-col gap-2">
                    <span className="justify-start font-semibold font-inter text-[20px] sm:text-[28px] text-[#211E1D]">
                      Edit your paper like a pro
                    </span>
                    <span className="font-normal font-inter text-[#837E7C] leading-[160%] tracking-[0.32px] text-[16px] sm:text-[20px]">
                      Utilize AI features including expansion, summarization,
                      and more to refine your essays
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className="font-inter font-normal text-white text-[18px] px-5 py-3 items-center rounded-full border-t border-r border-b-2 border-l border-[#2D8C41] bg-[#55B469]">
                      Try it out
                    </div>
                  </div>
                </div>
                <div className="flex px-4 sm:px-12 md:px-3 py-0 md:py-3 items-start gap-2 flex-1">
                  <Image
                    alt="FeatureImage3"
                    src={FeatureImage3}
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 block md:hidden">
                  <div className="text-white text-[16px] flex px-5 py-3 justify-center items-center gap-2 self-stretch text-center rounded-full border-[1px] border-[#2D8C41] border-t-[1px] border-r-[1px] border-b-2 border-l-[1px] bg-[#55B469]">
                    Try it out
                  </div>
                </div>
              </div>
              <div className="w-full flex-col  flex-grow bg-[#ffffff] rounded-[20px] sm:rounded-[40px] border-t-2 border-r-2 border-l-2 border-b-4 border-solid border-[#ECE8E7] border-Stroke shadow-md grid grid-cols-1">
                <div className="flex p-4 sm:p-12 md:p-8 flex-col flex-start justify-start items-start gap-8 flex-1 self-stretch">
                  <div className="flex flex-col gap-2">
                    <span className="justify-start font-semibold font-inter text-[20px] sm:text-[28px] text-[#211E1D]">
                      Cite your papers
                    </span>
                    <span className="font-normal font-inter text-[#837E7C] leading-[160%] tracking-[0.32px] text-[16px] sm:text-[20px]">
                      Enhance your essays with our super source finding tool
                      powered by{" "}
                      <span className="text-[#55B469]">Sourcely</span>
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className="font-inter font-normal text-white text-[18px] px-5 py-3 items-center rounded-full border-t border-r border-b-2 border-l border-[#2D8C41] bg-[#55B469]">
                      Try it out
                    </div>
                  </div>
                </div>
                <div className="flex px-4 sm:px-12 md:px-3 py-0 md:py-3 items-start gap-2 flex-1">
                  <Image
                    alt="FeatureImage4"
                    src={FeatureImage4}
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 block md:hidden">
                  <div className="text-white text-[16px] flex px-5 py-3 justify-center items-center gap-2 self-stretch text-center rounded-full border-[1px] border-[#2D8C41] border-t-[1px] border-r-[1px] border-b-2 border-l-[1px] bg-[#55B469]">
                    Try it out
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col  flex-grow bg-[#ffffff] rounded-[20px] sm:rounded-[40px] border-t-2 border-r-2 border-l-2 border-b-4 border-solid border-[#ECE8E7] border-Stroke shadow-md grid grid-cols-1 md:grid-cols-2">
              <div className="flex px-4 sm:px-12 md:px-3 py-0 md:py-3 items-start gap-2 flex-1">
                <Image
                  alt="FeatureImage5"
                  src={FeatureImage5}
                  className="w-full h-full"
                />
              </div>
              <div className="flex p-4 sm:p-12 md:p-8 flex-col flex-start justify-center items-start gap-8 flex-1 self-stretch">
                <div className="flex flex-col gap-2">
                  <span className="justify-start font-semibold font-inter text-[20px] sm:text-[28px] text-[#211E1D]">
                    Let Yomu help to avoid AI detectors and plagiarised copy
                  </span>
                  <span className="font-normal font-inter text-[#837E7C] leading-[160%] tracking-[0.32px] text-[16px] sm:text-[20px]">
                    Reduce your chances of receiving plagiarised text with Yomu
                    & get tips on how to rewrite your copy to avoid AI detectors
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="font-inter font-normal text-white text-[18px] px-5 py-3 items-center rounded-full border-t border-r border-b-2 border-l border-[#2D8C41] bg-[#55B469]">
                    Try it out
                  </div>
                </div>
              </div>
              <div className="p-4 block md:hidden">
                <div className="text-white text-[16px] flex px-5 py-3 justify-center items-center gap-2 self-stretch text-center rounded-full border-[1px] border-[#2D8C41] border-t-[1px] border-r-[1px] border-b-2 border-l-[1px] bg-[#55B469]">
                  Try it out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

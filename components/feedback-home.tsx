"use client";
import Image, { StaticImageData } from "next/image";

import Customer1 from "@/public/image/customer1.jpg";
import Customer2 from "@/public/image/customer2.jpg";
import Customer3 from "@/public/image/customer3.jpg";
import Customer4 from "@/public/image/customer4.jpg";
import Customer5 from "@/public/image/customer5.jpg";
import Customer6 from "@/public/image/customer6.jpg";

interface Card {
  header: string;
  name: string;
  university: string;
  avatar: StaticImageData;
}

const cards: Card[] = [
  {
    header: "Lorem ipsum dolor sit amet consectetur",
    name: "Mike Johnson",
    university: "harvard",
    avatar: Customer1,
  },
  {
    header:
      "Ever since I started using Yomu AI, my writing process has transformed completely. The suite of AI writing features Yomu offers, made my work more efficient and effective.",
    name: "Dev Shah",
    university: "lse",
    avatar: Customer2,
  },
  {
    header:
      "Ever since I started using Yomu AI, my writing process has transformed completely. The suite of AI writing features Yomu offers, made my work more efficient and effective.",
    name: "Jenya Armstrong",
    university: "harvard",
    avatar: Customer3,
  },
  {
    header:
      "Ever since I started using Yomu AI, my writing process has transformed completely. The suite of AI writing features Yomu offers, made my work more efficient and effective.",
    name: "Clarissa Jacobs ",
    university: "oxford",
    avatar: Customer4,
  },
  {
    header:
      "Ever since I started using Yomu AI, my writing process has transformed completely. The suite of AI writing features Yomu offers, made my work more efficient and effective.",
    name: "Damon Mikeson",
    university: "nyu",
    avatar: Customer5,
  },
  {
    header:
      "Ever since I started using Yomu AI, my writing process has transformed completely. The suite of AI writing features Yomu offers, made my work more efficient and effective.",
    name: "Miranda Smith",
    university: "oxford",
    avatar: Customer6,
  },
];

export default function FeedbackHome() {
  return (
    <section className="relative lg:px-40 md:px-14 sm:px-6 px-4">
      <div className="w-full">
        <div className="flex flex-col pt-32 sm:pt-40 md:pt-52 pb-32 sm:pb-40 md:pb-52 gap-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <p className=" text-[30px] sm:text-[40px] md:text-[56px] text-[#211E1D] font-semibold">
              Yomu is loved by the users
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-88 h-72 p-6 flex-shrink-0 justify-between items-start border border-gray-300 rounded-[24px] bg-white"
              >
                <span className="self-stretch text-[#191919]  font-inter font-semibold text-[18px] leading-[145%]">
                  {item.header}
                </span>
                <div className="w-full h-72" />
                <div className="flex items-center gap-4 self-stretch">
                  <div
                    className="w-12 h-12 rounded-full"
                    style={{
                      backgroundImage: `url("${item.avatar.src}")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="flex flex-col font-semibold  items-start gap-3">
                    <span className="self-stretch text-[#211E1D] text-[16px]">
                      {item.name}
                    </span>
                    <span className="font-inter text-[14px] text-[#837E7C] inline-flex">
                      Student &nbsp;
                      <p className="text-[#55B469]">@{item.university}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

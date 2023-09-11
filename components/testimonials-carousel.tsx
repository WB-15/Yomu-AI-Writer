"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import UserImage01 from "@/public/images/testimonial-01.jpg";
import UserImage02 from "@/public/images/testimonial-02.jpg";
import UserImage03 from "@/public/images/testimonial-03.jpg";

export default function TestimonialsCarousel() {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [autorotateTiming] = useState<number>(7000);

  interface Item {
    img: StaticImageData;
    alt: string;
    quote: string;
    name: string;
    role: string;
    href: string;
    team: string;
    link: string;
  }

  const items: Item[] = [
    {
      img: UserImage01,
      alt: "Testimonial 01",
      quote:
        "“This AI tool saved me hours of research when I had a 2500-word essay to write and was struggling to find sources. “",
      name: "Dev Shah",
      role: "Student",
      href: "https://www.cgu.edu/",
      team: "@Claremont",
      link: "https://www.cgu.edu/",
    },
    {
      img: UserImage02,
      alt: "Testimonial 02",
      quote:
        "“Sourcely's use of AI impressed me by finding suitable and relevant articles for hard-to-research essay topics.“",
      name: "Greg Sebastian",
      role: "Master student",
      href: "https://www.fing.edu.uy/",
      team: "@UDELAR",
      link: "https://www.fing.edu.uy/",
    },
    {
      img: UserImage03,
      alt: "Testimonial 03",
      quote:
        "“Researching is typically the longest part of essay writing for me, but Sourcely did all the work and saved me time.“",
      name: "Carol Menchac",
      role: "Student",
      href: "https://www.mit.edu/",
      team: "@MIT",
      link: "https://www.mit.edu/",
    },
  ];

  const testimonials = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative lg:px-40 md:px-14 sm:px-6 px-4">
      <div className="w-full flex flex-col gap-8">
        <div className="text-center">
          <p className="font-inter font-bold text-[#211E1D] text-[18px] sm:text-[24px] mb-3">
            Trusted by universities and
            <br className="block sm:hidden" /> academic
            <br className="hidden sm:block" />
            labs all over the world
          </p>
          <p
            className="font-inter font-normal text-[10px] sm:text-[14px] text-gray-600"
            data-aos="zoom-y-out"
          >
            Yomu has helped write essays, research papers, and
            <br className="block sm:hidden" /> grants for students{" "}
            <br className="hidden sm:block" /> and academics all over the world
          </p>
        </div>

        {/* Items */}
        <div className="flex flex-row w-[calc(100%-10px)] sm:w-[calc(100%-40px)] gap-8 sm:gap-12 items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src={"/images/U2.webp"}
              width="111"
              height="31"
              alt="aston logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/U3.webp"}
              width="159"
              height="66"
              alt="cambridge logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/U1.webp"}
              width="110"
              height="39"
              alt="harvard logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/U5.webp"}
              width="56"
              height="56"
              alt="melbourne logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/U4.webp"}
              width="77"
              height="40"
              alt="mit logo"
            />
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={"/images/U6.webp"}
              width="60"
              height="60"
              alt="standford logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative">
      {/* Social icons illustrations */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-1 md:py-2">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[24px] font-bold">
              Trusted by universities and academic
              <br /> labs all over the world
            </span>
            <p className="text-[15px] mt-4 text-gray-600" data-aos="zoom-y-out">
              Yomu has helped write essays, research papers, and grants for
              students
              <br /> and academics all over the world
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-6">
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                src={"/images/U2.webp"}
                width="153"
                height="31"
                alt="aston logo"
              />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                src={"/images/U3.webp"}
                width="190"
                height="40"
                alt="cambridge logo"
              />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                src={"/images/U1.webp"}
                width="160"
                height="39"
                alt="harvard logo"
              />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                src={"/images/U5.webp"}
                width="80"
                height="44"
                alt="melbourne logo"
              />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                src={"/images/U4.webp"}
                width="77"
                height="40"
                alt="mit logo"
              />
            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                src={"/images/U6.webp"}
                width="80"
                height="44"
                alt="standford logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import HeroImage from "@/public/image/HomeImage.png";
import Background from "@/public/image/Background.png";

export default function HeroHome() {
  return (
    <section
      className="relative"
      style={{
        objectFit: "contain",
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%), url("${Background.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-10 flex flex-col  md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <p
              className="text-[#211E1D] font-semibold leading-tighter tracking-tighter mb-6 text-[40px] md:text-[64px]"
              data-aos="zoom-y-out"
            >
              <span>It’s time to </span>
              <span>write</span>
              <span className="absolute top-neg-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="55"
                  viewBox="0 0 49 63"
                  fill="none"
                >
                  <path
                    d="M21.2543 44.408C30.4676 38.0088 31.4132 33.7039 32.1783 31.0327C32.6746 29.3002 33.0526 27.5524 33.4194 25.7915C33.4294 25.7438 33.453 25.6002 33.453 25.649C33.453 26.9806 33.3369 28.3632 33.5368 29.6826C34.0379 32.9893 35.9545 36.3046 37.8136 39.0243C39.1843 41.0296 40.8507 42.6295 42.9541 43.8462C43.6598 44.2544 44.3888 44.603 45.1428 44.9112C45.3364 44.9903 45.8149 44.9672 45.7214 45.1543C45.6743 45.2486 43.6874 45.882 43.6166 45.9175C41.5765 46.9375 39.4567 48.1181 37.7633 49.6659C34.91 52.2738 33.6324 56.1897 32.5473 59.7876C32.348 60.4486 32.3502 59.3681 32.3293 59.2341C32.0375 57.3607 31.2579 55.6928 30.4676 53.9846C26.3852 47.0492 26.8157 48.3406 22.2774 45.8839C21.9122 45.5187 21.5654 45.139 21.1034 44.8944C20.9336 44.8045 19.0668 44.8944 20.6505 44.559"
                    stroke="#EF844F"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.42289 24.3047C9.0186 22.7764 10.2125 21.0066 11.1665 19.0127C11.5889 18.1302 11.9375 17.2152 12.3052 16.3094C12.3486 16.2026 12.4033 15.9852 12.51 15.8999C13.018 15.4934 12.624 14.4524 13.108 16.0637C14.1286 19.4614 15.8653 22.6067 18.4163 25.0993C18.5178 25.1984 20.6406 26.7764 20.3168 26.8195C19.6442 26.9092 18.9684 27.7164 18.5146 28.1384C17.582 29.0058 16.7109 29.9276 15.8605 30.8745C14.4428 32.4529 13.4083 34.3271 12.3134 36.1336C12.19 36.3373 12.1623 36.941 11.9939 36.7726C11.9733 36.752 11.9939 36.4654 11.9939 36.4613C11.9939 35.9598 11.7861 35.3474 11.6335 34.9049C10.5956 31.896 9.03196 29.0389 6.71021 26.8277C6.1151 26.261 5.47387 25.8199 4.75237 25.4351C4.65134 25.3813 4.10834 25.1935 4.00691 25.0583C3.96121 24.9974 4.15431 25.0199 4.22809 25.001C4.90053 24.8285 5.56937 24.6025 6.21051 24.3374C6.84933 24.0733 7.38168 23.7561 7.86525 23.2725"
                    stroke="#EF844F"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27.5685 5.78012C27.5685 7.7273 26.8082 8.98899 25.222 10.0776C24.8812 10.3114 22.7427 11.7678 22.9564 11.7678C25.4786 11.7678 27.0598 12.934 28.998 14.42C29.5218 14.8216 29.7551 15.3498 30.0499 15.9394C30.187 16.2136 30.0859 16.5649 30.2387 16.1372C30.7676 14.6562 31.9602 12.9058 33.2685 12.0195C33.8968 11.5939 34.5839 11.0955 35.3003 10.8328C35.442 10.7808 35.8868 10.7137 35.4981 10.5091C35.0743 10.286 34.626 10.2598 34.2035 9.98767C32.9924 9.20767 31.6735 8.51937 30.5893 7.56024C29.6904 6.76504 28.8792 5.8084 28.036 4.95299C27.6922 4.60416 27.5685 4.45857 27.5685 4"
                    stroke="#EF844F"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br /> your <span className="text-[#55B469]">essay faster</span>
            </p>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-[24px] text-[#211E1D] mb-8 font-semibold"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Transform your academic life. Save time and write superior
                <br /> papers and essays using Yomu AI
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn px-7 py-5 text-white text-18 bg-[#55B469] border-t-[1px] border-r-[1px] border-b-[2px] border-l-[1px] border-[#2D8C41] rounded-full hover:bg-[#43c960] w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start writing for free
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full flex justify-center">
            <Image alt="HomeImage" src={HeroImage}></Image>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import HeroImage from "@/public/image/HomeImage.png";
import Background from "@/public/image/Background.png";

export default function FeedbackHome() {
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
        <div className="pt-12 md:pt-20 pb-12 md:pb-20 gap-12">
          <div className="text-center pb-12 md:pb-16">
            <div
              className="text-[#211E1D] font-semibold leading-tighter tracking-tighter text-[40px] md:text-[64px] inline-flex"
              data-aos="zoom-y-out"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="55"
                  viewBox="0 0 49 63"
                  fill="none"
                >
                  <path
                    d="M21.2543 44.4079C30.4676 38.0087 31.4132 33.7038 32.1783 31.0326C32.6746 29.3001 33.0526 27.5523 33.4194 25.7915C33.4294 25.7437 33.453 25.6001 33.453 25.6489C33.453 26.9805 33.3369 28.3631 33.5368 29.6825C34.0379 32.9892 35.9545 36.3045 37.8136 39.0242C39.1843 41.0295 40.8507 42.6294 42.9541 43.8461C43.6598 44.2543 44.3888 44.6029 45.1428 44.9111C45.3364 44.9902 45.8149 44.9671 45.7214 45.1543C45.6743 45.2485 43.6874 45.8819 43.6166 45.9174C41.5765 46.9374 39.4567 48.118 37.7633 49.6658C34.91 52.2737 33.6324 56.1896 32.5473 59.7875C32.348 60.4485 32.3502 59.368 32.3293 59.234C32.0375 57.3606 31.2579 55.6928 30.4676 53.9845C26.3852 47.0491 26.8157 48.3405 22.2774 45.8838C21.9122 45.5186 21.5654 45.1389 21.1034 44.8943C20.9336 44.8044 19.0668 44.8943 20.6505 44.5589"
                    stroke="#55B469"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.42289 24.3048C9.0186 22.7765 10.2125 21.0067 11.1665 19.0128C11.5889 18.1303 11.9375 17.2153 12.3052 16.3095C12.3486 16.2027 12.4033 15.9853 12.51 15.8999C13.018 15.4935 12.624 14.4525 13.108 16.0638C14.1286 19.4615 15.8653 22.6068 18.4163 25.0994C18.5178 25.1985 20.6406 26.7765 20.3168 26.8196C19.6442 26.9093 18.9684 27.7165 18.5146 28.1385C17.582 29.0059 16.7109 29.9277 15.8605 30.8746C14.4428 32.453 13.4083 34.3272 12.3134 36.1337C12.19 36.3374 12.1623 36.9411 11.9939 36.7727C11.9733 36.7521 11.9939 36.4655 11.9939 36.4614C11.9939 35.9599 11.7861 35.3475 11.6335 34.905C10.5956 31.8961 9.03196 29.039 6.71021 26.8278C6.1151 26.2611 5.47387 25.82 4.75237 25.4352C4.65134 25.3813 4.10834 25.1936 4.00691 25.0584C3.96121 24.9975 4.15431 25.02 4.22809 25.0011C4.90053 24.8286 5.56937 24.6026 6.21051 24.3375C6.84933 24.0734 7.38168 23.7562 7.86525 23.2726"
                    stroke="#55B469"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27.5685 5.78012C27.5685 7.7273 26.8082 8.98899 25.222 10.0776C24.8812 10.3114 22.7427 11.7678 22.9564 11.7678C25.4786 11.7678 27.0598 12.934 28.998 14.42C29.5218 14.8216 29.7551 15.3498 30.0499 15.9394C30.187 16.2136 30.0859 16.5649 30.2387 16.1372C30.7676 14.6562 31.9602 12.9058 33.2685 12.0195C33.8968 11.5939 34.5839 11.0955 35.3003 10.8328C35.442 10.7808 35.8868 10.7137 35.4981 10.5091C35.0743 10.286 34.626 10.2598 34.2035 9.98767C32.9924 9.20767 31.6735 8.51937 30.5893 7.56024C29.6904 6.76504 28.8792 5.8084 28.036 4.95299C27.6922 4.60416 27.5685 4.45857 27.5685 4"
                    stroke="#55B469"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[#55B469]">Power </span>
              <span>your </span>
            </div>
            <br />
            <div
              className="text-[#211E1D] font-semibold leading-tighter tracking-tighter mb-6 text-[40px] md:text-[64px] inline-flex"
              data-aos="zoom-y-out"
            >
              <span>
                {" "}
                academic writing
                <br /> with Yomu AI
              </span>
            </div>

            <div className="max-w-3xl mx-auto">
              <p
                className="text-[24px] text-[#211E1D] mb-8 font-semibold"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Save time writing your next essay
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
          <div className="w-full flex justify-center">
            <Image alt="HomeImage" src={HeroImage}></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

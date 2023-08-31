export default function ReviewRoadMap() {
  return (
    <section className="relative">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-48 gap-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className=" text-[30px] text-[#211E1D] font-bold md:text-[56px] mb-4">
              We are not stopping here, review our roadmap
            </p>
          </div>
          <div className=" flex flex-col w-[full] h-[400px] rounded-[28px] border border-solid border-[2px 2px 4px 2px] border-[#ECE8E7] bg-[#FBFAF8] gap-6">
            <div className=" flex justify-start items-start flex-row px-4 pt-4 pb-4 w-[100%] h-[16px] top-[16px] left-[20px]">
              <p className="w-1/2 text-left font-inter font-medium text-[16px] tracking-[-1%] text-[#837E7C]">
                2023
              </p>
              <p className="w-1/2 text-right font-inter font-medium text-[16px] tracking-[-1%] text-[#837E7C]">
                2024
              </p>
            </div>
            <div className=" flex h-full justify-between flex-row items-center border-t-[2px] border-t-[#ECE8E7]">
              <div className=" w-1/4 h-full border-r-[#ECE8E7] border-r-[2px]"></div>
              <div className=" w-1/4 h-full border-r-[#ECE8E7] border-r-[2px]"></div>
              <div className=" w-1/4 h-full border-r-[#ECE8E7] border-r-[2px]"></div>
              <div className=" w-1/4 h-full"></div>
            </div>

            <div className=" absolute">
              <div className=" flex items-center justify-center absolute w-[235px] h-[60px] top-[103px] left-[20px] rounded-[100px] border-[1px, 1px, 2px, 1px] p-[20px] gap-[10x] bg-[#55B469] border-[#2D8C41]">
                <p className=" font-inter w-[195px] h-[20px] font-medium text-[20px] leading-[20px] ab text-white tracking-[-1%]">
                  Roadmap Item name
                </p>
              </div>
              <div className=" flex items-start justify-start absolute w-[673px] h-[60px] top-[103px] left-[296px] rounded-[100px] border-[1px, 1px, 2px, 1px] p-[20px] gap-[10px] bg-[#F6C24B] border-[#BA860F]">
                <p className=" font-inter w-[195px] h-[20px] font-medium text-[20px] leading-[20px] ab text-white tracking-[-1%]">
                  Roadmap Item name
                </p>
              </div>
              <div className=" flex items-start justify-start absolute w-[400px] h-[60px] top-[195px] left-[296px] rounded-[100px] border-[1px, 1px, 2px, 1px] p-[20px] gap-[10px] bg-[#EF844F] border-[#CF7345]">
                <p className=" font-inter w-[195px] h-[20px] font-medium text-[20px] leading-[20px] ab text-white tracking-[-1%]">
                  Roadmap Item name
                </p>
              </div>
              <div className=" flex items-start justify-start absolute w-[240px] h-[60px] top-[287px] left-[574px] rounded-[100px] border-[1px, 1px, 2px, 1px] p-[20px] gap-[10px] bg-[#81A2E7] border-[#3B5CA1]">
                <p className=" font-inter w-[195px] h-[20px] font-medium text-[20px] leading-[20px] ab text-white tracking-[-1%]">
                  Roadmap Item name
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const QA = [
  {
    question: "Question1",
    answer:
      "Lorem1 ipsum dolor sit amet consectetur. Nibh mauris ornare sed nunc neque nibh vivamus massa pellentesque. Volutpat rhoncus habitant orci fusce vulputate. Pretium nulla ut dolor nisl mattis. Morbi sollicitudin a consectetur cras quam nec. Quam amet nunc ut eu. Id lacus cras imperdiet pulvinar interdum viverra. Elit dictum pellentesque eget dolor vulputate velit. Urna id dolor id aliquet. Mollis amet augue sit consectetur. Dignissim nibh feugiat molestie nibh quam pellentesque morbi eu. Lectus egestas nisl faucibus sit arcu et at. Mollis augue augue ipsum arcu augue metus ac turpis. Ipsum tellus in dolor facilisis non quis lectus nunc.",
  },
  {
    question: "Question2",
    answer:
      "Lorem2 ipsum dolor sit amet consectetur. Nibh mauris ornare sed nunc neque nibh vivamus massa pellentesque. Volutpat rhoncus habitant orci fusce vulputate. Pretium nulla ut dolor nisl mattis. Morbi sollicitudin a consectetur cras quam nec. Quam amet nunc ut eu. Id lacus cras imperdiet pulvinar interdum viverra. Elit dictum pellentesque eget dolor vulputate velit. Urna id dolor id aliquet. Mollis amet augue sit consectetur. Dignissim nibh feugiat molestie nibh quam pellentesque morbi eu. Lectus egestas nisl faucibus sit arcu et at. Mollis augue augue ipsum arcu augue metus ac turpis. Ipsum tellus in dolor facilisis non quis lectus nunc.",
  },
  {
    question: "Question3",
    answer:
      "Lorem3 ipsum dolor sit amet consectetur. Nibh mauris ornare sed nunc neque nibh vivamus massa pellentesque. Volutpat rhoncus habitant orci fusce vulputate. Pretium nulla ut dolor nisl mattis. Morbi sollicitudin a consectetur cras quam nec. Quam amet nunc ut eu. Id lacus cras imperdiet pulvinar interdum viverra. Elit dictum pellentesque eget dolor vulputate velit. Urna id dolor id aliquet. Mollis amet augue sit consectetur. Dignissim nibh feugiat molestie nibh quam pellentesque morbi eu. Lectus egestas nisl faucibus sit arcu et at. Mollis augue augue ipsum arcu augue metus ac turpis. Ipsum tellus in dolor facilisis non quis lectus nunc.",
  },
  {
    question: "Question4",
    answer:
      "Lorem4 ipsum dolor sit amet consectetur. Nibh mauris ornare sed nunc neque nibh vivamus massa pellentesque. Volutpat rhoncus habitant orci fusce vulputate. Pretium nulla ut dolor nisl mattis. Morbi sollicitudin a consectetur cras quam nec. Quam amet nunc ut eu. Id lacus cras imperdiet pulvinar interdum viverra. Elit dictum pellentesque eget dolor vulputate velit. Urna id dolor id aliquet. Mollis amet augue sit consectetur. Dignissim nibh feugiat molestie nibh quam pellentesque morbi eu. Lectus egestas nisl faucibus sit arcu et at. Mollis augue augue ipsum arcu augue metus ac turpis. Ipsum tellus in dolor facilisis non quis lectus nunc.",
  },
  {
    question: "Question5",
    answer:
      "Lorem5 ipsum dolor sit amet consectetur. Nibh mauris ornare sed nunc neque nibh vivamus massa pellentesque. Volutpat rhoncus habitant orci fusce vulputate. Pretium nulla ut dolor nisl mattis. Morbi sollicitudin a consectetur cras quam nec. Quam amet nunc ut eu. Id lacus cras imperdiet pulvinar interdum viverra. Elit dictum pellentesque eget dolor vulputate velit. Urna id dolor id aliquet. Mollis amet augue sit consectetur. Dignissim nibh feugiat molestie nibh quam pellentesque morbi eu. Lectus egestas nisl faucibus sit arcu et at. Mollis augue augue ipsum arcu augue metus ac turpis. Ipsum tellus in dolor facilisis non quis lectus nunc.",
  },
];

export default function FreqQuestion() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <section className="relative">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-48 pb-12 md:pb-48">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-[40px] md:pb-[48px]">
            <p className=" text-[30px] text-[#211E1D] font-bold md:text-[56px] mb-4">
              Frequently asked questions
            </p>
          </div>
          <div className="w-full flex-col flex-grow">
            {QA.map((val: any, index: any) => (
              <div key={index}>
                <Accordion
                  open={open === index + 1}
                  className="mb-2 rounded-[28px] border border-blue-gray-100 px-4"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index + 1)}
                    className="border-b-0 transition-colors text-black-500 text-[24px]"
                  >
                    <div className="flex justify-between w-full">
                      <div>
                        <p className=" font-inter font-semibold text-[20px] md:text-[24px] tracking-[-1%] leading-[24px]">
                          {val.question}
                        </p>
                      </div>
                      <div>
                        {open === index + 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 16L12 9L19 16"
                              stroke="#211E1D"
                              strokeWidth="2.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M19 9L12 16L5 9"
                              stroke="#211E1D"
                              strokeWidth="2.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="pt-0 font-normal text-[16px] md:text-[20px] w-full gap-[16px]">
                    {val.answer}
                  </AccordionBody>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

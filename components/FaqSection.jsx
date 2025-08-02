"use client";

import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SkillOrbitX?",
      answer:
        "SkillOrbitX is a platform offering internships, skill training, and project opportunities for students.",
    },
    {
      question: "How can I apply for an internship?",
      answer:
        "You can apply through the official SkillOrbitX website or the internship link shared by the team.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, you will receive a certificate after the successful completion of your internship or project.",
    },
    {
      question: "Is the program paid or free?",
      answer:
        "Most of the programs are free, but some might include minimal charges for resources or certification.",
    },
  ];

  return (
    <>
      <section className="faq-section h-auto pb-4 md:pb-0 bg-[#041119]">
        <div className="h-auto xl:min-h-[10vh] text-center md:text-left md:ml-[32%]">
          <h1 className="text-2xl md:text-6xl pt-4 font-semibold tracking-tighter">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="h-auto xl:min-h-[80vh] flex flex-col w-full md:flex-row">
          <div className="w-full md:w-[40%] mx-auto h-full flex justify-center items-center">
            <img
              className="h-60 w-60 md:w-80 lg:w-120 md:h-80 lg:h-120"
              src="./images/faq.png"
              alt="studentimage"
            />
          </div>
          <div className="w-full md:w-[50%] xl:w-[60%] mx-auto h-full text-black">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="w-[90vw] md:w-[50vw] mt-6 lg:mt-12 mb-2 md:mb-4 px-4 md:px-6 lg:px-10 py-2 md:py-2 lg:py-4 rounded-md mx-auto bg-[#F3E9CE] cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">{item.question}</h3>
                  <img
                    src={
                      openIndex === index
                        ? "/components/rightarrow.png"
                        : "/components/rightarrow.png"
                    }
                    alt="arrow"
                    className="w-4 h-4 ml-2 transition-transform duration-300"
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-xl">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;

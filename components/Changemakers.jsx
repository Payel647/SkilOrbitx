"use client";
import React from "react";
import Image from "next/image";

const feedbacks = [
  {
    stars: 5,
    text: "only for city kids—now I know better.",
    name: "Asha L.",
  },
  {
    stars: 5,
    text: "love this",
    name: "",
  },
  {
    stars: 5,
    text: "ohhhmygoshthesestudentsarefire...",
    name: "",
  },
];

const Changemaker = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Feedback & Image */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-8">
          {/* Feedback List */}
          <div className="w-full md:w-1/2 h-[250px] overflow-hidden relative">
            <div className="animate-scrollFeedback space-y-6 absolute top-0 left-0 w-full">
              {feedbacks.concat(feedbacks).map((fb, idx) => (
                <div
                  key={idx}
                  className="bg-[#FF7F11] text-black p-4 rounded-md shadow-lg w-full"
                >
                  <p className="text-xl mb-2">{"★".repeat(fb.stars)}</p>
                  <p className="font-semibold">{fb.text}</p>
                  {fb.name && <p className="text-sm mt-1">— {fb.name}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Hear From Our{" "}
              <span className="italic text-[#90E0EF]">
                <br />
                Changemakers
              </span>
            </h2>
            <Image
              src="/images/grad.png"
              alt="Changemaker"
              width={400}
              height={267}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Changemaker;

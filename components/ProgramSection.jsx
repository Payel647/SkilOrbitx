"use client"; 
import { useEffect, useState } from "react";
import Image from "next/image";

const programs = [
  {
    title: "LaunchDeck",
    subtitle: "Dropping soon!!",
    img: "/images/lunchDeck.png",
  
  },
  {
    title: "Path Mentor",
    subtitle: "Dropping soon!!",
    img: "/images/pathMentor.png",
  },
  {
    title: "LearnLab",
    subtitle: "Learn more",
    img: "/images/learnlab.png",
  },
  {
    title: "SkillCircle",
    subtitle: "Dropping soon!!",
    img: "/images/skilcircle.png",
  },
  {
    title: "Vertical 5",
    subtitle: "Dropping soon!!",
    img: null,
  },
];

const Programs = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind md breakpoint
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <section className="bg-white py-2 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center text-black mb-40">
        Our Programs
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 ">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <ProgramCard {...programs[0]} />
          <ProgramCard {...programs[1]} />
        </div>

        {/* Center LearnLab Card — conditional large */}
        <div className="flex justify-center">
          <ProgramCard {...programs[2]} large={isDesktop} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <ProgramCard {...programs[3]} />
          <ProgramCard {...programs[4]} />
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, subtitle, img, large }) => {
  return (
    <div
      className={`bg-black text-white rounded-2xl shadow-xl flex flex-col justify-start p-6  relative overflow-hidden ${
        large ? "w-[320px] h-[340px]" : "w-[260px] h-[150px]"
      }`}
    >
      <div className="text-xl font-semibold">{title}</div>
      <div className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-md mt-2 w-max">
        {subtitle}
      </div>
      {img && (
        <div className="absolute bottom-4 right-4">
          <Image
            src={img}
            alt={title}
            width={large ? 180 : 80}
            height={large ? 40 : 80}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Programs;

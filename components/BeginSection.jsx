import React from "react";

const BeginSection = () => {
  return (
    <>
      <div className="bg-white h-6 md:h-10 w-full"></div>
      <section className="bg-white w-full h-auto">
        <div className="container bg-[#041119] drop-shadow-xl drop-shadow-black/90 w-[90vw] h-auto pb-4 md:pb-0 md:h-[52vh] lg:h-[44vh] mx-auto rounded-4xl md:rounded-[100px]">
          <h1 className="text-center text-white text-2xl md:text-4xl font-semibold pt-6 md:pt-6 lg:pt-8">
            Ready to Begin Your Journey?
          </h1>
          <p className="hidden md:block text-xl text-white lg:text-2xl w-[80%] mx-auto pt-4 lg:pt-6 text-center">
            Join thousands of students who are building their future with
            SkillOrbitX. Take the first step today. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora laudantium eius, recusandae
            dignissimos doloremque blanditiis quae veritatis labore similique
            itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, saepe.
          </p>
          <p className="md:hidden text-2xl text-white w-[80%] mx-auto pt-4 text-center">
            Join thousands of students who are building their future with
            SkillOrbitX.</p>

          <button className="bg-white text-[#1042DF] font-semibold px-6 py-2 rounded-full mt-6 md:mt-8 mx-auto block">Register as a Student</button>
        </div>
        <div className="bg-white h-10 md:h-20 w-full"></div>
        <div className="bg-black h-0.5 w-[90vw] mx-auto"></div>
        <div className="mt-4 flex justify-center items-center gap-6">
          <div className="h-10 w-10 lg:w-14 lg:h-14 border-2 border-black rounded-full"></div>
          <div className="h-10 w-10 lg:w-14 lg:h-14 border-2 border-black rounded-full"></div>
          <div className="h-10 w-10 lg:w-14 lg:h-14 border-2 border-black rounded-full"></div>
        </div>
        <div className="bg-white h-6 md:h-10 w-full"></div>
      </section>
    </>
  );
};

export default BeginSection;

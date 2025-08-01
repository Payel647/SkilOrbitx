import React from 'react';

const programs = [
  {
    title: 'LaunchDeck',
    status: 'Dropping soon!',
    image: '/images/lunchDeck.png', 
  },
  {
    title: 'LearnLab',
    status: 'Learn more',
    image: '/images/learnlab.png', 
  },
  {
    title: 'SkillCircle',
    status: 'Dropping soon!',
    image: '/images/skilcircle.png',
  },
  {
    title: 'Path Mentor',
    status: 'Dropping soon!',
    image: '/images/pathMentor.png',
  },
  {
    title: 'Vertical 5',
    status: 'Dropping soon!',
  },
];

const ProgramSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        Our Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#0D0D0D] text-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-[1.03] transition-transform"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{program.title}</h3>
              <span className="text-sm bg-white text-black rounded-full px-3 py-1 font-medium">
                {program.status}
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center mt-4">
              <img
                src={program.image}
                className="h-32 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;

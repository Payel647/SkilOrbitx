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
     <section className="bg-white py-8 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        Our Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#0D0D0D] text-white rounded-xl shadow-xl hover:scale-[1.03] transition-transform overflow-hidden flex flex-col"
          >
            {/* Image */}
            {program.image && (
              <div className="w-full h-48 bg-[#1a1a1a] flex items-center justify-center p-4">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full object-contain"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
              <div className="mt-auto">
                <span className="inline-block bg-white text-black text-sm font-medium px-3 py-1 rounded-full">
                  {program.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;

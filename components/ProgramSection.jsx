const programs = [
  {
    title: "LaunchDeck",
    status: "Dropping soon!!",
    image: "/images/lunchdeck.png",
    align: "right",
  },
  {
    title: "LearnLab",
    status: "Learn more",
    image: "/images/learnlab.png",
    align: "center",
  },
  {
    title: "SkillCircle",
    status: "Dropping soon!!",
    image: "/images/skillcircle.png",
    align: "right",
  },
  {
    title: "Path Mentor",
    status: "Dropping soon!!",
    image: "/images/pathmentor.png",
    align: "right",
  },
  {
    title: "Vertical 5",
    status: "Dropping soon!!",
    image: "",
    align: "center",
  },
];

export default function ProgramsSection() {
  return (
    <div className="py-10 px-4 sm:px-10 bg-white text-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Programs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {programs.map((program, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] min-h-[180px] bg-[#0D0D0D] text-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{program.title}</h3>

              <span className="bg-white text-black px-3 py-1 text-sm rounded-full w-fit font-medium">
                {program.status}
              </span>
            </div>

            {program.image && (
              <div
                className={`mt-4 flex ${
                  program.align === "center"
                    ? "justify-center"
                    : "justify-end"
                }`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-24 object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

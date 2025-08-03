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
    title: "Path Mentor",
    subtitle: "Dropping soon!!",
    img: "/images/pathMentor.png",
  },
  {
    title: "Vertical 5",
    subtitle: "Dropping soon!!",
  },
];

export default function Programs() {
  return (
    <div className="py-12 px-4 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        {/* LaunchDeck */}
        <div className="min-h-[260px] bg-[#0F172A] text-white rounded-2xl shadow-md p-6 flex flex-col justify-between relative">
          <div>
            <h3 className="text-xl font-semibold">LaunchDeck</h3>
            <span className="bg-[#fef3c7] text-black text-sm rounded-md px-2 py-1 inline-block mt-2">
              Dropping soon!!
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <Image
              src="/images/lunchdeck.png"
              alt="LaunchDeck"
              width={120}
              height={80}
            />
          </div>
        </div>

        {/* LearnLab - spans 2 rows */}
        <div className="row-span-2 bg-[#0F172A] text-white rounded-2xl shadow-md p-6 flex flex-col justify-between relative h-full">
          <div>
            <h3 className="text-xl font-semibold">LearnLab</h3>
            <span className="bg-white text-black text-sm rounded-md px-3 py-1 inline-block mt-2">
              Learn more
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <Image
              src="/images/learnlab.png"
              alt="LearnLab"
              width={200}
              height={400}
            />
          </div>
        </div>

        {/* SkillCircle */}
        <div className="bg-[#0F172A] text-white rounded-2xl shadow-md p-6 flex flex-col justify-between relative h-full">
          <div>
            <h3 className="text-xl font-semibold">SkillCircle</h3>
            <span className="bg-[#fef3c7] text-black text-sm rounded-md px-2 py-1 inline-block mt-2">
              Dropping soon!!
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <Image
              src="/images/skilcircle.png"
              alt="SkillCircle"
              width={120}
              height={80}
            />
          </div>
        </div>

        {/* Path Mentor */}
        <div className="bg-[#0F172A] text-white rounded-2xl shadow-md p-6 flex flex-col justify-between relative h-full">
          <div>
            <h3 className="text-xl font-semibold">Path Mentor</h3>
            <span className="bg-[#fef3c7] text-black text-sm rounded-md px-2 py-1 inline-block mt-2">
              Dropping soon!!
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <Image
              src="/images/pathMentor.png"
              alt="Path Mentor"
              width={120}
              height={80}
            />
          </div>
        </div>

        {/* Vertical 5 */}
        <div className="bg-[#0F172A] text-white rounded-2xl shadow-md p-6 flex flex-col justify-between relative h-full">
          <div>
            <h3 className="text-xl font-semibold">Vertical 5</h3>
            <span className="bg-[#fef3c7] text-black text-sm rounded-md px-2 py-1 inline-block mt-2">
              Dropping soon!!
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
          </div>
        </div>
      </div>
    </div>
  );
}

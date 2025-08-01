export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.png" 
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Empowering Underserved Students to Lead and Build the Future Before Graduation.
        </h1>
        <p className="mb-6 text-lg text-gray-100">
         Empowering students from Tier-2, Tier-3, and rural regions with world-class learning, mentorship, and opportunities to become future builders and leaders.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-[30px] text-white font-medium transition">
          Explore Program
        </button>
      </div>
    </section>
  );
}

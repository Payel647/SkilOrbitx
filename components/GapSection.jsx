import React from 'react';

const GapSection = () => {
  return (
   <section className="bg-white px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-snug">
    The Gap We're <br />
    <span className="text-4xl md:text-5xl font-normal italic font-[cursive] text-black">
      Bridging
    </span>
  </h2>

  <div className="mt-12 grid md:grid-cols-3 gap-10 text-center md:text-left max-w-6xl mx-auto">
    <div>
      <h3 className="font-bold text-lg text-gray-900">Geographic Limitations</h3>
      <p className="text-gray-600 mt-2">
        Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind
      </p>
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-900">Outdated Education</h3>
      <p className="text-gray-600 mt-2">
        Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind
      </p>
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-900">Limited Networks</h3>
      <p className="text-gray-600 mt-2">
        Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind
      </p>
    </div>
  </div>
</section>

  );
};

export default GapSection;

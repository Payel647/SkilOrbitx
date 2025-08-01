import React from 'react';

const GapSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-3xl font-bold text-center">The Gap We&apos;re <span className="text-black/80">Bridging</span></h2>

      <div className="mt-10 grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg">Geographic Limitations</h3>
          <p className="text-sm text-gray-600 mt-2">
           Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Outdated Education</h3>
          <p className="text-sm text-gray-600 mt-2">
            Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Limited Networks</h3>
          <p className="text-sm text-gray-600 mt-2">
            Quality education and opportunities are concentrated in metro cities, leaving talented students in Tier-2/3 cities and rural areas behind
          </p>
        </div>
      </div>
    </section>
  );
};

export default GapSection;

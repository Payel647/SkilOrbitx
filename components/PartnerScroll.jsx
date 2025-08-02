"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PartnerScroll = () => {
  const controls = useAnimation();

  const partners = [
    { id: 1, name: "Partner 1", color: "#FF6B6B" },
    { id: 2, name: "Partner 2", color: "#6BCB77" },
    { id: 3, name: "Partner 3", color: "#4D96FF" },
    { id: 4, name: "Partner 4", color: "#FFD93D" },
    { id: 5, name: "Partner 5", color: "#FF6F91" },
    { id: 6, name: "Partner 6", color: "#845EC2" },
    { id: 7, name: "Partner 7", color: "#2C73D2" },
    { id: 8, name: "Partner 8", color: "#00C9A7" },
    { id: 9, name: "Partner 9", color: "#F9F871" },
    { id: 10, name: "Partner 10", color: "#F56666" },
  ];

  // Animation Sequence
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          x: "-30%",
          opacity: 1,
          transition: { duration: 2, ease: "linear" },
        });

        await controls.start({
          opacity: 0,
          transition: { duration: 0.6 },
        });

        controls.set({ x: "0%" });

        await controls.start({
          opacity: 1,
          transition: { duration: 0.6 },
        });
      }
    };

    sequence();
  }, [controls]);

  return (
    <div className="bg-white w-full h-auto pb-4 md:pb-0 md:h-[34vh] lg:h-[28vh] xl:h-[30vh] overflow-hidden">
      <h1 className="text-3xl md:text-4xl text-black font-semibold text-center pt-4">
        Our Partners
      </h1>
        <div className="flex justify-center items-center">

      <motion.div
        animate={controls}
        className="flex mt-6 gap-10 whitespace-nowrap w-max px-4"
      >
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-black h-[80px] w-[80px] md:h-[120px] md:w-[120px] rounded-md flex justify-center items-center"
          >
            <div
              className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-full"
              style={{ backgroundColor: partner.color }}
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={controls}
        className="flex mt-6 gap-10 whitespace-nowrap w-max px-4"
      >
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-black h-[80px] w-[80px] md:h-[120px] md:w-[120px] rounded-md flex justify-center items-center"
          >
            <div
              className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-full"
              style={{ backgroundColor: partner.color }}
            />
          </div>
        ))}
      </motion.div>
        </div>
    </div>
  );
};

export default PartnerScroll;

"use client";
import React from "react";
import { motion } from "framer-motion";

const PartnerScroll = () => {
  const partners = [
    { id: 1, name: "Partner 1", color: "#FF6B6B" },
    { id: 2, name: "Partner 2", color: "#6BCB77" },
    { id: 3, name: "Partner 3", color: "#4D96FF" },
    { id: 4, name: "Partner 4", color: "#FFD93D" },
    { id: 5, name: "Partner 5", color: "#FF6F91" },
    { id: 6, name: "Partner 6", color: "#845EC2" },
    { id: 7, name: "Partner 7", color: "#2C73D2" },
    { id: 8, name: "Partner 8", color: "#00C9A7" },
    { id: 9, name: "Partner 9", color: "#F56666" },
    { id: 10, name: "Partner 10", color: "#F9F871" },
  ];

  const allPartners = [...partners, ...partners];

  return (
    <div className="bg-white w-full overflow-hidden py-6">
      <h1 className="text-3xl md:text-4xl text-black font-semibold text-center pb-4">
        Our Partners
      </h1>
      <div className="relative w-full flex justify-center gap-10 items-center">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
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
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
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


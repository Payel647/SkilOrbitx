"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";

const FeedbackSection = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      profession: "Software Engineer",
      review:
        "Amazing service! The process was smooth, and I loved how eco-friendly the approach was. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      profession: "Graphic Designer",
      review:
        "Great experience! The team was very professional, and the entire process was hassle-free. Will definitely use it again.",
      rating: 4,
    },
    {
      name: "Amit Singh",
      profession: "Marketing Specialist",
      review:
        "I was really impressed with the efficiency and sustainability of the service. A step towards a better future!",
      rating: 5,
    },
    {
      name: "Neha Kapoor",
      profession: "Entrepreneur",
      review:
        "Fantastic initiative! I appreciate the attention to detail and how well-organized everything was. Keep up the great work!",
      rating: 3,
    },
  ];

  const renderStars = (count) => {
    return (
      <div className="flex gap-[2px] text-black mt-1">
        {[...Array(5)].map((_, i) =>
          i < count ? <FaStar key={i} /> : <FaRegStar key={i} />
        )}
      </div>
    );
  };
  return (
    <section className="bg-white relative w-full h-full">
      <div className="w-full h-[70vh] bg-[#041119] text-white">
        <div className="flex w-[90vw] mx-auto h-full py-10">
          <div className="w-[40%] flex flex-col gap-4 overflow-hidden">
            <div>
              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: ["0%", "-100%"] }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-[#E85F01] p-4 rounded shadow w-[full] h-auto text-white"
                  >
                    {renderStars(review.rating)}
                    <p className="text-sm mt-2">{review.review}</p>
                    <div className="flex gap-8">
                      <div className="rounded-full w-14 h-14 bg-white"></div>
                      <div>
                        <h2 className="font-bold" style={{ fontSize: "22px" }}>
                          {review.name}
                        </h2>
                        <h4 className="italic" style={{ fontSize: "12px" }}>
                          {review.profession}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div>
              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: ["0%", "-100%"] }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-[#E85F01] p-4 rounded shadow w-[full] h-auto text-white"
                  >
                    {renderStars(review.rating)}
                    <p className="text-sm mt-2">{review.review}</p>
                    <div className="flex gap-8">
                      <div className="rounded-full w-14 h-14 bg-white"></div>
                      <div>
                        <h2 className="font-bold" style={{ fontSize: "22px" }}>
                          {review.name}
                        </h2>
                        <h4 className="italic" style={{ fontSize: "12px" }}>
                          {review.profession}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="w-[60%] flex justify-center">
            <div className="text-white flex flex-col">
              <h3 className="text-center" style={{ fontSize: "50px" }}>
                Hear From Our
              </h3>
              <h1 className="font-bold italic" style={{ fontSize: "70px" }}>
                changemakers
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Image positioned between the sections */}
      <div className="absolute right-20 top-[56%] translate-y-[-60%] z-10">
        <img
          src="./images/graduatedgirl.png"
          alt="Graduated Girl"
          className="w-48 md:w-60 lg:w-120"
        />
      </div>

      <div className="h-[40vh] w-full">
        <div className="h-full w-[90vw] pt-10 mx-auto">
          <h1 className="textt-4xl" style={{ fontWeight: "bold" }}>Impact</h1>
          <div className="flex">
            <div
              className="bg-white text-black mt-9 border border-black"
              style={{ width: "30vw", height: "22vh", borderRadius: "40px" }}
            ></div>
            <div
              className="bg-[#041119] text-white mt-9 border flex flex-col justify-center border-black"
              style={{ width: "14vw", height: "22vh", borderRadius: "40px" }}
            >
              <h1
                className="px-3"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                125+
              </h1>
              <h3 className="px-4" style={{ fontSize: "20px" }}>
                Youth Startups Incubated
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pl-40 h-[22vh] w-full">
        <div className="flex">
          <div
            className="bg-[#041119] text-white border flex flex-col justify-center border-black"
            style={{ width: "30vw", height: "22vh", borderRadius: "40px" }}
          >
            <h1
                className="px-20"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                25,000+
              </h1>
              <h3 className="px-22" style={{ fontSize: "20px" }}>
                Students Trained
              </h3>
          </div>
          <div
            className="bg-white text-black border flex flex-col justify-center border-black"
            style={{ width: "30vw", height: "22vh", borderRadius: "40px" }}
          >
            <h1
                className="px-20"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                25,000+
              </h1>
              <h3 className="px-22" style={{ fontSize: "20px" }}>
                Students Trained
              </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

"use client";

import React from "react";
import Image from "next/image";

const navmenu = [
  "About",
  "Program",
  "Testimonials",
  "Impact",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center bg-white rounded-b-xl shadow-md border border-b-white/20 transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center gap-x-3">
          <Image src="/images/logo.png" alt="SkilOrbitx Logo" width={32} height={32} className="object-contain"/>
          <span className="font-bold text-black-800 text-lg sm:text-xl tracking-wide">
            SkilOrbitx
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-x-6 text-gray-900 font-medium">
          {navmenu.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group hover:text-orange-400 text-black-800 transition duration-200"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

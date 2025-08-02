"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      {/* Container with max width and horizontal center */}
      <div className="flex justify-between items-center py-4 px-0 sm:px-6 lg:px-8 max-w-screen-xl"> 
        {/* Left Logo */}
        <div className="text-2xl font-bold">SkilOrbitx</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-bold pr-0 mr-0">
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#program" className="hover:text-orange-500">Program</a></li>
          <li><a href="#testimonials" className="hover:text-orange-500">Testimonials</a></li>
          <li><a href="#impact" className="hover:text-orange-500">Impact</a></li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pt-0 pb-4 space-y-2 text-sm font-bold bg-white">
          <li><a href="#about" className="block hover:text-orange-500">About</a></li>
          <li><a href="#program" className="block hover:text-orange-500">Program</a></li>
          <li><a href="#testimonials" className="block hover:text-orange-500">Testimonials</a></li>
          <li><a href="#impact" className="block hover:text-orange-500">Impact</a></li>
        </ul>
      )}
    </nav>
  );
}

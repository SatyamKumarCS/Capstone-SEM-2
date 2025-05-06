import React from "react";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-teal-100 via-white to-pink-100 px-8 py-4 flex justify-between items-center">

      <div className="flex items-center gap-2">
        <div className="bg-emerald-600 p-2 rounded-md">
          <span className="text-white font-bold text-xl">🎓</span>
        </div>
        <h1 className="text-xl font-semibold">CourseAdda</h1>
      </div>


      <ul className="flex gap-8 font-medium">
        <li><a href="#home" className="hover:text-emerald-600 cursor-pointer">Home</a></li>
        <li><a href="#courses" className="hover:text-emerald-600 cursor-pointer">Courses</a></li>
        <li><a href="#mentors" className="hover:text-emerald-600 cursor-pointer">Mentors</a></li>
        <li><a href="#blog" className="hover:text-emerald-600 cursor-pointer">Blog</a></li>
        <li><a href="#about" className="hover:text-emerald-600 cursor-pointer">About Us</a></li>
        <li><a href="#contact" className="hover:text-emerald-600 cursor-pointer">Contact</a></li>
      </ul>


      <button className="flex items-center gap-2 border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
        Find Now
        <div className="bg-black text-white p-1 rounded-full">
          <ArrowUpRight size={16} />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;

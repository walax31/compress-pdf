"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-200 text-black py-4 px-4 md:px-[166px] flex justify-between items-center">
      <div className="text-xl font-bold">
        <span className="text-black">PDF24</span>{" "}
        <span className="text-primary-600 font-sans">Tools</span>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="#" className="hover:underline">
          Desktop Version
        </Link>
        <Link href="#" className="hover:underline">
          Contact
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="focus:outline-none"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-md">
          All PDF Tools
        </button>
      </div>
      {menuOpen && (
        <div className="absolute z-50 top-[58px] left-0 w-full bg-primary-200 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="#" className="hover:underline">
            Desktop Version
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="focus:outline-none"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-md">
            All PDF Tools
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

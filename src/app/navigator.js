// Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({scrolled = false}) {
  const [isScrolled, setIsScrolled] = useState(scrolled);
  const linkClass = isScrolled
    ? "text-gray-700 hover:text-yellow-600 transition-colors"
    : "text-white hover:text-yellow-300 transition-colors";

  useEffect(() => {
    // Αν το prop scrolled είναι true, δεν χρειάζεται scroll listener
    if (scrolled) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span
              className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              ΣΟΥΒΛΑΚΙΑ
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClass}>
              Αρχική
            </Link>
            <Link href="/menu" className={linkClass}>
              Μενού
            </Link>
            <Link href="/about" className={linkClass}>
              Σχετικά
            </Link>
            <Link href="/contact" className={linkClass}>
              Επικοινωνία
            </Link>
          </div>

          <button
            className={`px-4 py-2 font-bold transition-all duration-300 transform hover:scale-105 ${
              isScrolled ? "bg-yellow-500 text-gray-900" : "bg-white text-gray-900"
            }`}
          >
            Παράγγειλε Τώρα
          </button>
        </div>
      </div>
    </nav>
  );
}

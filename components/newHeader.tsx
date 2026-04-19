"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Daycare", href: "#daycare" },
    { name: "After-School", href: "#after-school" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen 
          ? "bg-white shadow-md" 
          : "bg-gradient-to-b from-black/60 to-transparent" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled || isMenuOpen ? 'h-16 md:h-20' : 'h-20 md:h-24'}`}>
          
          <div className="flex-shrink-0 flex items-center h-full relative">
            
            <div 
              className={`absolute top-0 bottom-0 left-[-50vw] right-[-30px] sm:right-[-40px] bg-[#0b4b8a] transition-opacity duration-300 z-0 ${
                isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                clipPath: "polygon(0 0, 100% 0, calc(100% - 25px) 100%, 0 100%)" 
              }}
            />

            <Link href="/" className="relative z-10 flex items-center gap-3">
              <Image
                src="https://www.eurokidsindia.com/1pagemicrosite/assets/images/logo_footer.png"
                alt="EuroKids Preschool Logo"
                width={160}
                height={55}
                priority
                className={`object-contain w-[120px] sm:w-[140px] md:w-[150px] h-auto transition-all duration-300 ${isScrolled ? '' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-sm transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0b4b8a]' 
                    : 'text-white hover:text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="lg:hidden flex items-center relative z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-all duration-300 ${
                isScrolled || isMenuOpen 
                  ? 'text-gray-700 hover:text-[#0b4b8a]' 
                  : 'text-white hover:text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out bg-white overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 border-t border-gray-200" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#0b4b8a] hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
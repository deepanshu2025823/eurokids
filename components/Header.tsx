// components/Header.tsx

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent pt-4 md:pt-6 px-4 md:px-8 lg:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-8 w-full">
        
        <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-white/80 rounded-full drop-shadow-sm"></div>
        
        <Link 
          href="/" 
          aria-label="EuroKids Home" 
          className="pointer-events-auto flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
        >
          <Image 
            src="https://www.eurokidsindia.com/1pagemicrosite/assets/images/logo_footer.png"
            alt="EuroKids Preschool Logo"
            width={160} 
            height={55}
            priority 
            className="object-contain w-[120px] sm:w-[140px] md:w-[160px] h-auto drop-shadow-lg"
          />
        </Link>

        <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-white/30 to-white/80 rounded-full drop-shadow-sm"></div>
        
      </div>
    </header>
  );
}
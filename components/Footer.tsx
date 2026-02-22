// components/Footer.tsx

"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] border-t border-gray-200 pt-8 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-gray-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} EuroKids Daycare, Preschool & Activity Centre.
          </p>

          <p className="text-sm text-gray-400 text-center md:text-right">
            Designed & Developed with ❤️ By <span className="text-[#185bc3] font-semibold">Deepanshu Joshi</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}
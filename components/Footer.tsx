import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b4b8a] border-t border-slate-800 pt-15 pb-8 text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          <div className="flex flex-col space-y-5">
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
            
            <p className="text-sm text-white leading-relaxed pr-4">
              EuroKids Preschool, Daycare & Activity Centre, Sector 86, Faridabad — India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {['About Our Centre', 'Our Programs', 'Full-Day Daycare', 'After-School Care', 'Parent Reviews', 'FAQ', 'Blog', 'EuroKids India'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center">
                    <span className="text-slate-600">-</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-2">
              {['EuroTots (18-24 months)', 'Playgroup (2-3 yrs)', 'Nursery (3-4 yrs)', 'EuroJunior KG (4-5 yrs)', 'EuroSenior KG (5-6 yrs)', 'Full Daycare (18mo-6yr)', 'Part-Time Daycare', 'After-School (6-12 yrs)'].map((program) => (
                <li key={program}>
                  <Link href="#" className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center">
                    <span className="text-slate-600">-</span> {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-white text-sm leading-relaxed">
                  Ground Floor 2, Summer Palm Society, Near Amolik Chowk, Sector-86, Faridabad - 121002
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-white text-sm">Mon-Sat: 09:00 AM – 7:00 PM</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-white text-sm">+91 99992 12631 <br/> +91 85959 50061</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-white text-sm">eurokids.fbd@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#fff] text-[#185bc3] px-5 py-2.5 rounded-md text-sm font-semibold transition-colors duration-300 w-fit">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Enquire Now
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-white pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-white font-medium text-xs sm:text-sm text-center md:text-left">
              © {currentYear} EuroKids Preschool . All Rights Reserved
            </p>

            <p className="text-xs sm:text-sm text-white text-center md:text-right">
              Designed & Developed with <span className="text-red-500">❤️</span> By <span className="text-[#fff] font-semibold tracking-wide">Deepanshu Joshi</span>
            </p>
            
          </div>
        </div>

      </div>
    </footer>
  );
}
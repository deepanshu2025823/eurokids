// components/LocationContact.tsx

import React from "react";

export default function LocationContact() {
  return (
    <section className="w-full py-5 md:py-10 px-4 lg:px-8 bg-[#fdfdfd] relative border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#183385] text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold flex items-center justify-center gap-2 md:gap-3">
            <span className="text-[#ffb600] text-3xl md:text-4xl drop-shadow-sm">★</span> 
            Our Location 
            <span className="text-[#ffb600] text-3xl md:text-4xl drop-shadow-sm">★</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <div className="space-y-6 md:space-y-8 w-full max-w-xl mx-auto lg:mx-0">
            
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#253b80] text-white rounded-[14px] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#ec008c]">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>
              </div>
              <p className="text-gray-700 font-semibold text-[15px] md:text-lg">
                Monday to Saturday | 09:30 AM to 05:00 PM
              </p>
            </div>

            <address className="flex items-center gap-5 group not-italic">
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#253b80] text-white rounded-[14px] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#ec008c]">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
              </div>
              <p className="text-gray-700 font-semibold text-[15px] md:text-lg leading-relaxed">
                Summer Palms Society, <br className="hidden md:block" />
                Near Amolik chowk Sec-86 Faridabad, Haryana-121002
              </p>
            </address>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#253b80] text-white rounded-[14px] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#ec008c]">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75"></path></svg>
              </div>
              <a href="mailto:eurokid.gfbd@gmail.com" className="text-gray-700 font-semibold text-[15px] md:text-lg hover:text-[#ec008c] transition-colors">
                eurokid.gfbd@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#253b80] text-white rounded-[14px] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#ec008c]">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
              </div>
              <a href="tel:+919958313631" className="text-gray-700 font-semibold text-[15px] md:text-lg hover:text-[#ec008c] transition-colors">
                (+91) 9958313631, (+91) 9560096091
              </a>
            </div>

            <div className="flex gap-4 pt-4 ml-[0px] md:ml-[0px]">
              
              <a href="https://www.facebook.com/people/Eurokidssec86summerpalm/61587151854295/" target="_blank" aria-label="Facebook" className="w-11 h-11 bg-[#253b80] hover:bg-[#1877F2] text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>
              </a>

              <a href="https://www.instagram.com/eurokidssec86summerpalm" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 bg-[#253b80] hover:bg-[#E1306C] text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </a>

              <a href="https://www.youtube.com/@Eurokidsgfbd86" target="_blank" aria-label="Youtube" className="w-11 h-11 bg-[#253b80] hover:bg-[#FF0000] text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.359 4.14-4.359 8.816 0 4.676.462 8.549 4.359 8.816 3.604.245 11.631.244 15.23 0 3.897-.266 4.359-4.14 4.359-8.816 0-4.676-.462-8.549-4.359-8.816zm-10.615 12.816v-8l5.333 4-5.333 4z"></path></svg>
              </a>

              <a href="https://wa.me/919958313631" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 bg-[#253b80] hover:bg-[#25D366] text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
              </a>

            </div>
          </div>

          <div className="w-full h-[350px] md:h-[450px] rounded-[30px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[6px] border-white relative group">
            <div className="absolute inset-0 bg-[#183385]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
            <iframe
              title="EuroKids Preschool Sector 86 Faridabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.680005704179!2d77.3468502!3d28.3986708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7255555555%3A0x123456789abcdef!2sSummer%20Palms%20Apartment%2C%20Sector%2086%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
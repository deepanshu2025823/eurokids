"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    childAge: "",
    program: "Playgroup",
    daycare: "No",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const message = `*New Enquiry from Website*%0A
*Parent's Name:* ${formData.parentName}
*Child's Name:* ${formData.childName}
*Phone Number:* ${formData.phone}
*Child's Age:* ${formData.childAge}
*Program:* ${formData.program}
*Looking for Daycare:* ${formData.daycare}`;

    const whatsappNumber = "919560096091";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
    
    setIsModalOpen(false);
    
    setFormData({
      parentName: "",
      childName: "",
      phone: "",
      childAge: "",
      program: "Playgroup",
      daycare: "No",
    });
  };

  return (
    <>
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
                <Link href="https://www.facebook.com/people/Eurokidssec86summerpalm/61587151854295/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </Link>
                <Link href="https://www.instagram.com/eurokidssec86summerpalm" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </Link>

                <Link href="https://wa.me/919958313631" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </Link>

                <Link href="https://www.youtube.com/@Eurokidsgfbd86" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#185bc3] transition-colors duration-300">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
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
                    Summer Palm Society, Near Amolik Chowk, Sector-86, Faridabad - 121002
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-white text-sm">Mon-Sat: 09:00 AM – 6:00 PM</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-white text-sm">+91 9958313631 <br /> +91 9560096091</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#fbbf24] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-white text-sm">eurokid.fbd@gmail.com</span>
                </li>
              </ul>

              <div className="mt-6">
                {/* Changed from Link to Button to trigger modal */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#fff] text-[#185bc3] px-5 py-2.5 rounded-md text-sm font-semibold transition-colors duration-300 w-fit hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Enquire Now
                </button>
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

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-8">
              <h2 className="text-[#185bc3] text-2xl font-bold text-center mb-6">Enquire Now</h2>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                {/* Parent's Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Parent's Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    placeholder="Enter parent's name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#185bc3] focus:border-[#185bc3] outline-none transition-all text-gray-800"
                  />
                </div>

                {/* Child's Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Child's Name</label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    placeholder="Enter child's name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#185bc3] focus:border-[#185bc3] outline-none transition-all text-gray-800"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#185bc3] focus:border-[#185bc3] outline-none transition-all text-gray-800"
                  />
                </div>

                {/* Child's Age & Program (Side by Side) */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Child's Age</label>
                    <input
                      type="text"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 3 years"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#185bc3] focus:border-[#185bc3] outline-none transition-all text-gray-800"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-white select-none">.</label> {/* Spacer for alignment */}
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#185bc3] focus:border-[#185bc3] outline-none transition-all text-gray-800 bg-white"
                    >
                      <option value="EuroTots">EuroTots</option>
                      <option value="Playgroup">Playgroup</option>
                      <option value="Nursery">Nursery</option>
                      <option value="EuroJunior KG">EuroJunior KG</option>
                      <option value="EuroSenior KG">EuroSenior KG</option>
                    </select>
                  </div>
                </div>

                {/* Looking for Daycare? */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Looking for Daycare?</label>
                  <select
                    name="daycare"
                    value={formData.daycare}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#185bc3] focus:border-[#185bc3] outline-none transition-all text-gray-800 bg-white"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-[#185bc3] hover:bg-[#124a9e] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  Send via WhatsApp
                </button>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
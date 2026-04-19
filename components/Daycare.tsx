"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Daycare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todayDate, setTodayDate] = useState("");
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childAge: "",
    tourDate: "",
    tourTime: "",
    careType: "Full-Day Daycare",
  });
  
  const [errors, setErrors] = useState({
    tourDate: "",
    tourTime: ""
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTodayDate(today);
  }, []);

  const governmentHolidays = [
    "2026-01-26", 
    "2026-03-03", 
    "2026-08-15", 
    "2026-10-02", 
    "2026-11-08", 
    "2026-12-25", 
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name as keyof typeof errors]: "" }));
    }
  };

  const handleWhatsAppSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = { tourDate: "", tourTime: "" };

    if (formData.tourDate) {
      const selectedDate = new Date(formData.tourDate);
      const dayOfWeek = selectedDate.getDay(); 

      if (dayOfWeek === 0) {
        newErrors.tourDate = "Centre is closed on Sundays.";
        formIsValid = false;
      } else if (governmentHolidays.includes(formData.tourDate)) {
        newErrors.tourDate = "Centre is closed on this Holiday.";
        formIsValid = false;
      }
    }

    // --- Strict Time Validation on Submit ---
    if (formData.tourTime) {
      if (formData.tourTime < "09:00" || formData.tourTime > "17:00") {
        newErrors.tourTime = "Available only between 09:00 AM - 05:00 PM.";
        formIsValid = false;
      }
    }

    // Agar koi error hai, toh state update karo aur aage mat badho
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Agar sab theek hai toh WhatsApp par bhejo
    const rawMessage = `*New Daycare Tour Booking*

*Parent's Name:* ${formData.parentName}
*Phone Number:* ${formData.phone}
*Child's Age:* ${formData.childAge}
*Preferred Tour Date:* ${formData.tourDate}
*Preferred Tour Time:* ${formData.tourTime}
*Interested In:* ${formData.careType}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappNumber = "919560096091";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    
    setIsModalOpen(false);
    setFormData({
      parentName: "",
      phone: "",
      childAge: "",
      tourDate: "",
      tourTime: "",
      careType: "Full-Day Daycare",
    });
    setErrors({ tourDate: "", tourTime: "" });
  };

  const features = [
    {
      title: "CCTV Monitored",
      desc: "24/7 surveillance",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      )
    },
    {
      title: "Nutritious Meals",
      desc: "Fresh, age-appropriate",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
      )
    },
    {
      title: "Naptime Routine",
      desc: "Safe, supervised rest",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      )
    },
    {
      title: "Daily Parent Updates",
      desc: "WhatsApp photos & reports",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      )
    },
    {
      title: "Trained Caregivers",
      desc: "POCSO verified staff",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      )
    },
    {
      title: "Strict Hygiene",
      desc: "Daily sanitization",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
      )
    },
    {
      title: "Structured Activities",
      desc: "Mindful curriculum",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      )
    },
    {
      title: "Flexible Timings",
      desc: "Full / Half / Part-time",
      icon: (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    }
  ];

  return (
    <>
      <section id="daycare" className="py-10 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
            
            <div className="w-full lg:w-[55%] flex flex-col">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dce5f0] text-[#0b4b8a] text-xs font-bold tracking-widest mb-4 uppercase w-fit">
                FULL-DAY DAYCARE
              </div>

              <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Trusted Daycare in Sector 86,
                <span className="text-[#0b4b8a]"> Faridabad</span>
              </h2>

              <div className="inline-flex items-center gap-2 bg-[#dce5f0] text-[#0b4b8a] px-4 py-2 rounded-lg text-sm font-semibold mb-6 w-fit">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Mon–Sat • 09:00 AM — 6:00 PM • Ages 18 months – 6 years
              </div>

              <p className="text-gray-600 text-[14px] md:text-[14px] leading-relaxed mb-4 max-w-2xl">
                Our full-day daycare gives working parents in Faridabad complete peace of mind. A warm, home-like environment where your toddler learns, plays, eats well, rests safely, and grows — every single day. Flexible half-day and part-time options also available.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {features.map((item, idx) => (
                  <div key={idx} className="bg-white/60 p-1 rounded-xl flex items-center gap-4 hover:bg-white transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#dce5f0] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#0b4b8a] hover:bg-blue-800 text-white px-8 py-3.5 rounded-lg font-bold transition-colors duration-300 shadow-lg shadow-blue-900/20"
                >
                  Book a Daycare Tour
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
              
            </div>

            {/* Right Video Area with Floating Stats */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
              
              {/* Video Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/01.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute top-1/4 -left-6 sm:-left-12 lg:-left-16 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 animate-bounce-slow">
                <div className="text-2xl sm:text-3xl">🥰</div>
                <div>
                  <div className="text-[#0b4b8a] font-extrabold text-lg sm:text-xl">200+</div>
                  <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Happy Children</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute top-1/2 -left-4 sm:-left-8 lg:-left-12 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 z-10" style={{ animationDelay: '1s' }}>
                <div className="text-2xl sm:text-3xl text-yellow-400">⭐</div>
                <div>
                  <div className="text-[#0b4b8a] font-extrabold text-lg sm:text-xl">4.9 / 5</div>
                  <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Parent Rating</div>
                </div>
              </div>

              {/* Floating Stat Card 3 */}
              <div className="absolute top-3/4 -left-2 sm:-left-4 lg:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4" style={{ animationDelay: '2s' }}>
                <div className="text-2xl sm:text-3xl">🔒</div>
                <div>
                  <div className="text-[#0b4b8a] font-extrabold text-lg sm:text-xl">100%</div>
                  <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Safety Compliance</div>
                </div>
              </div>

            </div>

          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s infinite ease-in-out;
          }
        `}} />
      </section>

      {/* Daycare Tour Modal */}
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
              <h2 className="text-[#0b4b8a] text-2xl font-bold text-center mb-2">Book a Tour</h2>
              <p className="text-gray-500 text-sm text-center mb-6">Schedule a visit to see our daycare facility.</p>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                {/* Parent's Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Parent's Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    pattern="^[A-Za-z\s]{2,50}$"
                    title="Please enter a valid name (letters only)"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                  />
                </div>

                {/* Phone & Child's Age */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="^[6-9]\d{9}$"
                      title="10-digit mobile number"
                      placeholder="10-digit number"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Child's Age <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 2.5 yrs"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800"
                    />
                  </div>
                </div>

                {/* Date & Time (Tour details) */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Tour Date <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="tourDate"
                      value={formData.tourDate}
                      onChange={handleChange}
                      required
                      min={todayDate}
                      className={`w-full px-4 py-2.5 rounded-lg border ${errors.tourDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0b4b8a] focus:border-[#0b4b8a]'} outline-none transition-all text-gray-800 bg-white`}
                    />
                    {/* Inline Error Message for Date */}
                    {errors.tourDate && <p className="text-red-500 text-xs mt-1 font-medium">{errors.tourDate}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Tour Time <span className="text-red-500">*</span></label>
                    <input
                      type="time"
                      name="tourTime"
                      value={formData.tourTime}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border ${errors.tourTime ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0b4b8a] focus:border-[#0b4b8a]'} outline-none transition-all text-gray-800 bg-white`}
                    />
                    {/* Inline Error Message for Time */}
                    {errors.tourTime && <p className="text-red-500 text-xs mt-1 font-medium">{errors.tourTime}</p>}
                  </div>
                </div>

                {/* Interested In */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Interested In</label>
                  <select
                    name="careType"
                    value={formData.careType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b4b8a] focus:border-[#0b4b8a] outline-none transition-all text-gray-800 bg-white"
                  >
                    <option value="Full-Day Daycare">Full-Day Daycare</option>
                    <option value="Half-Day Daycare">Half-Day Daycare</option>
                    <option value="Part-Time Daycare">Part-Time Daycare</option>
                    <option value="Just Exploring">Just Exploring</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-[#0b4b8a] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  Book via WhatsApp
                </button>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
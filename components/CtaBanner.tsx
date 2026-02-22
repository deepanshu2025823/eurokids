// components/CtaBanner.tsx

"use client";
import React, { useState } from "react";

export default function CtaBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    childAge: "",
    program: "Playgroup", 
    daycare: "No",
    daycareDetails: "", 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ownerWhatsAppNumber = "919560096091"; 

    let message = `*New Admission Enquiry*\n\n`;
    message += `*Parent's Name:* ${formData.parentName}\n`;
    message += `*Child's Name:* ${formData.childName}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    message += `*Child's Age:* ${formData.childAge}\n`;
    message += `*Interested Program:* ${formData.program}\n`;
    message += `*Need Daycare:* ${formData.daycare}\n`;
    
    if (formData.daycare === "Yes") {
      message += `*Daycare Details:* ${formData.daycareDetails}\n`;
    }

    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setIsModalOpen(false);
    setFormData({ 
      parentName: "", 
      childName: "", 
      phone: "", 
      childAge: "", 
      program: "Playgroup", 
      daycare: "No", 
      daycareDetails: "" 
    });
  };

  return (
    <>
      <section className="w-full py-10 md:py-16 bg-white px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#185bc3] rounded-[32px] px-6 py-12 md:py-16 text-center overflow-hidden shadow-xl">
            <div className="absolute -top-32 -right-20 w-80 h-80 bg-white/10 rounded-full blur-sm pointer-events-none"></div>
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-sm pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
                Give Your Child the <span className="text-[#ffde00]">Best Start in Faridabad</span>
              </h2>

              <p className="text-white/95 text-[15px] md:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium">
                Admissions open for Playgroup, Nursery, KG, Full-Day Daycare & After-School <br className="hidden md:block" />
                Care. Sessions from April 2026 — limited seats, early enquiry recommended.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#fdfaf2] text-[#185bc3] font-extrabold text-base md:text-[17px] px-8 py-3.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#ea4b8b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-4 sm:py-0 overflow-y-auto">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200 my-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold text-[#185bc3] mb-6 text-center">Enquire Now</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-h-[75vh] sm:max-h-full overflow-y-auto pr-1">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Parent's Name</label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#185bc3] focus:border-transparent transition-all"
                  placeholder="Enter parent's name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Child's Name</label>
                <input
                  type="text"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#185bc3] focus:border-transparent transition-all"
                  placeholder="Enter child's name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#185bc3] focus:border-transparent transition-all"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Child's Age</label>
                  <input
                    type="text"
                    name="childAge"
                    required
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#185bc3] focus:border-transparent transition-all"
                    placeholder="e.g., 3 years"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Program</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#185bc3] focus:border-transparent bg-white transition-all cursor-pointer"
                  >
                    <option value="Playgroup">Playgroup</option>
                    <option value="Nursery">Nursery</option>
                    <option value="EuroJunior (LKG)">EuroJunior (LKG)</option>
                    <option value="EuroSenior (UKG)">EuroSenior (UKG)</option>
                    <option value="Daycare Only">Daycare Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Looking for Daycare?</label>
                <select
                  name="daycare"
                  value={formData.daycare}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#185bc3] focus:border-transparent bg-white transition-all cursor-pointer"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {formData.daycare === "Yes" && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Daycare Requirement Details</label>
                  <input
                    type="text"
                    name="daycareDetails"
                    required
                    value={formData.daycareDetails}
                    onChange={handleChange}
                    className="w-full border border-[#ea4b8b] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea4b8b] focus:border-transparent transition-all"
                    placeholder="e.g., Full day, Half day, Timings..."
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 bg-[#185bc3] hover:bg-[#124596] text-white font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.603 6.01L.226 23.633l5.733-1.503c1.745.962 3.73 1.47 5.768 1.47 6.647 0 12.03-5.383 12.03-12.03S18.678 0 12.03 0zm5.66 17.206c-.267.753-1.54 1.442-2.127 1.517-.565.074-1.285.122-4.14-1.06-3.435-1.423-5.656-5.01-5.823-5.234-.168-.223-1.39-1.85-1.39-3.53 0-1.68 .87-2.515 1.183-2.85.313-.335.68-.42.905-.42.224 0 .448 0 .644.01.206.01.48-.078.752.58.283.682.964 2.35 1.05 2.525.084.176.14.38.028.605-.113.224-.17.362-.338.56-.17.197-.355.433-.507.575-.168.156-.345.33-.146.67.197.337.88 1.45 1.892 2.35 1.303 1.156 2.404 1.51 2.74 1.666.336.156.533.133.733-.095.197-.223.85-1.006 1.082-1.35.23-.346.46-.288.766-.174.305.115 1.93.91 2.26 1.076.33.167.553.25.634.39.08.14.08.815-.187 1.568z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
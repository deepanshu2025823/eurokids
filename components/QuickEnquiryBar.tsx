// components/QuickEnquiryBar.tsx

"use client";
import React, { useState } from "react";
import { sendMobileOtp, verifyMobileOtpAction, submitAdmissionForm } from "@/app/actions/admissions";

export default function QuickEnquiryBar() {
  const [program, setProgram] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [hash, setHash] = useState("");
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!program) return setMessage("Please select a program first.");
    if (!mobile || mobile.length !== 10) return setMessage("Please enter a valid 10-digit mobile number.");

    setLoading(true);
    setMessage("");
    
    const res = await sendMobileOtp(mobile);
    if (res.success) {
      setHash(res.hash || "");
      setStep(2); 
      setMessage("OTP sent successfully!");
    } else {
      setMessage(res.message);
    }
    setLoading(false);
  };

  const handleVerifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) return setMessage("Enter a valid 6-digit OTP.");

    setLoading(true);
    setMessage("");

    const resVerify = await verifyMobileOtpAction(mobile, otp, hash);

    if (resVerify.success) {
      const dataToSubmit = {
        parentName: "Parent", 
        childName: "your child", 
        childDob: "Not Provided (Quick Enquiry)",
        email: "",
        program: program,
        mobile: mobile
      };
      
      const resSubmit = await submitAdmissionForm(dataToSubmit);

      if (resSubmit.success) {
        setStep(3); 
        setMessage("");

        const waText = `Hello EuroKids,%0A%0AI have submitted a *Quick Enquiry*.%0A*Program:* ${program}%0A*Mobile:* ${mobile}`;
        window.open(`https://wa.me/919958313631?text=${waText}`, '_blank');
      } else {
        setMessage("Verification successful, but failed to submit. Please try again.");
      }
    } else {
      setMessage(resVerify.message || "Invalid OTP.");
    }
    setLoading(false);
  };

  return (
    <section className="w-full py-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 md:p-8 flex flex-col xl:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="w-full xl:w-[45%] text-center xl:text-left">
            <h2 className="text-[#1352a1] text-[22px] md:text-3xl font-extrabold flex flex-col sm:flex-row items-center xl:items-start justify-center xl:justify-start gap-2 sm:gap-3 leading-tight">
              <span className="text-3xl sm:text-4xl drop-shadow-sm">🎓</span> 
              <span>Admissions Open — <br className="hidden xl:block" />Sessions from April 2026</span>
            </h2>
            <p className="text-gray-500 mt-2 sm:mt-3 text-sm md:text-[15px] font-medium max-w-md mx-auto xl:mx-0">
              Select a program & share your number — we'll call back within 2 hours.
            </p>
          </div>

          <div className="w-full xl:w-[55%]">
            
            {message && step !== 3 && (
              <p className={`text-sm text-center mb-3 font-semibold ${message.includes('success') ? 'text-green-600' : 'text-red-500'}`}>
                {message}
              </p>
            )}

            {step === 1 && (
              <form onSubmit={handleSendOtp} className="flex flex-col sm:flex-row gap-3 w-full">
                <select 
                  required
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full sm:w-[40%] px-4 py-3.5 border border-gray-200 rounded-xl text-gray-700 bg-white focus:ring-2 focus:ring-[#1352a1] outline-none shadow-sm cursor-pointer appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                >
                  <option value="" disabled>Select Program*</option>
                  <option value="Toddler (18 to 24 Months)">Toddler (18 - 24 Months)</option>
                  <option value="PlayGroup (2 to 3 years)">PlayGroup (2 - 3 years)</option>
                  <option value="Nursery (3 to 4 years)">Nursery (3 - 4 years)</option>
                  <option value="EuroJunior (4 to 5 years)">EuroJunior (4 - 5 years)</option>
                  <option value="EuroSenior (5 to 6 years)">EuroSenior (5 - 6 years)</option>
                </select>

                <div className="w-full sm:w-[35%] relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <span className="text-gray-500 font-medium">+91</span>
                  </div>
                  <input 
                    type="tel"
                    required
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder="Mobile Number*"
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-[#1352a1] outline-none shadow-sm font-medium"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-[25%] bg-[#1352a1] hover:bg-[#0f4386] text-white font-bold rounded-xl px-2 py-3.5 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Enquire Now →"}
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleVerifyAndSubmit} className="flex flex-col sm:flex-row gap-3 w-full items-center animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-full sm:w-[45%] text-center sm:text-right text-[#1352a1] font-semibold text-sm">
                  OTP sent to +91 {mobile}
                  <button type="button" onClick={() => setStep(1)} className="text-gray-400 text-xs block w-full hover:underline mt-1">Change Number</button>
                </div>
                
                <input 
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 6-digit OTP"
                  className="w-full sm:w-[30%] px-4 py-3.5 border border-gray-200 rounded-xl text-black text-center font-bold tracking-widest focus:ring-2 focus:ring-[#1352a1] outline-none shadow-sm"
                />

                <button 
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full sm:w-[25%] bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-xl px-2 py-3.5 transition-all duration-300 shadow-md disabled:opacity-70 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {loading ? "Verifying..." : "Verify & Call Me"}
                </button>
              </form>
            )}

            {step === 3 && (
              <div className="flex items-center justify-center gap-3 w-full p-3 bg-green-50 rounded-xl border border-green-200 animate-in fade-in zoom-in duration-500">
                <div className="bg-green-500 rounded-full p-1.5 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-green-800 font-bold text-lg leading-tight">Thank You!</p>
                  <p className="text-green-700 text-sm font-medium">Your request is verified. We will call you within 2 hours.</p>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
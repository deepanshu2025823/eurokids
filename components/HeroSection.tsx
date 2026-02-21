// components/HeroSection.tsx

"use client";
import Image from "next/image";
import { useState } from "react";
import { sendOtpEmail, verifyOtpAction, submitAdmissionForm } from "@/app/actions/admissions";
import { useModal } from "./ModalContext";

export default function HeroSection() {
  const { isModalOpen, openModal, closeModal } = useModal();
  
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [hash, setHash] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childDob: "",
    mobile: "",
    program: "",
  });

  const handleSendOtp = async () => {
    if (!email) return alert("Please enter your email first.");
    setLoading(true);
    setMessage("");
    const res = await sendOtpEmail(email);
    if (res.success) {
      setHash(res.hash || "");
      setOtpSent(true);
      setMessage("OTP sent to your email!");
    } else {
      setMessage(res.message);
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter the OTP.");
    setLoading(true);
    const res = await verifyOtpAction(email, otp, hash);
    if (res.success) {
      setIsVerified(true);
      setMessage(res.message || "Email Verified Successfully! Please fill the rest of the form.");
    } else {
      setMessage(res.message || "Verification failed.");
    }
    setLoading(false);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return alert("Please verify email first.");
    
    setLoading(true);
    const dataToSubmit = { ...formData, email };
    const res = await submitAdmissionForm(dataToSubmit);
    
    if (res.success) {
      alert("Form Submitted Successfully! We will contact you soon.");
      
      const waText = `Hello EuroKids,%0A%0AI have submitted an admission enquiry.%0A*Parent Name:* ${formData.parentName}%0A*Child Name:* ${formData.childName}%0A*Date of Birth:* ${formData.childDob}%0A*Program:* ${formData.program}%0A*Mobile:* ${formData.mobile}%0A*Email:* ${email}`;
      window.open(`https://wa.me/919958313631?text=${waText}`, '_blank');

      closeModal(); 
      setIsVerified(false);
      setOtpSent(false);
      setFormData({ parentName: "", childName: "", childDob: "", mobile: "", program: "" });
      setEmail("");
      setOtp("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="relative w-full bg-[#183385] overflow-hidden text-white flex flex-col pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-12 lg:py-24 flex flex-col items-start text-left">
          <div className="w-full lg:w-[55%] hksdjf">
            <h1 className="text-[25px] sm:text-4xl lg:text-[42px] font-bold leading-tight md:leading-[1.2] mb-8 text-white drop-shadow-md">
              EuroKids PreSchool & Day Care <br className="hidden md:block" />
              in Sec 86, Summer Palm, Faridabad
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-8 lg:mb-10 w-full">
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="bg-white p-3 rounded-xl mb-3 shadow-lg transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[#ffb600]/30">
                  <svg className="w-7 h-7 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                </div>
                <h3 className="font-bold text-[14px] md:text-[15px] leading-snug">25+ years of<br/><span className="font-normal text-xs md:text-sm text-gray-200">experience</span></h3>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="bg-white p-3 rounded-xl mb-3 shadow-lg transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[#ffb600]/30">
                  <svg className="w-7 h-7 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                </div>
                <h3 className="font-bold text-[14px] md:text-[15px] leading-snug">2000+ pre-schools<br/><span className="font-normal text-xs md:text-sm text-gray-200">across India</span></h3>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="bg-white p-3 rounded-xl mb-3 shadow-lg transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[#ffb600]/30">
                  <svg className="w-7 h-7 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
                </div>
                <h3 className="font-bold text-[14px] md:text-[15px] leading-snug">100+<br/><span className="font-normal text-xs md:text-sm text-gray-200">awards</span></h3>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="bg-white p-3 rounded-xl mb-3 shadow-lg transform transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[#ffb600]/30">
                  <svg className="w-7 h-7 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
                </div>
                <h3 className="font-bold text-[14px] md:text-[15px] leading-snug">550+<br/><span className="font-normal text-xs md:text-sm text-gray-200">cities</span></h3>
              </div>

            </div>

            <div className="border-l-4 border-[#ffb600] pl-3 mb-6">
              <p className="text-gray-200 text-[15px] md:text-lg font-medium tracking-wide drop-shadow-md">
                Sessions Starting from April 2026
              </p>
            </div>

            <button 
              onClick={openModal} 
              className="bg-[#ffb600] hover:bg-[#e6a400] text-black px-6 md:px-8 py-3 rounded-md font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl group w-full sm:w-auto"
            >
              Admissions Open
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            </button>
          </div>
        </div>

        <div className="relative z-0 w-full h-[320px] sm:h-[420px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[50%] overflow-hidden mt-2 lg:mt-0">
          <Image 
            src="https://www.eurokidsindia.com/citypage2025/assets/images/EK-1pg-Microsite-25yrs-Banners-Dtop-12022026.webp"
            alt="EuroKids Preschool 25 Years Celebration"
            fill
            priority
            className="object-cover object-[90%_top] md:object-right lg:object-[80%_center]"
            quality={90}
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#183385] via-[#183385]/70 to-transparent w-[35%]"></div>
          <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-[#183385] via-[#183385]/70 to-transparent h-[35%]"></div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in duration-300">
            
            <div className="bg-[#183385] p-5 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold">Admissions Enquiry</h2>
              <button onClick={closeModal} className="text-white hover:text-gray-300 font-bold text-2xl leading-none">&times;</button>
            </div>

            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {message && <p className="mb-4 text-sm font-semibold text-center p-2 rounded bg-blue-50 text-blue-800 border border-blue-200">{message}</p>}

              <div className="mb-6 p-4 border border-gray-200 rounded-xl bg-gray-50">
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail Address <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isVerified}
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#183385] outline-none disabled:bg-gray-200"
                  />
                  {!isVerified && (
                    <button 
                      onClick={handleSendOtp} 
                      disabled={loading}
                      className="bg-[#183385] text-white px-4 py-2 rounded-md font-bold whitespace-nowrap hover:bg-[#0f215e]"
                    >
                      {loading ? "..." : (otpSent ? "Resend" : "Send OTP")}
                    </button>
                  )}
                </div>

                {otpSent && !isVerified && (
                  <div className="mt-3 flex gap-2 animate-in slide-in-from-top-2">
                    <input 
                      type="text" 
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP" 
                      className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-green-500 outline-none"
                    />
                    <button 
                      onClick={handleVerifyOtp}
                      disabled={loading}
                      className="bg-green-600 text-white px-4 py-2 rounded-md font-bold hover:bg-green-700 whitespace-nowrap"
                    >
                      {loading ? "..." : "Verify"}
                    </button>
                  </div>
                )}
                
                {isVerified && (
                  <p className="text-green-600 font-bold mt-2 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    Email Verified
                  </p>
                )}
              </div>

              <form onSubmit={handleSubmitForm} className={`space-y-4 transition-opacity duration-300 ${isVerified ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Parent's Full Name <span className="text-red-500">*</span></label>
                  <input required type="text" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} placeholder="John Doe" className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#183385] outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Child's Name <span className="text-red-500">*</span></label>
                  <input required type="text" value={formData.childName} onChange={(e) => setFormData({...formData, childName: e.target.value})} placeholder="Child's Full Name" className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#183385] outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Child's Date of Birth <span className="text-red-500">*</span></label>
                  <input required type="date" value={formData.childDob} onChange={(e) => setFormData({...formData, childDob: e.target.value})} className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#183385] outline-none bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                  <input required type="tel" maxLength={10} value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} placeholder="9958313631" className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#183385] outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Choose A Program <span className="text-red-500">*</span></label>
                  <select required value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#183385] outline-none bg-white">
                    <option value="" disabled>Select a program...</option>
                    <option value="Toddler (18 to 24 Months)">Toddler – 18 to 24 Months</option>
                    <option value="PlayGroup (2 to 3 years)">PlayGroup - 2 to 3 years</option>
                    <option value="Nursery (3 to 4 years)">Nursery - 3 to 4 years</option>
                    <option value="EuroJunior (4 to 5 years)">EuroJunior (Junior KG) - 4 to 5 years</option>
                    <option value="EuroSenior (5 to 6 years)">EuroSenior (Senior KG) - 5 to 6 years</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={loading || !isVerified}
                  className="w-full bg-[#ec008c] hover:bg-[#c20073] text-white py-3 rounded-md font-bold text-lg transition-colors mt-4 shadow-md disabled:bg-gray-400"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
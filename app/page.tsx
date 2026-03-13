// app/page.tsx

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import QuickEnquiryBar from "@/components/QuickEnquiryBar";
import AboutCentre from "@/components/AboutCentre";
import Programs from "@/components/Programs";
import DaycareRoutine from "@/components/DaycareRoutine";
import WhatsAppConnect from "@/components/WhatsAppConnect";
import Services from "@/components/Services";
// import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import LocationContact from "@/components/LocationContact";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pb-20 md:pb-0 relative">
      
      <Header />
      <HeroSection />
      <StatsBanner />
      <QuickEnquiryBar />
      <AboutCentre />
      <Programs />
      <DaycareRoutine />
      <WhatsAppConnect />
      <Services />
      {/* <WhyChooseUs /> */}
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <LocationContact />
      <InstagramFeed />
      <Footer />
      <BottomNav />
      
    </main>
  );
}

// app/page.tsx

import NewHeader from "@/components/newHeader";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import QuickEnquiryBar from "@/components/QuickEnquiryBar";
import AboutCentre from "@/components/AboutCentre";
import PrincipalMessage from "@/components/PrincipalMessage"; 
import Programs from "@/components/Programs";
import DayCare from "@/components/Daycare";
import DaycareRoutine from "@/components/DaycareRoutine";
import AfterSchool from "@/components/AfterSchool";
import Schedule from "@/components/Schedule";
import Services from "@/components/Services";
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
      
      <NewHeader />
      <HeroSection />
      <StatsBanner />
      <QuickEnquiryBar />
      <AboutCentre />
      <Programs />
      <DayCare />
      <DaycareRoutine />
      <AfterSchool />
      <Schedule />
      <Services />
      <Testimonials />
      <PrincipalMessage /> 
      <FAQ />
      <CtaBanner />
      <LocationContact />
      <InstagramFeed />
      <Footer />
      <BottomNav />
      
    </main>
  );
}
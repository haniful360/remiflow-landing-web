
import React from "react";
import ExcitingNews from "./component/ExcitingNews";
import PromoSection from "./component/PromoSection";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Features from "@/app/component/Features";
import FAQ from "./component/FAQ";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        {/* Header */}
      <Header/>
        {/* Main Content */}
       <HeroSection/>
      </div>
      <ExcitingNews/>
      <Features/>
      <FAQ/>
      <PromoSection/>
      <Footer/>
    </div>
  );
}

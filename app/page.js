import Image from "next/image";
import React from "react";
import herogroup from "@/public/images/hero-group.png";
import hero1 from "@/public/images/hero1.png";
import hero2 from "@/public/images/hero2.png";
import hero3 from "@/public/images/hero3.png";
import hero4 from "@/public/images/hero4.png";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Header */}
      <header className="w-full h-[120px] flex justify-center shadow-md bg-white fixed top-0 z-50">
        <div className="max-w-[1250px] w-full flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 flex items-center"
          >
            <Image src={logo} alt="Logo" width={220} height={63} />{" "}
            {/* Adjust width and height as needed */}
          </Link>
          <nav className="font-poppins md:flex items-center gap-6">
            <Link href="#" className="text-gray-700">
              Home
            </Link>
            <Link href="#" className="text-gray-700">
              FAQ
            </Link>
            <Link href="#" target="_blank" className="text-gray-700">
              <button className="bg-[#2B95FA] lg:w-[152px] lg:h-[48px] rounded-[30px] text-white px-6 py-2">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-[140px] max-w-[1250px] w-full p-4 lg:flex items-center justify-between gap-4">
        <div className="">
          <p className="font-poppins text-[#395664] lg:text-[20px]">
            we don’t just transfer money – we maximize your savings.
          </p>
          <h2 className="lg:w-[662px] font-noto text-4xl lg:text-[55px] lg:leading-[75px] font-bold mt-4">
            Send Money to India with the
            <span className="text-[#FA6D2B]">
              {" "}
              Best Exchange <br /> Rates
            </span>{" "}
            &<span className="text-[#268BEB]"> Zero Fees</span>
          </h2>
          <p
            className="font-poppins text-base sm:text-lg lg:text-[24px] 
             text-[#395664] mt-4 max-w-full sm:max-w-[700px] lg:max-w-[800px] 
             mx-auto"
          >
            We offer better rates than banks, Google, and Remitly with zero
            transaction fees and a seamless process that lets you send money in
            just a few taps.
          </p>

          <p
            className="font-poppins text-base sm:text-lg lg:text-[24px] 
             text-[#395664] mt-4 max-w-full sm:max-w-[700px] lg:max-w-[800px] 
             mx-auto"
          >
            First-time user? Verify your identity with KYC in just 1 <br /> minute to
            proceed.
          </p>

          {/* Buttons */}
          <div className="font-poppins mt-6 flex flex-col md:flex-row gap-4">
            <button
              className="text-base sm:text-lg lg:text-[26px] 
                   w-full sm:w-[200px] lg:w-[250px] 
                   h-[50px] sm:h-[60px] lg:h-[68px] 
                   rounded-full lg:rounded-[34px] 
                   bg-[#1D242D] font-medium text-white 
                   px-6 py-3"
            >
              Complete KYC
            </button>
            <button
              className="text-base sm:text-lg lg:text-[26px] 
                   w-full sm:w-[200px] lg:w-[250px] 
                   h-[50px] sm:h-[60px] lg:h-[68px] 
                   rounded-full lg:rounded-[34px] 
                   bg-[#268BEB] font-medium text-white 
                   px-6 py-3"
            >
              Send Money
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="">
          <Image
            src={herogroup}
            alt="Happy family"
            className=" rounded-lg w-full"
          />
          {/* <Image
            src={hero2}
            alt="Happy couple"
            className="lg:w-[155px] rounded-lg"
          />
          <Image
            src={hero3}
            alt="Man using phone"
            className="rounded-lg lg:w-[155px]"
          />
          <Image
            src={hero4}
            alt="Mother and child"
            className="rounded-lg lg:w-[355px]"
          /> */}
        </div>
      </main>
    </div>
  );
}

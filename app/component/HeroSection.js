import React from "react";
import herogroup from "@/public/images/hero-group.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient">
    <div className="mt-[80px] max-w-[1250px] mx-auto w-full p-4 lg:flex items-center justify-between gap-4">
      <div className="">
        <p className="font-poppins text-[#395664] lg:text-[20px]">
          we don’t just transfer money – we maximize your savings.
        </p>
        <h2 className="lg:w-[662px] font-noto text-4xl lg:text-[55px] lg:leading-[75px] font-bold mt-4">
          Send Money to India with the
          <span className="text-[#FA6D2B]">
            Best Exchange <br /> Rates
          </span>
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
          First-time user? Verify your identity with KYC in just 1 <br /> minute
          to proceed.
        </p>

        {/* Buttons */}
        <div className="font-poppins mt-6 flex flex-col md:flex-row gap-4">
          <Link href="" target="_blank">
            {" "}
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
          </Link>
          <Link href="" target="_blank">
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
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="">
        <Image
          src={herogroup}
          alt="Happy family"
          className=" rounded-lg w-full"
        />
      </div>
    </div>
    </section>
  );
};

export default HeroSection;

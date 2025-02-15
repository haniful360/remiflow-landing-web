import React from "react";
import herogroup from "@/public/images/hero-group.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="herosection" className="bg-gradient overflow-hidden">
      <div className="lg:mt-[80px] max-w-[1250px] mx-auto w-full p-4 lg:flex items-center justify-between gap-4">
        {/* Text Content */}
        <div className="flex-1">
          <p
            className="font-poppins text-[#395664] text-lg lg:text-[20px]"
            data-aos="fade-left"
          >
            We don’t just transfer money, we help you save more.
          </p>
          <h2
            className="w-full lg:w-[662px] font-noto text-2xl md:text-4xl lg:text-[55px] leading-8 md:leading-[48px] lg:leading-[75px] font-bold mt-4"
            data-aos="fade-left"
          >
            Send Money to India with the
            <span className="text-[#FA6D2B]">
              {" "}
              Best <br /> Rates{" "}
            </span>
            & <span className="text-[#268BEB]"> Zero Fees</span>
          </h2>
          <p
            className="font-poppins text-base sm:text-lg lg:text-[24px] text-[#395664] mt-4 max-w-full sm:max-w-[700px] lg:max-w-[800px]"
            data-aos="fade-left"
          >
            Get better rates than banks, Google, and Remitly. No fees, No
            hassle.
          </p>

          <p
            className="font-poppins text-base sm:text-lg lg:text-[24px] text-[#395664] mt-4 max-w-full sm:max-w-[700px] lg:max-w-[800px]"
            data-aos="fade-left"
          >
            New here? Verify your identity in just1 minute to start sending
            money.
          </p>

          {/* Buttons */}
          <div
            className="font-poppins mt-6 flex flex-col sm:flex-row gap-4"
            data-aos="fade-left"
          >
            {/* <Link href="" target="_blank">
            <button
              className="text-base sm:text-lg lg:text-[26px] w-full sm:w-[200px] lg:w-[250px] h-[50px] sm:h-[60px] lg:h-[68px] rounded-full lg:rounded-[34px] bg-[#1D242D] font-medium text-white px-6 py-3 hover:bg-[#2c3643] transition-colors"
            >
              Complete KYC
            </button>
          </Link> */}
            <Link href="#moneytransfer">
              <button className="text-base sm:text-lg lg:text-[26px] w-full sm:w-[200px] lg:w-[250px] h-[50px] sm:h-[60px] lg:h-[68px] rounded-full lg:rounded-[34px] bg-[#268BEB] font-medium text-white px-6 py-3 hover:bg-[#1a6bbf] transition-colors">
                Send Money
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-5 lg:mt-0" data-aos="fade-right">
          <Image
            src={herogroup}
            alt="Happy family"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

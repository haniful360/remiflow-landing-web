import React from "react";

const PromoSection = () => {
  return (
    <div className="bg-[#0056A8] flex justify-center flex-col h-[602px]">
        <div className=" text-center py-12 px-6 ">
      <h2 className="text-[#FDFDFD] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold leading-[49px] font-noto mb-8">
        Start Sending Money & Saving Today!
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-8 lg:text-[24px] text-white font-medium mx-auto font-noto">
        Make the smart choice – experience RemiFlow now and enjoy the best
        exchange <br />
        rates with zero fees.
      </p>
      <button className="bg-[#039D21] lg:w-[415px] lg:h-[78px] rounded-[20px] font-poppins text-white font-semibold px-6 shadow-md hover:bg-green-700 transition">
        Get Started Now
      </button>
      <p className="text-sm sm:text-base md:text-lg mt-8  lg:text-[24px] text-white font-medium mx-auto font-noto">
        Switch to RemiFlow Today – Send More, Save More – Zero Fees, Maximum
        Happiness!
      </p>
    </div>
    </div>
  );
};

export default PromoSection;

import React from 'react';
import phone from "@/public/images/phone.svg";
import Image from 'next/image';

const ExcitingNews = () => {
    return (
       
      <div className="bg-[url(/images/exciting_bg.png)]">
      <div className="max-w-[1250px] mx-auto">
        <div className="mt-16 w-full p-6 rounded-lg flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl lg:text-[44px] font-noto leading-[64px]  font-bold text-[#2B95FA] flex items-center gap-2">
              🚀 Exciting News:
            </h3>
            <h2 className="text-4xl font-bold text-blue-500">
              RemiFlow App{" "}
              <span className="text-[#039D21]">Coming Soon!</span>
            </h2>
            <p className="text-[#607D8B] font-poppins leading-[34px] mt-4">
              Get ready for the ultimate convenience! Our mobile app will make
              sending money faster, easier, and more seamless than ever
              before. Stay tuned for updates!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image
              src={phone}
              alt="Mobile App Preview"
              className="max-w-xs md:max-w-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default ExcitingNews;
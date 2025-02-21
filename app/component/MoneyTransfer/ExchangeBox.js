"use client";
import React, { useState } from "react";
import CA from "@/public/images/money/CA.svg";
import IN from "@/public/images/money/IN.svg";
import downarrow from "@/public/images/money/down-arrow.svg";
import left from "@/public/images/money/left.svg";
import up_down from "@/public/images/updown.svg";
import Image from "next/image";
import RightArrowIcon from "../svg/RightArrowIcon";
import { Select } from "@headlessui/react";
import clsx from "clsx";

const ExchangeBox = () => {
  const [amount, setAmount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState("");
  const exchangeRate = 60.04;
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  const handleAmountChange = (e) => {
    let value = Number(e.target.value);
    if (value <= 0) value = "";
    setAmount(value);
  };

  const lockInRate = () => {
    const whatsappURL = `https://wa.me/15483845252?text=Hi%20RemiFlow,%20I%20would%20like%20to%20send%20${amount}%20CAD%20to%20India%20at%20the%20rate%20of%20${exchangeRate}%20INR%20via%20${paymentMethod}.%20Kindly%20proceed%20with%20the%20transaction.`;
    window.location.href = whatsappURL;
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg border border-[#2B95FA] max-w-[480px] w-full mx-auto"
      // data-aos="fade-up"
    >
      {/* You Send Section */}
      <div className="bg-[#EDF7FE] flex items-center lg:h-[74px] rounded-lg">
        <div className="relative flex items-center justify-between p-4 rounded-lg h-[56px]">
          {/* Left Section */}
          <div className="flex-1">
            <label className="text-[#989898] text-[12px] leading-[18px] font-poppins font-medium">
              You send
            </label>
            <input
              type="number"
              className="bg-[#EDF7FE] text-[#333333] text-[20px] lg:text-[24px] font-medium leading-[30px] focus:outline-none w-full"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <div className=" absolute left-1/2 transform -translate-x-1/2 h-5/6 w-[.76px] bg-[#E3E5EA]"></div>
          {/* Right Section */}
          <div className="flex-1">
            <div className="flex items-center justify-end gap-2">
              <Image
                src={CA}
                alt="Canada Flag"
                width={30}
                height={30}
                className="w-[30px] h-[29px] sm:w-8 sm:h-8"
              />
              <span className="text-[#000000] text-[12px] lg:text-[15px] font-normal">
                CAD
              </span>
              <Image
                src={downarrow}
                alt="Down Arrow"
                width={14}
                height={14}
                className="w-3 h-2 lg:w-[14px] lg:h-[14px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}

      <div className="md:hidden ">
        <div className="flex items-center gap-3 py-5 ml-5">
          <div className="bg-[#2277C8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image src={up_down} className="w-[20px] h-[20px]" alt="" />
          </div>
          <div className="flex gap-4 text-[#038D1E] font-poppins text-[16px] leading-[17.6px]">
            <span>1.00 CAD </span>
            <RightArrowIcon />
            <span> 60.04 INR</span>
          </div>
        </div>
      </div>

      {/* Conversion Details Section */}
      <div className="hidden md:block ">
        <div className="flex flex-col sm:flex-row gap-2 py-4 text-gray-700">
          <Image
            className="sm:ml-5 mx-auto hidden md:block"
            src={left}
            alt="Left Icon"
          />
          <div className="w-full space-y-2 font-poppins text-sm sm:text-[18px]">
            <p className="flex justify-between text-[#333333] font-medium">
              <span>Fees*</span>
              <span>0 CAD</span>
            </p>
            <div className="text-[#989898] leading-7 border-b-[1.25px] pb-1 border-[#ECEEF3]">
              <p className="flex justify-between">
                <span>Transaction fee</span>
                <span>0 CAD</span>
              </p>
              <p className="flex justify-between">
                <span>Bank transfer fee</span>
                <span>0 CAD</span>
              </p>
            </div>
            <p className="flex justify-between font-semibold border-b-[1.25px] pt-[6px] pb-3 mt- border-[#ECEEF3]">
              <span>Amount to convert</span>
              <span>{amount} INR</span>
            </p>
            <p className="flex justify-between font-semibold pt-3">
              <span>Exchange rate</span>
              <span>{convertedAmount} INR</span>
            </p>
          </div>
        </div>
      </div>

      {/* They Get Section */}
      <div className="bg-[#EDF7FE] flex items-center lg:h-[74px] rounded-lg">
        <div className="relative flex items-center justify-between p-4 rounded-lg h-[56px] w-full">
          {/* Left Section */}
          <div className="flex-1">
            <label className="text-[#989898] text-[12px] leading-[18px] font-poppins font-medium">
              They get
            </label>
            <input
              type="text"
              className="bg-[#EDF7FE] text-[#333333] text-[20px] lg:text-[24px] font-medium leading-[30px] focus:outline-none w-full"
              value={convertedAmount}
              readOnly
            />
          </div>

          {/* Vertical Divider */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-5/6 w-[.76px] bg-[#E3E5EA]"></div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="flex items-center justify-end gap-2">
              <Image
                src={IN}
                alt="India Flag"
                width={30}
                height={30}
                className="w-[30px] h-[29px] sm:w-8 sm:h-8"
              />
              <span className="text-[#000000] text-[12px] lg:text-[15px] font-normal">
                INR
              </span>
              <Image
                src={downarrow}
                alt="Down Arrow"
                width={14}
                height={14}
                className="w-3 h-2 lg:w-[14px] lg:h-[14px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <p className="hidden md:block text-right text-sm sm:text-[16px] text-[#989898] mt-2 font-poppins font-medium border-b-[1.25px] pt-1 pb-2 border-[#ECEEF3]">
        1 CAD = {exchangeRate} INR
      </p>

      <div className="md:hidden px-4 flex mt-4 border-b pb-2 border-[#ECEEF3] justify-between text-[#989898] text-[14px] font-medium font-poppins">
        <span className="leading-[21px]">Fees*</span>
        <span className="leading-[21px]">0 CAD</span>
      </div>

      {/* Payment Options */}
      <div className="px-1 flex  sm:flex-row items-center justify-between py-4  font-poppins relative">
        {/* First Div */}
        <div className="max-w-[50%] rounded-lg font-poppins">
          <div className="flex items-center">
            <p className="text-[#727272]  font-poppins text-[12px] md:text-[16px] font-medium">
              Pay with:
            </p>
            {/* <select
              className="w-[86px] md:w-3/6 truncate py-[2px] rounded text-[12px] md:text-[16px] text-[#038D1E] font-medium focus:outline-none "
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>E-Transfer</option>
              <option>Cash pickup (within GTA)</option>
            </select> */}

            <Select
                className={clsx(
                  "w-[86px] md:w-3/6 truncate py-[2px] rounded text-[12px] md:text-[16px] text-[#038D1E] font-medium focus:outline-none",
                  // Make the text of each option black on Windows
                  "*:text-black"
                )}
              >
                <option>E-Transfer</option>
                <option>Cash pickup (within GTA)</option>
              </Select>
          </div>

          <p className="text-center text-[#1A5996] mt-1 lg:mt-0 font-medium text-[12px] md:text-[16px]">
            Free
          </p>
        </div>
        {/* Responsive Border */}
        <div className="sm:block absolute left-1/2 transform -translate-x-1/2 h-4/6 w-[.75px] bg-[#E3E5EA]"></div>
        <div className="max-w-[45%] text-center text-[#727272] md:text-[16px] font-medium">
          <span className="text-[12px] text-center md:text-[16px] ">
            Estimated delivery time:
          </span>
          <p className="text-[#1A5996] text-[12px] md:text-[16px] text-center mt-1 font-medium">
            1-3 Days
          </p>
        </div>
      </div>

      {/* Lock in Rate Button */}
      <button
        onClick={lockInRate}
        className="send_money_btn w-full mt-4 h-12 sm:h-[74px] text-lg sm:text-[24px] font-poppins text-white rounded-lg hover:bg-blue-700 transition"
      >
        Lock in Rate & Continue
      </button>
    </div>
  );
};

export default ExchangeBox;

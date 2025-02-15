"use client";
import React, { useState } from "react";
import CA from "@/public/images/money/CA.svg";
import IN from "@/public/images/money/IN.svg";
import downarrow from "@/public/images/money/down-arrow.svg";
import left from "@/public/images/money/left.svg";
import Image from "next/image";

const ExchangeBox = () => {
  const [amount, setAmount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState("Interac e-Transfer"); // State for payment method
  const exchangeRate = 60.5663;
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
      className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-[#2B95FA] max-w-[480px] w-full mx-auto"
      data-aos="fade-up"
    >
      {/* You Send Section */}
      <div className="bg-[#EDF7FE] flex items-center h-[74px] rounded-lg">
        <div className="flex items-center justify-between p-2 rounded-lg mt-2">
          <div className="flex-1 pl-2">
            <label className="text-[#989898] text-[12px] font-poppins font-medium">
              You send
            </label>
            <input
              type="number"
              className=" p-1 bg-[#EDF7FE] text-[20px] lg:text-[24px] font-medium focus:outline-none flex-1"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-end gap-2 border-l pl-2">
              <Image
                src={CA}
                alt="Canada Flag"
                width={30}
                height={30}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-gray-800 font-semibold hidden sm:block">
                CAD
              </span>
              <Image src={downarrow} alt="Down Arrow" width={16} height={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Details Section */}
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

      {/* They Get Section */}
      <div className="bg-[#EDF7FE] flex items-center h-[74px] rounded-lg">
        <div className="flex items-center justify-between p-2 rounded-lg  mt-2">
          <div className="flex-1 pl-2">
            <label className="text-[#989898] text-[12px] font-poppins font-medium">
              They get
            </label>
            <input
              type="text"
              className="p-1 text-[20px] lg:text-[24px] font-medium  bg-[#EDF7FE] focus:outline-none flex-1"
              value={convertedAmount}
              readOnly
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-end gap-2 border-l pl-2">
              <Image
                src={IN}
                alt="India Flag"
                width={30}
                height={30}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-gray-800 font-semibold hidden sm:block">
                INR
              </span>
              <Image src={downarrow} alt="Down Arrow" width={16} height={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <p className="text-right text-sm sm:text-[16px] text-[#989898] mt-2 font-poppins font-medium border-b-[1.25px] pt-1 pb-2 border-[#ECEEF3]">
        1 CAD = {exchangeRate} INR
      </p>

      {/* Payment Options */}
      <div className="flex flex-col font-poppins sm:flex-row md:items-center justify-between py-2 relative">
        {/* First Div */}
        <div className="lg:w-[50%] rounded-lg font-poppins">
          <label className="text-[#727272] text-[14px] sm:text-[16px] font-medium">
            Pay with:
          </label>
          {/* This div will display as flex on mobile and be hidden on larger devices */}
          <div className="flex lg:flex-col justify-between">
            <div>
              <select
                className="rounded text-[14px] sm:text-[16px] text-green-600 font-medium focus:outline-none"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option className="text-[14px] sm:text-[16px]">
                  Interance E-Transfer
                </option>
                <option className="text-[14px] sm:text-[16px]">
                  Cash pickup (within GTA)
                </option>
              </select>
            </div>
            <p className="text-center text-[#1A5996] font-medium mt-1 text-[14px] sm:text-[16px]">
              Free
            </p>
          </div>
        </div>
        {/* Responsive Border */}
        <div className="w-full h-[0.75px] bg-[#E3E5EA] my-3 sm:hidden"></div>
        <div className="hidden ml-[14px] sm:block absolute left-1/2 transform -translate-x-1/2 h-4/6 w-[.75px] bg-[#E3E5EA]"></div>
        <div className="lg:w-[45%] lg:mt-3 text-left md:text-center sm:mt-0 text-[#727272] text-[14px] sm:text-[16px] font-medium">
          <span>
            Estimated delivery time: <br />
          </span>
          <b className="text-[#1A5996]">1-3 Days</b>
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

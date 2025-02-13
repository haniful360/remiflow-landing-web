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
      className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-[#2B95FA]"
      data-aos="fade-up-left"
    >
      {/* You Send Section */}
      <div className="bg-[#EDF7FE] p-3 rounded-lg">
        <span className="text-gray-600 font-poppins text-sm sm:text-base">
          You send
        </span>
        <div className="flex items-center bg-white p-2 rounded-lg border border-gray-300 mt-2">
          <input
            type="number"
            className="p-1 text-base sm:text-lg font-semibold focus:outline-none"
            value={amount}
            onChange={handleAmountChange}
            required
          />
          <div className="flex items-center gap-2 border-l pl-2">
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
            <Image
              src={downarrow}
              alt="Down Arrow"
              width={16}
              height={14}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Conversion Details Section */}
      <div className="flex flex-col sm:flex-row gap-2 py-4 text-gray-700">
        <Image className="sm:ml-5 mx-auto hidden md:block" src={left} alt="Left Icon" />
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
          <p className="flex justify-between font-semibold border-b-[1.25px] pt-1 pb-2 border-[#ECEEF3]">
            <span>Amount to convert</span>
            <span>{amount} INR</span>
          </p>
          <p className="flex justify-between font-semibold pt-2">
            <span>Exchange rate</span>
            <span>{convertedAmount} INR</span>
          </p>
        </div>
      </div>

      {/* They Get Section */}
      <div className="bg-[#EDF7FE] p-3 rounded-lg">
        <span className="text-gray-600 font-poppins text-sm sm:text-base">
          They get
        </span>
        <div className="flex items-center bg-white p-2 rounded-lg border border-gray-300 mt-2">
          <input
            type="text"
            className="p-1 text-base sm:text-lg font-semibold focus:outline-none"
            value={convertedAmount}
            readOnly
          />
          <div className="flex items-center gap-2 border-l pl-2">
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
            <Image
              src={downarrow}
              alt="Down Arrow"
              width={16}
              height={14}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <p className="text-right text-sm sm:text-[16px] text-[#989898] mt-2 font-poppins font-medium border-b-[1.25px] pt-1 pb-2 border-[#ECEEF3]">
        1 CAD = {exchangeRate} INR
      </p>

      {/* Payment Options */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-2">
        <div className="rounded-lg font-poppins w-full sm:w-auto">
          <label className="block text-[#727272] text-sm sm:text-[16px] font-medium">
            Pay with:
          </label>
          <select
            className="w-full p-1 rounded text-green-600 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Interac E-Transfer</option>
            <option>Cash Pickup in GTA</option>
          </select>
          <p className="text-center text-[#1A5996] font-medium">Free</p>
        </div>

        <div className="mt-3 sm:mt-5 text-center text-[#727272] text-sm sm:text-[16px] font-medium">
          <span>
            Estimated delivery time: <br />
          </span>
          <b className="ml-2">2-3 days</b>
        </div>
      </div>

      {/* Lock in Rate Button */}
      <button
        onClick={lockInRate}
        className="send_money_btn w-full mt-4 h-12 sm:h-[74px] text-lg sm:text-[24px] font-poppins text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Lock in Rate & Continue
      </button>
    </div>
  );
};

export default ExchangeBox;

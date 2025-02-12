"use client";

import { useState } from "react";
import MinusIcon from "./svg/MinusIcon";
import PlusIcon from "./svg/PlusIcon";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does RemiFlow offer better rates than banks and Remitly?",
      answer:
        " A: We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we do not inflate exchange rates to profit off you. "},
    {
      question: "How long does it take for the money to reach my recipient?",
      answer:
        "A: We ensure transfers are completed within 1-3 business days – no unnecessary delays.",
    },
    {
      question: "Is my money safe with RemiFlow?",
      answer:
        "A: Absolutely! We implement the highest security protocols to keep your transactions protected.",
    },
    {
      question: "Can I pay with cash?",
      answer:
        "A: Yes! If you’re in the GTA, we pick up cash directly from your location for ultimate convenience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="max-w-[1250px] h-[611px] mx-auto px-4 py-10 flex flex-col items-center md:flex-row gap-10"
    >
      {/* Left Section (Title & Description) */}
      <div className="md:w-1/2 space-y-6">
        {/* Subheading */}
        <h2 className="text-[#039D21] font-semibold uppercase text-sm text-[16px] tracking-widest mb-2">
          Frequently Asked Questions
        </h2>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold leading-relaxed font-poppins text-[#2B95FA] mb-4">
          Got Questions? We’ve Got Answers!
        </h1>

        {/* Description */}
        <p className="text-[#717880] max-w-md text-sm text-[16px] leading-relaxed">
          Curious about something? We're here to help! Find clear, reliable
          answers to all your questions. No confusion, just simple explanations.
          Ask away—we’ve got the information you need!
        </p>

        {/* Call-to-Action Button (Optional) */}
        <button className="mt-6 px-8 py-3 bg-[#2B95FA] text-white font-semibold rounded-lg hover:bg-[#1a7cc7] transition duration-300">
          Explore FAQs
        </button>
      </div>

      {/* Right Section (FAQ List) */}
      <div className="md:w-1/2 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* FAQ Question */}
            <div className="flex items-center bg-blue-100 px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-200">
              <span className="text-xl text-blue-600 mr-4">
                {openIndex === index ? <MinusIcon /> : <PlusIcon />}
              </span>
              <h3 className="text-[#2B95FA] font-semibold text-[16px] leading-5 font-outfit flex-1">
                {faq.question}
              </h3>
            </div>

            {/* FAQ Answer */}
            <div
              className={`transition-all duration-500 ease overflow-hidden ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-3 px-8 text-[#717880] text-[15px] font-outfit leadin-7">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

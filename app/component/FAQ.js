'use client'

import { useState } from "react";
// import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does this work?",
      answer: "We provide answers to frequently asked questions in an easy-to-read format.",
    },
    {
      question: "Can I ask my own questions?",
      answer: "Absolutely! Feel free to reach out to us with any additional inquiries.",
    },
    {
      question: "Is this service free?",
      answer: "Yes! All our FAQs and resources are completely free to access.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1250px] mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Left Section (Title & Description) */}
      <div className="md:w-1/2">
        <h2 className="text-green-600 font-semibold uppercase text-sm mb-2">
          Frequently Asked Questions
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          Got Questions? We’ve Got Answers!
        </h1>
        <p className="text-gray-600 max-w-md">
          Curious about something? We’re here to help! Find clear, reliable answers to all your questions.
        </p>
      </div>

      {/* Right Section (FAQ List) */}
      <div className="md:w-1/2 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center bg-blue-100 px-4 py-3 rounded-md">
              <span className="text-xl text-blue-600 mr-4">
                {openIndex === index ? "-" : "+"}
              </span>
              <h3 className="text-blue-600 font-semibold flex-1">{faq.question}</h3>
            </div>
            {openIndex === index && (
              <p className="mt-3 px-8 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

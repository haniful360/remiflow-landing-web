import React from "react";
import ExchangeBox from "./ExchangeBox";

const MoneyTransfer = () => {
  const steps = [
    {
      number: "1",
      title: "Enter Amount & Check Rates",
      description: "Use our real-time currency calculator to see how much your recipient will receive. Click Send Money to proceed."
    },
    {
      number: "2",
      title: "Share Details on WhatsApp",
      description: "You'll be redirected to WhatsApp to provide your recipient details and receive Interac e-Transfer instructions."
    },
    {
      number: "3",
      title: "Make Payment",
      description: "Complete the Interac e-Transfer, and we'll keep you updated on the transaction status. New users must complete KYC before their first transfer."
    },
    {
      number: "4",
      title: "Money Delivered in 1-3 Days",
      description: "Funds are securely processed and delivered quickly. We'll notify you once the transfer is complete."
    }
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md md:mr-6">
        <h2 className="text-blue-600 font-semibold text-lg">Just 4 easy steps</h2>
        <h1 className="text-2xl font-bold mt-2">How to <span className="text-green-600">send money</span> to India?</h1>
        <div className="mt-6 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-600">{step.number}</h3>
              <h4 className="font-bold mt-2">{step.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
     <ExchangeBox/>
    </div>
  );
};



export default MoneyTransfer;

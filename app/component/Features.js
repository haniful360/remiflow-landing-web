
import React from "react";

const features = [
  {
    title: "Better Rates, More Savings",
    description: "Get the highest exchange rates so your loved ones receive more.",
    icon: "💳", // Replace with appropriate icon
  },
  {
    title: "Cash Pickup Service",
    description: "Cash Pickup Service – Located in GTA? We’ll pick up your cash for added convenience.",
    icon: "💵", // Replace with appropriate icon
  },
  {
    title: "Seamless Transfers",
    description: "Pay using e-transfer or cash. We don’t store your credit or debit card information.",
    icon: "💰", // Replace with appropriate icon
  },
  {
    title: "Zero Fees, Zero Hassles",
    description: "No hidden charges, no surprises – just pure value.",
    icon: "0️⃣", // Replace with appropriate icon
  },
  {
    title: "Fast Processing",
    description: "Funds delivered within 1-3 days no waiting, no delays.",
    icon: "🚀", // Replace with appropriate icon
  },
  {
    title: "Trusted & Secure",
    description: "Your money is handled with the highest safety standards.",
    icon: "✅", // Replace with appropriate icon
  },
];

const Features = () => {
  return (
   <div className="bg-[url(/images/about_us.png)] bg-center bg-no-repeat bg-cover">
     <div className="py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-orange-500">Why Choose Remiflow?</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            <span className="text-orange-400 text-2xl">“</span>
            Built by immigrants, for immigrants – sending money home isn’t just a transaction; it’s a connection. We know
            every rupee counts. That’s why we make sure you get the best value, so your hard-earned money goes further
            for the people who matter most.
            <span className="text-orange-400 text-2xl">”</span>
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Features;

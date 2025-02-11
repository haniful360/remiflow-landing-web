import React from "react";
import feature1 from "@/public/images/features/1.svg";
import feature2 from "@/public/images/features/2.svg";
import feature3 from "@/public/images/features/3.svg";
import feature4 from "@/public/images/features/4.svg";
import feature5 from "@/public/images/features/5.svg";
import feature6 from "@/public/images/features/6.svg";
import quote1 from "@/public/images/features/quote-1.svg";
import quote2 from "@/public/images/features/quote-2.svg";
import Image from "next/image";

const features = [
  {
    title: "Better Rates, More Savings",
    description:
      "Get the highest exchange rates so your loved ones receive more.",
    icon: feature1, // Replace with appropriate icon
  },
  {
    title: "Cash Pickup Service",
    description:
      "Cash Pickup Service – Located in GTA? We’ll pick up your cash for added convenience.",
    icon: feature2, // Replace with appropriate icon
  },
  {
    title: "Seamless Transfers",
    description:
      "Pay using e-transfer or cash. We don’t store your credit or debit card information.",
    icon: feature3, // Replace with appropriate icon
  },
  {
    title: "Zero Fees, Zero Hassles",
    description: "No hidden charges, no surprises – just pure value.",
    icon: feature4, // Replace with appropriate icon
  },
  {
    title: "Fast Processing",
    description: "Funds delivered within 1-3 days no waiting, no delays.",
    icon: feature5, // Replace with appropriate icon
  },
  {
    title: "Trusted & Secure",
    description: "Your money is handled with the highest safety standards.",
    icon: feature6, // Replace with appropriate icon
  },
];

const Features = () => {
  return (
    <div className="lg:h-[860px] font-poppins flex items-center justify-center bg-[url(/images/about_us.png)] bg-center bg-no-repeat bg-cover">
      <div className="py-12">
        <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 flex-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
              >
                {/* <div className="text-4xl mb-4">{feature.icon}</div> */}
                <Image
                  className="absolute -top-8 "
                  src={feature?.icon}
                  alt=""
                  width={64}
                  height={64}
                />
                <h3 className="text-lg lg:text-[20px] font-semibold text-[#2B95FA] pt-10 mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#33333380] text-sm max-w-[285px] text-[18px]">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-[480px] text-center lg:text-left">
            <h2 className="text-2xl font-noto lg:text-[38px] font-semibold leading-[55px] text-[#FA6D2BF7]">
              Why Choose Remiflow?
            </h2>
            <div className="text-[#607D8B] text-center font-poppins leading-[31px] mt-4 text-lg">
              <div className="flex items-start">
                <div className="mr-2">
                  <Image
                    src={quote2}
                    alt="Opening quote"
                    width={45}
                    height={45}
                  />

                </div>
                <p className="max-w-[368px]">
                  Built by immigrants, for <br /> immigrants – sending money{" "}
                  <br /> home isn’t just a transaction; <br /> it’s a
                  connection. We know <br /> every rupee counts. That’s <br />{" "}
                  why we make sure you get the <br /> best value, so your hard-{" "}
                  <br />
                  earned money goes further for <br /> the people who matter
                  most.
                </p>
              </div>
              <div className="flex justify-end relative right-24 -mt-2">
                <Image
                  src={quote1}
                  alt="Closing quote"
                  width={45}
                  height={45}
                />{" "}
                {/* Adjust width and height as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

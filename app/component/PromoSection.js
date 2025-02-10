import React from 'react';

const PromoSection = () => {
    return (
        <div className="bg-blue-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Start Sending Money & Saving Today!
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Make the smart choice – experience RemiFlow now and enjoy the best exchange
          rates with zero fees.
        </p>
        <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
          Get Started Now
        </button>
        <p className="mt-6 text-xs sm:text-sm md:text-base">
          Switch to RemiFlow Today – Send More, Save More – Zero Fees, Maximum Happiness!
        </p>
      </div>
    );
};

export default PromoSection;
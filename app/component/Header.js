import React from 'react';
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
const Header = () => {
    return (
        <header className="w-full h-[120px] flex justify-center shadow-md bg-white">
        <div className="max-w-[1250px] w-full flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 flex items-center"
          >
            <Image src={logo} alt="Logo" width={220} height={63} />{" "}
            {/* Adjust width and height as needed */}
          </Link>
          <nav className="font-poppins md:flex items-center gap-6">
            <Link href="#" className="text-gray-700">
              Home
            </Link>
            <Link href="#" className="text-gray-700">
              FAQ
            </Link>
            <Link href="#" target="_blank" className="text-gray-700">
              <button className="bg-[#2B95FA] lg:w-[152px] lg:h-[48px] rounded-[30px] text-white px-6 py-2">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      </header>
    );
};

export default Header;
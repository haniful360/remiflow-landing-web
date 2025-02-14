"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import CrossIcon from "./svg/CrossIcon";
import MenuIcon from "./svg/MenuIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full h-[80px] md:h-[100px] flex justify-center shadow-md bg-white">
        <div className="max-w-[1250px] w-full flex justify-between items-center px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={180}
              height={50}
              className="w-[140px] md:w-[180px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-[#2B95FA] transition"
            >
              Home
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-[#2B95FA] transition"
            >
              FAQ
            </Link>
            <Link href="#" target="_blank">
              <button className="bg-[#2B95FA] lg:w-[152px] lg:h-[48px] rounded-[30px] text-white px-6 py-2 transition hover:bg-[#1A7AC4]">
                Get Started
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CrossIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[50%] sm:w-[50%] h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col items-start p-6 z-50`}
      >
        <button
          className="self-end text-gray-700 mb-4"
          onClick={() => setIsOpen(false)}
        >
          <CrossIcon />
        </button>
        <Link
          href="#"
          className="text-gray-700 py-2 text-lg w-full"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#faq"
          className="text-gray-700 py-2 text-lg w-full"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </Link>
        <Link href="#" target="_blank" className="w-full">
          <button className="bg-[#2B95FA] w-full rounded-[30px] text-white py-3 mt-4">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;

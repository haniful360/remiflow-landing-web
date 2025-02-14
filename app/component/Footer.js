import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/public/images/logo.svg";
import x from "@/public/images/X Logo.svg";
import youtube from "@/public/images/Logo YouTube.svg";
import linkedIn from "@/public/images/LinkedIn.svg";
import instagram from "@/public/images/Logo Instagram.svg";

const Footer = () => {
    return (
        <footer className="bg-[#F9FAFB] text-gray-800 text-sm">
      <div className="max-w-[1250px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div data-aos="fade-up">
          <h2 className="text-xl font-bold flex items-center space-x-2">
          <Link href="/">
        <Image src={logo} alt="" width={198} height={53} />
        </Link>
          </h2>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image src={x} alt="" width={24} height={24} /></Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900"><Image src={instagram} alt="" width={24} height={24} /></Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900"><Image src={youtube} alt="" width={24} height={24} /></Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900"><Image src={linkedIn} alt="" width={24} height={24} /></Link>
          </div>
        </div>
        <div className='font-poppins' data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">Use cases</h3>
          <ul className="space-y-2 text-[#1E1E1E]">
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div className='font-poppins' data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-2 text-[#1E1E1E]">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div className='font-poppins' data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-2 text-[#1E1E1E]">
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Blog</li>
            <li>Refer a Friend</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
        
      </div>

      <div className='bg-[#F9FAFB] border-t'>
      <div className="max-w-[1250px] mx-auto flex items-center gap-10 py-4">
        <Link href="/">
        <Image src={logo} alt="" width={198} height={53} />
        </Link>
        <p className='text-[#134370] text-[16px] leading-[26px]'>© 2025 Remiflow. All Rights Reserved.</p>
      </div>
      </div>
      
    </footer>
    );
};

export default Footer;
import Link from "next/link" ;
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    
    <header>
      {/* Top Bar */}
      <div className="flex justify-between items-centerpy-2 px-4 border-b border-gray-300 bg-primary ">
        {/* Left: Phone and Email */}
        <div className="flex items-center space-x-4">
          <p className="text-sm text-black"> Phone Number: 956 742 455 678</p>
          <p className="text-sm text-slate-400">|</p>
          <p className="text-sm text-black">Email:info@ddsgnr.com</p>
        </div>

 
        {/* Right: Social Media Icons */}
        <div className="flex items-center space-x-4 py-2 grid-flow-col ">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-black text-xl" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-xl" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-black text-xl" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black text-xl" />
          </Link>
        </div>
      </div>
      

      {/* Main Header */}
      <div className="flex items-center justify-between py-4 px-16 bg-primary">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-4">
          <Image src="/Frame 1.png"
           alt="Website Logo" 
           width={30}
           height={32}
     /> 
          <h1 className="text-xl font-bold text-black">Ddsgnr</h1>
        </div>
        <div className="flex space-x-4 px-4 py-2 bg-white  ">
        {/* Center: Navigation Links */}
        <nav className="flex space-x-16 px-2.5 py-2.5 ">
          <Link href="#home" className="text-black">
            Home
          </Link>
          <Link href="#course" className="text-black">
            Course
          </Link>
          <Link href="#services" className="text-black">
            Services
          </Link>
          <Link href="#achievements" className="text-black">
            Achievements
          </Link>
          <Link href="#about" className="text-black">
            About us
          </Link>
          <Link href="#testimonial" className="text-black">
            Testimonial
          </Link>
        </nav>
          <button className=" flex space-x-4 px-5 py-2 text-black bg-white border border-black rounded">
            Login
          </button>
          <button className=" flex space-x-4 px-5 py-2 text-white bg-black rounded">
            Signup
          </button>
        
        </div>
        </div>
        
      
    </header>
    
  );
};

export default Header;

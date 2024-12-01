import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="flex items-center justify-between px-20 py-8 bg-white">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="font-bold text-4xl lg:text-7xl mb-6 text-black">
          Learn new skills online with ease
        </h1>
        <p className=" text-2xl lg:text-2xl mb-6 text-gray-700">
          Discover a wide range of courses covering a variety of <br/> subjects, taught by expert instructors.
        </p>
        <div className="flex gap-6">
          <button className="px-5 py-3 text-white bg-black border border-black rounded">
            Get Started
          </button>
          <button className="px-5 py-3 text-black bg-white border border-black rounded">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <Image 
          src="/Image1.png" width={640} height={900}
          alt="Learning "
          className='h-full'
        />
      </div>
    </div>
    
  );
};

export default Hero;

import React from 'react'
import Image from 'next/image'
const Explore = () => {
  return (
    
    <div className="p-8 mt-20">
    {/* Heading and Paragraph Section */}
    <div className="text-center mb-8">
      <h1 className="text-6xl font-bold ">Explore Courses By Category</h1>
      <p className="mt-4 text-lg font-roboto">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
    </div>

    {/* Courses Grid */}
    <div className="flex flex-wrap justify-between p-4 gap-4">
      {/* First Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/ist.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Design & Development</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Second Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/sound.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Marketing</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Third Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/3.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Development</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Fourth Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/4.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Communication</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Fifth Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/5.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Digital Marketing</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Sixth Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/7.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Self Development</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Seventh Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/10.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Business</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Eighth Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/9.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Finance</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>

      {/* Ninth Category */}
      <div className="flex items-center w-[400px] h-[100px] bg-[#F7F7F7]">
        <div className="mr-4 mx-4">
          <Image src={"/8.png.png"} width={80} height={80} alt="img" />
        </div>
        <div>
          <h1 className="font-bold">Consulting</h1>
          <p>50+ Courses Available</p>
        </div>
      </div>
    </div>

    {/* View All Courses Button */}
    <div className="flex justify-center w-full mt-4">
      <button className="bg-white text-black border px-6 py-2 rounded">View All Courses</button>
    </div>
  </div>

     
     
    


      
    
  )
}

export default Explore

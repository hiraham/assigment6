import React from 'react'
import Image from 'next/image'
const Edit = () => {
  return (
    <div className='flex justify-between items-centerpy-2 px-4 border-b border-gray-300 bg-primary'>
      <h1 className='w-[320] h-[68px] p-6 font-bold'>Trusted by 2000+ companies worldwide.</h1>
      <div >
        <Image src="/Logos.png" alt="logo" width={880} height={56} className='flex  space-x-4 py-4 pr-12 '/>
      </div>
    </div>
  )
};

export default Edit;
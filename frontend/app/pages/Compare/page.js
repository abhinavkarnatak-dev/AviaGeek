import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='w-full h-screen bg-[#19232D]'>
    <Navbar hasBorder={true} isTransparent={false}/>
        <div className="container mx-auto p-4">
          <h1
            className="text-2xl lg:text-3xl font-bold mt-6 mb-8 text-[#FFF] text-center"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Compare
          </h1>
        </div>
    </div>
    </>
  )
}

export default page
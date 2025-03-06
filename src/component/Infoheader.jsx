import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Infoheader = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row justify-between w-full sm:px-16 md:px-32 py-10 shadow-lg shadow-gray-300 rounded-2xl font-medium text-sm text-center mb-32'>
        <div >
            <div className='w-8 h-8 rounded-full text-white bg-amber-500 flex items-center mx-auto justify-center mb-1'><CiClock2 /></div>
            <p>Today 9:00am - 4:00pm</p>
            <p className='text-xs'>Working time</p>
        </div>

        <div className='w-[1px] bg-gray-600'></div>

        <div>
            <div className='w-8 h-8 rounded-full text-white bg-amber-500 flex items-center mx-auto justify-center mb-1'><CiLocationOn /></div>
            <p>IIST, Rau , INDORE</p>
            <p className='text-xs'>Our Location</p>
        </div>

        <div className='w-[1px] bg-gray-600'></div>

        <div>
            <div className='w-8 h-8 rounded-full text-white bg-amber-500 flex items-center mx-auto justify-center mb-1'><FiPhoneCall /></div>
            <p>+0123 456 7891</p>
            <p className='text-xs'>Phone Number</p>
        </div>
    </div>
  )
}

export default Infoheader
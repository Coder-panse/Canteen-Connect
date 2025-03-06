import React from 'react'

const Service = () => {
    const data=[
        {
            image:"",
            name:"Qualityfull Food",
            des:"But I must explain to you how all thismistaken idea of denouncing pleasur andprasising pain was bron"
        },
        {
            image:"",
            name:"Healthy Food",
            des:"But I must explain to you how all thismistaken idea of denouncing pleasur andprasising pain was bron"
        },
        {
            image:"",
            name:"Fast Delivery",
            des:"But I must explain to you how all thismistaken idea of denouncing pleasur andprasising pain was bron"
        }]
  return (
    <div className='w-full ' id='service'>

        <div className='mt-20 mb-10 text-center'>
            <p className='text-orange-400'>Services</p>
            <h1 className='text-2xl font-semibold'>Why Choose Our Favorite Food</h1>
        </div>
            <div className='flex flex-col gap-5 sm:flex-row justify-center md:gap-12 mt-16 '>
                {
                    data.map((item,index)=>(
                        <div key={index} className='px-5 py-2 rounded-md shadow-lg sm:px-8 sm:py-4 text-center md:w-[250px] '>
                        <h1 className='text-sm pb-4 font-medium'>{item.name}</h1>
                        <p className='text-xs'>{item.des}</p>
                        </div>
                    ))
                }
            
            </div>

    </div>
  )
}

export default Service
import React from 'react'

const Ourpassionate = () => {
    return (
        <div className='flex justify-center bg-white h-screen'>
            <div className='w-[70%] grid grid-cols-2 items-center gap-4 relative'>
                <div className='absolute'> 
                    <p className='font-bold'>Welcome to Imaginex Design StudiO
                    </p>
                    <p className='text-[#30A5A2] font-semibold text-[30px] '>
                    we bring your visions to life
                    </p>
                    <p className='text-black font-semibold'>
                    Design is more than just aesthetics; it’s about
                    </p>
                    <p className='text-[#30A5A2] font-semibold text-[30px]'>
                    solving problems and 
                    
                    </p>
                    <p className='text-[#30A5A2] font-semibold text-[30px]'>communicating ideas.</p>
                </div>
                <div className='relative left-96'>
                    <img src="https://res.cloudinary.com/dagmm478n/image/upload/v1736755527/imagineX/herobanner_w5szm4.png" alt="banner" className='w-full' />
                    <img src="https://res.cloudinary.com/dagmm478n/image/upload/v1736755526/imagineX/man_jbmiao.png" alt="man" className='absolute top-1 h-48 right-32' />
                </div>
                <div className='text-center absolute right-96 top-96'>
                    <button className='bg-yellow-400 text-black px-6 py-1 text-center rounded-3xl text-sm hover:text-white '>Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Ourpassionate
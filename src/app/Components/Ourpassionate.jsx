import React from 'react'

const Ourpassionate = () => {
    return (
        <div className='flex justify-center bg-[#52c1ac] h-screen'>
            <div className='w-[70%] grid grid-cols-2 items-center gap-4 relative'>
                <div>
                    <p className='text-white text-[30px] font-bold'>Our passionate team of
                        designers, developers, and artists
                    </p>
                    <p className='text-black font-semibold'>
                        work together to create stunning and effective
                        digital and print designs.
                    </p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dagmm478n/image/upload/v1727520637/imagineX/Screenshot_2024-09-28_160455_x3safr.png" alt="" />
                </div>
                <div className='text-center absolute right-96 top-96'>
                    <button className='bg-yellow-400 text-black px-6 py-1 text-center rounded-3xl text-sm'>Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Ourpassionate
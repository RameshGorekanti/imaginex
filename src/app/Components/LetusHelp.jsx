import React from 'react'

const LetusHelp = () => {
    return (
        <div className='flex justify-center h-screen bg-[#52C1AC]'>
            <div className='w-[70%] grid grid-cols-2 items-center gap-4 relative'>
                <div>

                    <p className='text-black font-semibold'>
                        Let us help you make your mark with
                    </p>
                    <p className='text-[#52c1ac] text-[30px] font-bold'>innovative and tailor-made design
                        solutions.
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

export default LetusHelp
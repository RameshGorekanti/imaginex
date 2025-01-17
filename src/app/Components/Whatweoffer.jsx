import React from 'react'

const Whatweoffer = () => {
    return (
        <div className='flex justify-center bg-[#52c1ac] h-screen'>
            <div className='w-[70%] relative'>
                <div className='mt-36'>
                    <p className=''> Services <br />
                        <span className='font-semibold text-[25px]'>What We Offer</span>
                    </p>

                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-4 gap-8">

                        <ul className="space-y-2 text-sm">
                            <li>Logo Design</li>
                            <li>Brand Identity</li>
                            <li>Print Materials (brochures, flyers, posters)</li>
                            <li>Web Design & Development</li>
                        </ul>

                        <ul className="space-y-2 text-sm">
                            <li>Custom Websites</li>
                            <li>E-commerce Solutions</li>
                            <li>Responsive Design</li>
                            <li>Digital Marketing</li>
                        </ul>

                        <ul className="space-y-2 text-sm">
                            <li>Social Media Graphics</li>
                            <li>Email Marketing Campaigns</li>
                            <li>Digital Advertising</li>
                            <li>Illustration & Animation</li>
                        </ul>
                        <ul className="space-y-2 text-sm">
                            <li>Social Media Graphics</li>
                            <li>Email Marketing Campaigns</li>
                            <li>Digital Advertising</li>
                            <li>Illustration & Animation</li>
                        </ul>
                    </div>
                </div>
                <div className='text-center absolute right-96'>
                    <button className='bg-yellow-400 text-black px-6 py-1 text-center rounded-3xl text-sm hover:text-white '>Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Whatweoffer
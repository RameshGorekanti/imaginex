import React from 'react'

const Meettheteam = () => {
    return (
        <div className='flex justify-center h-screen bg-[#f4f6f6]'>
            <div className='w-[70%] relative'>
                <div className='mt-36'>
                    <p className=''>  Meet the Team <br />
                        <span className='font-semibold text-[25px] text-[#52c1ac]'> The Creatives Behind Imaginex</span><br />
                       
                    </p>

                </div>
                <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="text-center">
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                <p className="text-sm text-gray-600">Founder & Creative Director</p>
                <div className="mt-4 w-24 h-24 mx-auto bg-black rounded-full"></div>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                    <li>Social Media Graphics</li>
                    <li>Email Marketing Campaigns</li>
                    <li>Digital Advertising</li>
                    <li>Illustration & Animation</li>
                </ul>
            </div>
            
            <div className="text-center">
                <h3 className="text-lg font-semibold">John Smith</h3>
                <p className="text-sm text-gray-600">Lead Designer</p>
                <div className="mt-4 w-24 h-24 mx-auto bg-black rounded-full"></div>
                <p className="mt-4 text-sm text-gray-600">
                    John's expertise in graphic design and branding helps our clients stand out in their industries.
                </p>
            </div>
           
            <div className="text-center">
                <h3 className="text-lg font-semibold">Sarah Lee</h3>
                <p className="text-sm text-gray-600">Web Developer</p>
                <div className="mt-4 w-24 h-24 mx-auto bg-black rounded-full"></div>
                <p className="mt-4 text-sm text-gray-600">
                    Sarah specializes in creating user-friendly and visually stunning websites.
                </p>
            </div>
            
            <div className="text-center">
                <h3 className="text-lg font-semibold">Alex Brown</h3>
                <p className="text-sm text-gray-600">Digital Marketing Specialist</p>
                <div className="mt-4 w-24 h-24 mx-auto bg-black rounded-full"></div>
                <p className="mt-4 text-sm text-gray-600">
                    Alex's innovative marketing strategies ensure our clients reach their target audience effectively.
                </p>
            </div>
        </div>
    </div>
                
            </div>

        </div>
    )
}

export default Meettheteam
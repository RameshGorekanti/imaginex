import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center fixed top-0 bg-white w-full z-50'>
            <div className='flex justify-between w-[75%] p-8'>
                <div>
                   <img src="https://res.cloudinary.com/dagmm478n/image/upload/v1727520637/imagineX/Screenshot_2024-09-28_160455_x3safr.png" alt="img" className='w-28'/>
                </div>
                <div>
                    <div>
                        <nav className="flex justify-between items-center gap-4">
                           
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-gray-800 hover:underline hover:text-teal-600">Home</a></li>
                                <li><a href="#" className="text-gray-800  hover:underline hover:text-teal-600">Services</a></li>
                                <li><a href="#" className="text-gray-800  hover:underline hover:text-teal-600">Contact</a></li>
                                <li><a href="#" className="text-gray-800  hover:underline hover:text-teal-600">Portfolio</a></li>
                            </ul>
                           
                            <a href="#" className="bg-[#FFCE00] text-black font-medium px-8 py-1 rounded-3xl hover:bg-yellow-500 hover:text-white">
                                Login
                            </a>
                        </nav>
                    </div>
                </div>
            </div></div>
    )
}

export default Header
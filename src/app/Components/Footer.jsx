import React from 'react'
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-[#52c1ac] h-14 mt-6'>
        <div className='flex justify-between w-[70%] items-center'>
            <div>
                <h1 className='text-white text-xs'>© Copyright  imagineX.com 2024 All Rights Reserved.</h1>
            </div>
            <div>
            <div className="flex gap-4 hover:cursor-pointer">

                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                {/* <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" /> */}
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                {/* <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" /> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
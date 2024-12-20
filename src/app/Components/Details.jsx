import React from 'react'

const Details = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between w-[70%]'>
                <div>
                    <p className='text-xs font-semibold'>Contact Us <br />
                        Let’s Start a Project Together</p>
                    <p className='mt-6 text-xs'>We’d love to hear from you! <br />
                        Whether you have a question <br />
                        or want to discuss a new project, <br />
                        feel free to reach out</p>
                </div>
                <div className='text-end'>
                    <h1 className='font-bold text-2xl text-[#52c1ac]'>Imagine X Design Studio</h1>
                    <p className='text-base'>
                    Phone: (123) 456-7890 <br />
 Email: info@imaginexdesign.com <br />
 Website: www.imaginexdesign.com <br />
 Address: 123 Creative Lane, Design City, DC 56789 <br />
 Follow us on social media:
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details
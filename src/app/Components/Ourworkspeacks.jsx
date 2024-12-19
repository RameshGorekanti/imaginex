import React from 'react'

const Ourworkspeacks = () => {
    return (
        <div className='flex justify-center h-screen'>
            <div className='w-[70%] relative'>
                <div className='mt-36'>
                    <p className=''>  Portfolio <br />
                        <span className='font-semibold text-[25px] text-[#52c1ac]'> Our Work Speaks for Itself</span><br />
                        <span className='text-[15px]'>
                            Branding Projects<br />
                            Learn more
                            ModernTech Solutions: A complete brand overhaul including a new logo, business cards, and stationery.
                            EcoLife Organics: A fresh, eco-friendly brand identity with a focus on sustainability
                        </span>
                    </p>

                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-3 gap-8">

                        <ul className="space-y-2 text-sm">
                            <li className='font-bold'>Web Design Projects</li>
                            <li>Fashionista Boutique: </li>
                            <li>
                                A stylish and responsive
                                e-commerce site that captures
                                the essence of modern fashion</li>
                        </ul>

                        <ul className="space-y-2 text-sm">
                            <li className='font-bold'>TravelExplore: </li>
                            <li>
                                An immersive travel blog
                                platform with integrated
                                social media sharing features.
                                Digital Marketing Campaigns
                            </li>
                        </ul>

                        <ul className="space-y-2 text-sm">
                            <li className='font-bold'>Summer Splash Event: </li>
                            <li> Social media and email campaign that
                                increased event attendance by 35%</li>
                        </ul>
                       
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                    <ul className="space-y-2 text-sm">
                            <li className='font-bold'>Summer Splash Event: </li>
                            <li> Social media and email campaign that increased event attendance by 35%.
                            </li>
                            <li>Winter Wonderland Sale: Holiday promotion that boosted online sales by 50%.</li>
                            
                        </ul>
                        <div className=''>
                    <button className='bg-yellow-400 text-black px-6 py-1 text-center rounded-3xl text-sm'>Learn More</button>
                </div>

                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Ourworkspeacks
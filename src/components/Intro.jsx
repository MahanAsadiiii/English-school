import React from 'react'
import { IntroImg, IntroBgImg } from '../utilities/Images.jsx'
import { Teacher, Money } from "iconsax-react"


function Intro() {
    return (
        <div className='mt-16'>
            <img src={IntroBgImg} alt="" className='absolute top-0 left-0 -z-50' />
            <div className='flex w-full justify-between'>
                <div className="flex flex-col justify-end basis-2/5 pb-16">
                    <h1 className='text-6xl font-bold font-[lato]  '>Watch movies and learn languages</h1>
                    <p className='text-[#7B8188] text-3xl font-[lato] mt-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                    <div className="flex mt-8">
                        <a href="" className='bg-[#5F35F2] flex text-white items-center py-5 px-8 mr-5 ' style={{clipPath: 'polygon(0 0, 100% 0%, 85% 100%, 0% 100%)'}}><Teacher variant="Bold"/> Get Started</a>
                        <a href="" className='flex text-[#5F35F2] items-center border-2 border-[#5F35F2] py-5 px-7'><Money variant="Bold"/>Pricing</a>
                    </div>
                </div>
                <div className="">
                    <img src={IntroImg} alt="" className='relative' />
                </div>
            </div>
        </div>
    )
}

export { Intro }
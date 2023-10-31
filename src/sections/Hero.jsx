// import React from 'react';
import heroImg from '../assets/hero4.avif';  
import {Button} from '../components/Button.jsx'

const Hero = () => {
    return(
        <div className="flex lg:flex-row md:flex-col mt-10 justify-between w-full items-center py-4 px-4 md:px-16">
            <div className=" w-[60%] flex flex-col gap-3">
                <h1 className='lg:text-6xl mb-4 w-[65%] font-semibold lg:leading-[3.8rem]'>Feel, Eat & Enjoy The True Taste Of Africa</h1>
                <p className='mb-4 w-[70%]'>Food taste better, when you eaten with family and friends. At Huddle, we cater for all your tasty and yummy cravings while ensuring you are satisfied with our services.</p>
                <Button text={"Get started"} className="text-white"></Button>
            </div>
            <div className="right">
                <img className='rounded-full h-[500px] object-cover' src={heroImg} alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero;
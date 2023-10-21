// import React from 'react';
import heroImg from '../assets/hero4.avif';  
import {Button} from '../components/Button.jsx'

const Hero = () => {
    return(
        <div className="flex lg:flex-row md:flex-col mt-10 justify-between w-full items-center py-4 px-4 md:px-14">
            <div className="left">
                <h1 className='text-6xl mb-4 w-2/4 font-semibold'>Meet, eat & enjoy the true taste.</h1>
                <p className='mb-4'>Food taste better, when you eaten with family and friends</p>
                <Button text={"Get started"}></Button>
            </div>
            <div className="right">
                <img className='rounded-full' src={heroImg} alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero;
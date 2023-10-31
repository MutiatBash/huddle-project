// import React from 'react';
import chefImg from '../assets/chef.avif';  

const Chef = () => {
    return(
        <div className="flex md:col mt-10 justify-between w-full items-center py-4 px-4 md:px-14 lg:px-16">
            <div className="w-[60%]">
                <h1 className='text-5xl mb-4 w-3/5 font-semibold '>Cooked by the best chefs in the world.</h1>
                <p className='mb-4 text-lg lg:w-[75%]'>There are many variations of our meals available, we also have altercations. One thing is certain</p>
                <div>
                    <div className="check1 flex gap-3">
                        <i className="ri-checkbox-line"></i>
                        <p className='text-lg'>A guaranteed delicious meal</p>
                    </div>
                    <div className="check1 flex gap-3">
                        <i className="ri-checkbox-line"></i>
                        <p className='text-lg'>Food is hygenic</p>
                    </div>
                    <div className="check1 flex gap-3">
                        <i className="ri-checkbox-line"></i>
                        <p className='text-lg'>Cooked quickly</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='rounded-full' src={chefImg} alt="hero-image" />
            </div>
        </div>
    )
}

export default Chef;
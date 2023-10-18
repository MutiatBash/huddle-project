import React from 'react';
import plate1 from '../assets/heroImg.jpeg';  
// import {Button} from '../Components/Button'

const Dish = () => {
    return(
        <div className="md:col mt-10 w-full items-center py-4 px-4 md:px-14">
            <h1 className='text-4xl mb-4 font-semibold text-center'>Our special dish</h1>
            <p className='mb-4 text-center text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, fuga.</p>
                {/* <Button text={"Get started"}></Button> */}
                <div className="boxes flex lg:flex-row mt-4 text-center justify-between md:flex-col">
                    <div className="box1 px-10 py-5 shadow-xl">
                        <img className='rounded-full mx-auto w-32 mb-2' src={plate1} alt="" />
                        <h3>Chicken veg mix</h3>
                        <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ullam.</p>
                        <div className="star text-3xl ">
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                        </div>
                        <div className="flex justify-between my-3 mx-20">
                            <p className='pt-2'>$50</p>
                            <button className='rounded-md hover:bg-[#ff4e18ee] bg-[#ff7518] py-2 px-2 text-white text-sm'>Add to cart</button>
                        </div>
                    </div>
                    <div className="box2 px-10 py-5 shadow-xl">
                        <img className='rounded-full mx-auto w-32 mb-2' src={plate1} alt="" />
                        <h3>Chicken veg mix</h3>
                        <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ullam.</p>
                        <div className="star text-3xl ">
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                        </div>
                        <div className="flex justify-between my-3 mx-20">
                            <p className='pt-2'>$50</p>
                            <button className='rounded-md hover:bg-[#ff4e18ee] bg-[#ff7518] py-2 px-2 text-white text-sm'>Add to cart</button>
                        </div>
                    </div>
                    <div className="box3 px-10 py-5 shadow-xl">
                        <img className='rounded-full mx-auto w-32 mb-2' src={plate1} alt="" />
                        <h3>Chicken veg mix</h3>
                        <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ullam.</p>
                        <div className="star text-3xl ">
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                            <i className="ri-star-fill text-[#ff7518]"></i>
                        </div>
                        <div className="flex justify-between my-3 mx-20">
                            <p className='pt-2'>$50</p>
                            <button className='rounded-md hover:bg-[#ff4e18ee] bg-[#ff7518] py-2 px-2 text-white text-sm'>Add to cart</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dish;
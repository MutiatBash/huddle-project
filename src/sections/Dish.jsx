import React from 'react';
import plate1 from '../assets/heroImg.jpeg';  
// import {Button} from '../Components/Button'

const Dish = () => {
    return(
        <div className="md:col mt-10 w-full items-center py-4 px-4 md:px-14">
            <h1 className='text-4xl mb-4 font-semibold text-center'>Our special dish</h1>
            <p className='mb-4 text-center text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, fuga.</p>
                {/* <Button text={"Get started"}></Button> */}
                <div className="boxes">
                    <div className="box1">
                        <img className='rounded-full w-32' src={plate1} alt="" />
                        <h3>Chicken veg mix</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ullam.</p>
                        <div className="star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="flex">
                            <p>$50</p>
                            <button>Add to cart</button>
                        </div>
                    </div>
                    <div className="box2">
                    <img className='rounded-full w-32' src={plate1} alt="" />
                        <h3>Chicken veg mix</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ullam.</p>
                        <div className="star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="flex">
                            <p>$50</p>
                            <button>Add to cart</button>
                        </div>
                    </div>
                    <div className="box3">
                    <img className='rounded-full w-32' src={plate1} alt="" />
                        <h3>Chicken veg mix</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ullam.</p>
                        <div className="star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="flex">
                            <p>$50</p>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dish;
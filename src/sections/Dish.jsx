// import React from 'react';
import plate1 from '../assets/main.jpg';  
import plate2 from '../assets/heroImg.jpeg';  
import plate3 from '../assets/main1.jpg';  
// import {Button} from '../Components/Button'

const Dish = () => {
    return (
      <div className="md:col mt-10 w-full items-center py-4 px-4 md:px-14">
        <h2 className="text-5xl mb-4 font-semibold text-center">
          Our special dish
        </h2>
        <p className="mb-4 text-center text-base pb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
          fuga.
        </p>
        {/* <Button text={"Get started"}></Button> */}
        <div className="boxes grid lg:grid-cols-3 py-4 mt-4 text-center justify-between md:flex-col gap-8">
          <div className="box1 px-10 py-5 shadow-md flex flex-col gap-3 rounded-lg">
            <img
              className="rounded-full mx-auto w-32 mb-2"
              src={plate1}
              alt=""
            />
            <h3 className="font-semibold text-2xl">Chicken veg mix</h3>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, ullam.
            </p>
            <div className="star text-xl ">
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
            </div>
            <div className="flex justify-between my-3 mx-20">
              <p className="pt-2">$50</p>
              <button className="rounded-md hover:bg-[#ff4e18ee] bg-[#ff7518] py-2 px-2 text-white text-sm">
                Add to cart
              </button>
            </div>
          </div>
          <div className="box1 px-10 py-5 shadow-md flex flex-col gap-3 rounded-lg">
            <img
              className="rounded-full mx-auto w-32 mb-2"
              src={plate2}
              alt=""
            />
            <h3 className="font-semibold text-2xl">Chicken veg mix</h3>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, ullam.
            </p>
            <div className="star text-xl ">
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
            </div>
            <div className="flex justify-between my-3 mx-20">
              <p className="pt-2">$50</p>
              <button className="rounded-md hover:bg-[#ff4e18ee] bg-[#ff7518] py-2 px-2 text-white text-sm">
                Add to cart
              </button>
            </div>
          </div>
          <div className="box1 px-10 py-5 shadow-md flex flex-col gap-3 rounded-lg">
            <img
              className="rounded-full mx-auto w-32 mb-2"
              src={plate3}
              alt=""
            />
            <h3 className="font-semibold text-2xl">Chicken veg mix</h3>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, ullam.
            </p>
            <div className="star text-xl ">
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
              <i className="ri-star-fill text-[#ff7518]"></i>
            </div>
            <div className="flex justify-between my-3 mx-20">
              <p className="pt-2">$50</p>
              <button className="rounded-md hover:bg-[#ff4e18ee] bg-[#ff7518] py-2 px-2 text-white text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dish;
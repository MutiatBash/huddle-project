import React from 'react'
import aboutImage from '../assets/chef.png';
import productImage from '../assets/snacks.png';
const AboutUs =() => {
  return (
    <section className='py-16 mt-9' >
      <div className="container mx-auto flex flex-col md:flex-row  items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={aboutImage}alt="" className='w-full h-auto rounded-md' />
        </div>
        <div className="md:w-1/2">
           <h2 className="text-4xl font-bold text-orange-600">About Us</h2>
           <p className="text-lg mb-8"> Welcome to Huddle, where we've taken the delightful flavors of Africa and wrapped them into the most irresistible finger foods you've ever tasted. We're not just about food; we're about sparking a sense of wonder in every bite. At Huddle, we are redefining the way you experience the vibrant culinary world of Africa, all while embracing modern sensibilities.
        </p>
        </div>
       
        
      </div>

      <div className="container mx-auto flex flex-col md:flex-row  items-center">
        <div className="md:w-1/2 mt-11 mb-8 md:mb-0">
          <img src={productImage}alt="" className='w-1/2 h-auto rounded-md' />
        </div>
        <div className="md:w-1/2">
           <h2 className="text-4xl font-bold text-orange-600">Crafting Flavors</h2>
           <p className="text-lg mb-8"> 
           Our commitment to authenticity is the cornerstone of Huddle. Each dish we create is a labor of love, drawing inspiration from the rich traditions of Africa. Our culinary artists work tirelessly to bring you finger foods that encapsulate the essence of the continent while infusing a modern twist.
        </p>
        </div>
       
        
      </div>
      </section>
    
  )
}

export default AboutUs;
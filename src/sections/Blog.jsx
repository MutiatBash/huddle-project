// import React from "react";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img1.jpg';
import img3 from '../assets/img1.jpg';
const Blog = () => {
    return (
      <div>
        <div className="blogWrapper mb-[70px]">
          <div className="blogHead text-center my-[70px]">
            <h2 className="font-bold text-2xl">Blog Our Latest News</h2>
            <p className="w-[600px] mx-auto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque voluptas 
              repudiandae quos numquam vero. Doloribus, reiciendis? Voluptates, </p>
          </div>
          <div className="blogCardCon flex justify-center gap-[30px] ">
            <div className="blogCard w-[450px] pb-[25px] rounded-xl shadow">
              <div className="imgCard bg-[#f8f9fe] py-[35px] rounded-t-xl">
                <img src={img1} alt="" className="rounded-[100%] w-[280px] h-[280px] mx-auto"/>
              </div>
              <div className="cardDetails px-[50px]">
                <h4 className="font-semibold pt-[15px]">Lorem ipsum dolor, sit amet consectetur.</h4>
                <p className="py-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam, voluptas exercitationem repellat dolore unde, nesciunt error, doloremque beatae reiciendis veniam nisi ullam inventore sint. Laborum ad illo suscipit accusantium.</p>
                <a href="" className="text-[#ff7518] mt-[10px]">Read More</a>
              </div>
            </div>
            <div className="blogCard w-[450px] pb-[25px] rounded-xl shadow">
              <div className="imgCard bg-[#f8f9fe] py-[35px] rounded-t-xl">
                <img src={img2} alt="" className="rounded-[100%] w-[280px] h-[280px] mx-auto"/>
              </div>
              <div className="cardDetails px-[50px]">
                <h4 className="font-semibold pt-[15px]">Lorem ipsum dolor, sit amet consectetur.</h4>
                <p className="py-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam, voluptas exercitationem repellat dolore unde, nesciunt error, doloremque beatae reiciendis veniam nisi ullam inventore sint. Laborum ad illo suscipit accusantium.</p>
                <a href="" className="text-[#ff7518] mt-[10px]">Read More</a>
              </div>
            </div>
            <div className="blogCard w-[450px] pb-[25px] rounded-xl shadow">
              <div className="imgCard bg-[#f8f9fe] py-[35px] rounded-t-xl">
                <img src={img3} alt="" className="rounded-[100%] w-[280px] h-[280px] mx-auto"/>
              </div>
              <div className="cardDetails px-[50px]">
                <h4 className="font-semibold pt-[15px]">Lorem ipsum dolor, sit amet consectetur.</h4>
                <p className="py-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam, voluptas exercitationem repellat dolore unde, nesciunt error, doloremque beatae reiciendis veniam nisi ullam inventore sint. Laborum ad illo suscipit accusantium.</p>
                <a href="" className="text-[#ff7518] mt-[10px]">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blog;
  
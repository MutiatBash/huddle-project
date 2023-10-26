// import React from "react";
import chef1 from '../assets/chef1.jpg';
import chef5 from '../assets/chef5.jpg';
import chef3 from '../assets/chef3.jpg';
import chef4 from '../assets/chef4.jpg';

const Specialsection = () => {
    return (
      <div>
        <div className="specialWrapper pt-5">
            <div className="specialContent text-center">
                <h2 className="font-bold text-2xl">Our Special Chefs</h2>
                <p className="w-2/4 mx-auto mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi cum ratione saepe quasi ipsa qui distinctio,
                    fugiat ea delectus atque sit molestiae repellendus eaque inventore a alias nesciunt, exercitationem amet?</p>
            </div> 
            <div className="specialChefs flex justify-center gap-[20px] my-[80px] max-md:flex-col max-md:content-center">
                <div className="chef h-72 w-52">
                    <div className="chefImg justify-center bg-no-repeat bg-cover bg-center h-72 w-52 text-center relative rounded-[15px]" style={{backgroundImage: `url(${chef1})`}}>
                        <div className="chefDetails h-14 w-[100%] absolute bottom-0 text-center bg-gradient-to-b from-black/90 to-black/10 text-white pt-[4px] rounded-b-[15px]">
                            <h5 className="font-semibold">Amanda Sanders</h5>
                            <p className="font-extralight">Head Chef</p>
                        </div>
                    </div>
                    
                </div>
                <div className="chef h-72 w-52">
                    <div className="chefImg justify-center bg-no-repeat bg-cover bg-center h-72 w-52 text-center relative rounded-[15px]" style={{backgroundImage: `url(${chef5})`}}>
                        <div className="chefDetails h-14 w-[100%] absolute bottom-0 text-center bg-gradient-to-b from-black/90 to-black/10 text-white pt-[4px] rounded-b-[15px]">
                            <h5 className="font-semibold">Jeff Riely</h5>
                            <p className="font-extralight">Suez Chef</p>
                        </div>
                    </div>
                    
                </div>
                <div className="chef h-72 w-52">
                    <div className="chefImg justify-center bg-no-repeat bg-cover bg-center h-72 w-52 text-center relative rounded-[15px]" style={{backgroundImage: `url(${chef3})`}}>
                        <div className="chefDetails h-14 w-[100%] absolute bottom-0 text-center bg-gradient-to-b from-black/90 to-black/10 text-white pt-[4px] rounded-b-[15px]">
                            <h5 className="font-semibold">Anna James</h5>
                            <p className="font-extralight">Ass. Chef</p>
                        </div>
                    </div>
                    
                </div>
                <div className="chef h-72 w-52">
                    <div className="chefImg justify-center bg-no-repeat bg-cover bg-center h-72 w-52 text-center relative rounded-[15px]" style={{backgroundImage: `url(${chef4})`}}>
                        <div className="chefDetails h-14 w-[100%] absolute bottom-0 text-center bg-gradient-to-b from-black/90 to-black/10 text-white pt-[4px] rounded-b-[15px]">
                            <h5 className="font-semibold">Harriet McCarthy</h5>
                            <p className="font-extralight">Chef</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Specialsection;
//   
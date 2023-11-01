import productImg from "../assets/images/productImage.jpg";
// import heroBubble from "../../assets/images/bubble.svg";
import { Button } from "../components/Button";
const HeroShop = () => {
  return (
    <section className="p-4 py-6 md:p-10 lg:p-16">
      <div className="flex flex-col sm:flex-row items-center md:items-start justify-between gap-6 md:gap-12 h-full">
        <div className="flex flex-col items-center md:items-start gap-5 lg:gap-6 md:w-[45%]">
          <h1 className="font-bold text-center md:text-left lg:text-[3rem] text-[1.5rem] lg:leading-[3.5rem]">
            Do you want some tasty finger food?
          </h1>
          <p className="text-base sm:w-[88%] lg:text-lg text-center md:text-left">
            With a few clicks you can satisfy your cravings. Walk into our store
            or place an order to be delivered to your doorstep.
          </p>
          <div className="bg-white shadow rounded-lg p-6 w-full flex flex-col gap-8">
            <div className="flex flex-row items-center gap-3">
              <p className="bg-[#fdede3] p-2 rounded-md text-[#ff7518] font-bold px-3">
                Delivery
              </p>
              <p>Pickup</p>
            </div>
            <div className="flex flex-row justify-between items-center border rounded-md px-1">
              <input
                className="w-full p-3 py-4 focus:outline-none"
                placeholder="search for a meal"
              />
              <Button text={"Search"} className="" />
            </div>
          </div>
        </div>
        <div className="px-10 md:p-0 sm:w-[40%] flex flex-col relative">
          <img src={productImg} className="rounded-[50%] object-cover filter invert-[.05] sepia-[.25] hue-rotate-20 h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroShop;

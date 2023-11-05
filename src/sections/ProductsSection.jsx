import { products } from "../data";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";

const ProductsSection = () => {
  return (
    <section className="flex flex-col gap-10 py-4 lg:py-14">
      <div className="px-4 md:px-10 lg:px-16">
        <h3 className="font-semibold text-[2rem]">Our Popular Meals</h3>
        <div className="grid py-10 md:grid-cols-3 md:gap-12 gap-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16 text-center md:text-left ">
          {products.popular.map((product) => (
            <div className="flex flex-col  gap-3 border rounded-xl h-full  ">
              <div className="w-full">
                <img
                  src={product.src}
                  className="w-[100%] h-[250px] rounded-lg object-cover"
                />
              </div>
              <div className="p-4 bg-white rounded-tr flex flex-col gap-1 w-full flex-1 justify-between">
                <h3 className="font-semibold text-lg md:text-xl lg:text-xl">
                  {product.title}
                </h3>
                <p className="mb-2">{product.details}</p>
                <div className="flex flex-row items-center justify-between py-2 flex-1 align-self-end">
                  <p className="font-semibold">
                    <FontAwesomeIcon icon={faNairaSign} size="sm" />
                    {product.price}
                  </p>

                  <Link
                    to={`/food-details/popular/${product.id}`}
                    className="font-semibold  text-[#ff7518]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-16">
        <h3 className="font-semibold text-[2rem]">Chef's Special</h3>
        <div className="grid py-10 md:grid-cols-3 md:gap-12 gap-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16 text-center md:text-left ">
          {products.special.map((product) => (
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left border rounded-xl ">
              <div className="w-full">
                <img
                  src={product.src}
                  className="w-[100%] h-[250px] rounded-lg object-cover"
                />
              </div>
              <div className="p-4 bg-white rounded-tr flex flex-col gap-1 w-full">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl lg:text-xl">
                    {product.title}
                  </h3>
                  <p className="mb-2">{product.details}</p>
                </div>
                <div className="flex flex-row items-center justify-between py-2 self-end ">
                  <p className="font-semibold">
                    <FontAwesomeIcon icon={faNairaSign} size="sm" />
                    {product.price}
                  </p>
                  {/* <Button text={"Add to cart"}className="text-white" /> */}
                  <Link
                    to={`/food-details/special/${product.id}`}
                    className="font-semibold  text-[#ff7518]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

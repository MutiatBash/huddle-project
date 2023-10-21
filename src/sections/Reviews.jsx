import { clients } from "../data";
import { ReviewCard } from "../components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  return <div className="slick-next" {...props}></div>;
}
function PrevArrow(props) {
  return <div className="slick-prev" {...props}></div>;
}

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // arrow: true,
    // centerPadding: "30px",
    // className: "center",
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="p-4 lg:p-16" id="reviews">
      <div className="flex flex-col lg:gap-2 items-center justify-between text-center">
        <h2 className="font-bold text-[1.5rem] lg:text-[3rem]">What Customers Say</h2>
        <p className="text-[1.2rem]">Hear from our loyal customers</p>
      </div>
      <div className="w-full py-3">
        <Slider {...settings} className="py-3">
          {clients.map((client) => {
            return <ReviewCard client={client} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;

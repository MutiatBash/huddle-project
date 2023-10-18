// import heroImg from "../../assets/images/Reviews.svg";
// import heroBubble from "../../assets/images/bubble.svg";
import Button from "../components/Button";
const HeroShop = () => {
  return (
    <section className="p-8 lg:p-16">
      <div className="flex flex-col sm:flex-row items-center md:items-start justify-between gap-12 h-full">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-9 md:w-[45%] md:pt-16">
          <h1 className="text-fh-2xl-bold text-center md:text-left md:text-fh-5xl-bold">
            Empower Your Feedback to Make a Difference
          </h1>
          <p className="text-fh-base sm:w-[88%] md:text-fh-lg text-center md:text-left">
            With FeedBackHub, you can easily share your experiences and provide
            feedback to the products and services you love
          </p>
          <Button text={"Write a Review"} />
        </div>
        <div className="px-10 md:p-0 sm:w-[40%] flex flex-col relative">
          
        </div>
      </div>
    </section>
  );
};

export default HeroShop;

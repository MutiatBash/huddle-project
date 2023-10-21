import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../sections/Reviews";
import Hero from "../sections/Hero";
import Chef from "../sections/Chef";
import Dish from "../sections/Dish";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Hero/>
      <About/>
      <Dish/>
      <Chef/>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

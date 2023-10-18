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
      {/* <h1>Home Page</h1> */}
      <Hero/>
      <Dish/>
      <Chef/>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

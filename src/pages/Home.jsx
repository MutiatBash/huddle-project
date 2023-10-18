import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../sections/Reviews";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <h1>Home Page</h1>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

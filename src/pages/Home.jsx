import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../sections/About"

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <h1>Home Page</h1>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;

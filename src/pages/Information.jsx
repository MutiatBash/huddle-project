import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Specialsection from "../sections/Specialsection";
import Aboutus from "../sections/Aboutus";
import Blog from "../sections/Blog";

const Information = () => {
  return (
    <div>
    <Navbar />
    <Specialsection/>
    <Aboutus/>
    <Blog/>
     <Footer />
    </div>
  );
};

export default Information;

import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FoodDetails } from "./pages/Food";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./CartContext";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Shop from "./pages/Shop";
import TermsOfService from "./pages/TermsOfService";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/food-details/:category/:foodId"
            element={<FoodDetails />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;

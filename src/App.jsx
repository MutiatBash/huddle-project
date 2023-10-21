import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Shop from "./pages/Shop";
import TermsOfService from "./pages/TermsOfService";
import "./App.css";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;

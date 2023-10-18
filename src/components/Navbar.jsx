import React from "react";
// import Logo from '../assets/svg/logo.svg'
import { Link, useLocation } from "react-router-dom";
import {Button} from "./Button"

const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/information",
    text: "Information",
  },
  {
    id: 3,
    url: "/shop",
    text: "Shop",
  },
  {
    id: 4,
    url: "/terms-of-service",
    text: "Terms of service",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full py-4 px-4 md:px-14 bg-white border border-b-[#C6C9CF] sticky top-0">
      <div className="w-full flex items-center justify-between">
        <div>
          {/* <img
            // src={Logo}
            alt="logo"
          /> */}
          <h5>Huddle</h5>
        </div>
        <ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem]">
          {links.map((links) => (
            <li className="group relative">
              <Link
                to={links.url}
                key={links.id}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  location.pathname === links.url ? " text-[#ff7518] p-1" : ""
                }`}
              >
                {links.text}
              </Link>
              <div className="absolute w-full left-0 h-0.5 bg-[#ff7518] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
          ))}
        </ul>
        <Button text={"Get in touch"}/>
      </div>
    </div>
  );
};

export default Navbar;

import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";
import { links } from "./Navbar";

export const MobileMenu = ({ text, className }) => {
  const location = useLocation();
  return (
    <div className="md:hidden">
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
      <Button text={"Get in touch"} />
    </div>
  );
};

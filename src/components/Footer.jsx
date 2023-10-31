import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
// import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
  return (
    <div className="w-full h-full px-4 py-10 lg:px-16 bg-white">
      <div className="flex flex-col flex-wrap md:flex-row justify-between py-10">
        {/* <img src={Logo} alt="" /> */}
        <div>
          <p>Huddle</p>
        </div>
        <div className="flex flex-col  gap-6 ">
          <div>
            <p className="text-md font-semibold">Company</p>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Link className="hover:text-[#ff7518]" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/information">
                Information
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/shop">
                Shop
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/terms-of-service">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-6 ">
          <div>
            <p className="text-md font-semibold">Events</p>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Link className="hover:text-[#ff7518]" to="/">
                Partnership
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/information">
                News
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/shop">
                Blog posts
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/terms-of-service">
                Calendar
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-6 ">
          <div>
            <p className="text-md font-semibold">Policy</p>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Link className="hover:text-[#ff7518]" to="/">
                Privacy
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/information">
                Information
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/shop">
                Copyright
              </Link>
            </div>
            <div>
              <Link className="hover:text-[#ff7518]" to="/terms-of-service">
                Support
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold">Subscribe</p>
          <div>
            <p className="pb-2">Stay up to date with our latest deals</p>
            <label htmlFor="email" className="mb-5 w-full lg:w-[420px]">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded-lg border border-[#D3DBE1] bg-white p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-dark-100"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </label>
          </div>
          <Button text={"Subscribe"} className="text-[0.9rem] text-white" />
        </div>
      </div>
      <div className="border-[0.3px] w-full mt-10 "></div>
      <div className="pt-6 flex flex-row justify-between text-gray-600">
        <div>
          <p>2023 Huddle</p>
        </div>
        <div className="flex flex-row gap-4">
          <span>Terms</span> <span>Privacy</span>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Button } from "../components/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="w-full h-full py-10 md:py-14 lg:py-20 px-4 md:px-10 lg:pl-16 bg-[#fafafa] lg:pr-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
        <div>
          <h2 className="text-[2rem] lg:text-[3rem] leading-[4.105625rem] font-bold text-center md:text-left">
            Contact Us
          </h2>
          <p className="md:w-[81%] text-lg  leading-[27px] md:mt-4 text-center md:text-left">
            We are here to assist you with your legal needs and answer any
            questions you may have. Please don't hesitate to reach out to us
            using the following contact information
          </p>
          <div className="flex flex-col mt-8 gap-5">
            <div className="flex items-center gap-4">
              <div className="cursor-pointer bg-white rounded-full py-[0.4rem] px-3 shadow-sm text-center">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p className="text-lg font-bold">Address</p>
                <p className="text-lg  font-normal">
                  7, Herbert Macaulay rd, Yaba, Lagos
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer bg-white rounded-full py-2 px-3 shadow-sm text-center ">
                <FontAwesomeIcon icon={faEnvelope}  />
              </div>
              <div>
                <p className="text-lg font-bold">Email Address</p>
                <p className="text-lg font-normal">huddlefoods@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer bg-white rounded-full py-2 px-3 shadow-sm text-center ">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="text-lg font-bold">Phone Number</p>
                <p className="text-lg font-normal">+234 8096543092</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Follow us on</h3>
            <div className="flex items-center gap-4 mt-3">
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white pt-8 px-4 md:px-12 lg:pl-14 shadow-[0px_2px_18px_-15px_rgba(0,0,0,0.4)]">
          <h2 className="text-xl md:text-3xl lg:leading-[3.51875rem] font-semibold text-center md:text-left">
            Drop a message if you have any concerns
          </h2>
          <div className="flex items-center gap-5 w-full h-full mt-4 relative pb-10">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="mb-5 block w-full lg:w-[420px]">
                Your Name
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full rounded-lg border border-[#D3DBE1] p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-dark-100"
                    required
                  />
                </div>
              </label>
              <label htmlFor="password" className="mb-5 w-full lg:w-[420px]">
                Your Email
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full rounded-lg border border-[#D3DBE1] bg-white p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-dark-100"
                    required
                  />
                </div>
              </label>
              <label htmlFor="message" className="mb-5 w-full lg:w-[420px]">
                Your Message
                <div className="relative">
                  <textarea
                    cols="50"
                    rows="5"
                    name="message"
                    id="message"
                    className="w-full rounded-lg border border-[#D3DBE1] bg-white p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-dark-100"
                    required
                  ></textarea>
                </div>
              </label>
              <Button text={"Send Message"} className="w-full text-center sm:w-[30%] lg:w-[42%] xl:w-[30%]"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

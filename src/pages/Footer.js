import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-12 py-20 text-white">
        <div>
          <div className="flex gap-3 py-3">
            <img src={logo} style={{ height: "30px" }} alt="" />
          </div>
          <div className="mt-3 text-[#c4c3c3] text-sm">
            <div className="flex items-center gap-3 mt-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#ff0000]"
              />
              <p>Anderkilla, Chittagong</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon icon={faPhoneFlip} className="text-[#ff0000]" />
              <p>+880 18977777777</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#ff0000]" />
              <p>support@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="lg:mx-auto">
          <p className="uppercase font-bold">Useful links</p>
          <hr className=" mt-2 h-[2px] w-6 bg-[#ff0000] border-none" />

          <ul className="text-sm">
            <li>
              <Link to="/all-cars" className="flex items-center mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">All Cars</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Brands</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Support</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Terms &amp; Conditions</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Offers</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:mx-auto">
          <p className="uppercase font-bold">Find Us</p>
          <hr className=" mt-2 h-[2px] w-6 bg-[#ff0000] border-none" />

          <ul className="text-sm">
            <li>
              <Link to="/all-cars" className="flex items-center mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Facebook</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Twitter</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Instagram</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">Telegram</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                  <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                </div>
                <p className="ml-2 text-[#c4c3c3]">LinkedIn</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <p className="uppercase font-bold">Subscribe Our Newsletter</p>
          <hr className=" mt-2 h-[2px] w-6 bg-[#ff0000] border-none" />

          <p className="text-sm text-[#c4c3c3] mt-3">
            Keep up on our always evolving products features and technology.
            Enter your e-mail and subscribe to our newsletter.
          </p>
          <input
            type="text"
            className="w-10/12 mt-3 p-2 pl-4 text-sm bg-[#6666661a] border-[1px] border-gray-800"
            placeholder="Enter Your Email"
          />
          <button className="bg-red-600 text-white mt-3 px-6 py-2">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 px-6 md:px-10 lg:px-20 py-8 border-t-[1px] border-[#ffffff14] text-[#c4c3c3] text-sm">
        <p className="text-center">&copy;Copyright 2022 AutoImage</p>
        <div className="flex justify-center gap-5">
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

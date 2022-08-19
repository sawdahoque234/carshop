/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <header class="bg-gray-800">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0 mx-4"
            href="/"
          >
            <img src={logo} alt="" />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/allcars">
              <a class="mr-5 text-white hover:text-red-500 text-lg">All Cars</a>
            </Link>
          </nav>
          {user.email && (
            <Link to="/myorder" className="">
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5  hover:text-red-500 text-white text-xl z-10">
                  orders
                </a>
              </nav>
            </Link>
          )}
          {user?.email ? (
            <Link to="/">
              <button
                onClick={logout}
                class="inline-flex items-center bg-red-500 border-0 py-2 text-white  px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
              >
                Log out
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button class="inline-flex items-center bg-orange-500 border-0 py-2 text-white  px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                Log In
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

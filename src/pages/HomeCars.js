import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loadingimg from "./Loadingimg";
import "../style/Footer.css";

const HomeCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://stark-waters-33532.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [cars]);
  return (
    <footer>
      <div>
        <section class=" text-white">
          <h1
            className="py-4  mt-14 lg:text-[50px]  text-2xl font-bold font-mono text-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Our Latest Collection
          </h1>
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-wrap -m-4">
              {cars.length === 0 ? (
                <Loadingimg />
              ) : (
                <>
                  {cars?.slice(0, 4).map((car) => {
                    const { title, _id, image, description, price } = car;
                    return (
                      <div class="p-4 md:w-1/2 lg:w-1/4">
                        <div
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                          class="h-full border-2 border-orange-400 bg-black border-opacity-60 rounded-lg overflow-hidden"
                          key={_id}
                        >
                          <img
                            class="lg:h-64 md:h-48 w-full object-cover object-center"
                            src={image}
                            alt="blog"
                          />
                          <div class="p-6">
                            <h1 class="title-font text-3xl font-medium text-white mb-3">
                              {title}
                            </h1>
                            <h1 class=" text-2xl font-medium text-white mb-3">
                              Price: ${price}
                            </h1>
                            <p class="leading-relaxed mb-3 text-left">
                              {description?.slice(0, 100)}
                            </p>
                            <div class="flex items-center flex-wrap ">
                              <Link
                                to={`/orderpage/${_id}`}
                                class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                              >
                                <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                  Buy Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <div className="text-center">
              <Link
                to="/allcars"
                class="text-orange-500 inline-flex items-center text-2xl py-5 md:mb-2 lg:mb-0"
              >
                See More
                <svg
                  class="w-4 h-4 ml-2 text-2xl"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default HomeCars;

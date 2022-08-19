import {
  faCar,
  faCarBurst,
  faDollar,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import banner1 from "../../img/b.avif";
import car1 from "../../img/car2.jpg";
import car2 from "../../img/car1.jpg";
import assistant from "../../img/img2.jpg";

const MainHome = () => {
  return (
    <>
      <section>
        <img className="lg:h-screen w-full" src={banner1} alt="" />
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          className="absolute top-[32%] md:top-56 left-[15%] md:left-[20%] lg:left-[33%] uppercase"
        >
          <p className="ml-2 md:ml-20 lg:ml-24 text-2xl md:text-2xl text-white">
            BMW X3 Sports{" "}
          </p>
          <p className="text-lg md:text-4xl text-white font-[600]">
            Buy Your Dream Car Everyday
          </p>
        </div>

        <div className="text-center mt-6 md:mt-8 lg:mt-16">
          <p className="text-gray-500">Welcome to our website</p>
          <p className="text-2xl lg:text-4xl text-black font-semibold uppercase">
            AutoImage
          </p>
          <hr className="block mx-auto mt-1 h-[1px] w-32 bg-red-600 border-none" />
          <hr className="block mx-auto mt-2 h-[1px] w-28 bg-red-600 border-none" />

          <p className="mt-4 lg:mt-10 px-4 lg:px-52 text-gray-500">
            AutomImage is offering you a variety of car collections. Here you
            can find your most endearing car in a affordable price. We are also
            providing 3years of servicing for free of cost. There are always
            concession on vehicle parts if you buy a car from us. Having
            business with 50+ years.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-24 mt-10">
            <div>
              <FontAwesomeIcon
                icon={faCar}
                className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
              />
              <p className="uppercase text-xl font-[600] mt-2">All Brands</p>
              <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
              <p className="text-gray-500 mt-2">
                Here you can get all the brand's car at your hand
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faHeadset}
                className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
              />
              <p className="uppercase text-xl font-[600] mt-2">Free Support</p>
              <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
              <p className="text-gray-500 mt-2">
                Free servicing upto 5+ years and many more
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCarBurst}
                className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
              />
              <p className="uppercase text-xl font-[600] mt-2">
                Insurance facilities
              </p>
              <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
              <p className="text-gray-500 mt-2">
                We are proving a handy solution for car insurance
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDollar}
                className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
              />
              <p className="uppercase text-xl font-[600] mt-2">Affordable</p>
              <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
              <p className="text-gray-500 mt-2">
                All the cars in stock is coming with an affordable price tag
              </p>
            </div>
          </div>
        </div>

        <div className="car-entry grid grid-cols-3 gap-2 my-14">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            src={car2}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src={assistant}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <p className="mt-1 text-sm md:text-lg text-center text-gray-500">
              Have Any Question?
            </p>
            <p className="text-lg text-center md:text-3xl text-black font-[600] mt-3">
              +880 18977777777
            </p>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            src={car1}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default MainHome;

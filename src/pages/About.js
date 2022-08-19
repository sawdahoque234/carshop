import React from "react";
import about from "../img/about.jpg";

const About = () => {
  return (
    <div>
      <section class="text-black ">
        <h1 className="py-4  mt-14 lg:text-[50px]  text-2xl font-bold font-mono text-center">
          About AutoImage
        </h1>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:w-1/3 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We offer high quality vehicles at unbelievable prices & creates
              pleasant buying experience.
            </h1>
            <p class="mb-8 leading-relaxed">
              AutoImage is nisi aliquip consequat duis velit esse cillum dolore
              fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor
              sit amt consectetur adipisicing elit sed eiusmod tempor
              incididuntu labore et dolore magna aliqua enimad minim veniam quis
              nostrud area exercitation ullamco laboris nisi aliquip. Freebet
              Slot Duis aute irure dolor in reprehenderitn voluptate velit ese
              cillum dolore fugiat free chip nulla pariatur excepteur sint
              occaecat cupidatat non proident. Duis aute irure dolor in
              reprehenderitn voluptate velit ese cillum dolore fugiat nulla
              pariatur excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

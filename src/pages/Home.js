import React from "react";
import About from "./About";
import Footer from "./Footer";
import MainHome from "./Home/MainHome";
import HomeCars from "./HomeCars";

const Home = () => {
  return (
    <div>
      <MainHome />
      <HomeCars />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

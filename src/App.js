import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AuthProvider from "./context/AuthProvider";
import Header from "./pages/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OrderPage from "./pages/OrderPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Myorder from "./pages/Dashboard/Myorder";
import AllCars from "./pages/AllCars";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allcars" element={<AllCars />} />
            <Route element={<PrivateRoute />}>
              {" "}
              <Route path="/orderpage/:carId" element={<OrderPage />} />{" "}
            </Route>
            <Route path="myorder" element={<Myorder />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

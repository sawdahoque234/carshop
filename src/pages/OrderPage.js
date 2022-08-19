import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
const OrderPage = () => {
  const { user } = useAuth();

  const { carId } = useParams();
  const { register, reset, handleSubmit } = useForm();
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch(`https://stark-waters-33532.herokuapp.com/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [carId]);

  const onSubmit = (data) => {
    const order = {
      name: data.name,
      email: data.email,
      useraddress: data.useraddress,
      phone: data.phone,
      title: data.title,
      type: data.type,
      price: data.price,
      address: data.address,
      description: data.description,
    };
    data = order;
    data.status = "pending";
    fetch("https://stark-waters-33532.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Ordered proceed successfully!!!");
          reset();
        }
      });
  };

  return (
    <div>
      <div className=" flex py-20  flex-wrap justify-center">
        <div className="lg:w-1/3 border border-gray-100  w-2/3 p-4 mx-2">
          <div className="flex justify-center">
            <img
              alt="ecommerce"
              className=" lg:w-full  lg:h-auto h-64 rounded-lg"
              src={car.image}
            />
          </div>

          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {car.title}
          </h1>
          <p className="leading-relaxed  text-left">{car.description}</p>
          <div className=" ml-6  items-center">
            <span className="title-font font-medium text-2xl font-mono text-red-700">
              Price: {car.price} $
            </span>
          </div>
        </div>
        {/* //form.. */}
        <div className="lg:w-1/2 w-full py-6">
          <div className="mx-12">
            <p className="text-2xl mb-5 font-mono font-bold py-6">
              Please Complete your order
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      value={user.displayName}
                      {...register("name", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      {...register("email", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="property"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Title
                    </label>
                    <input
                      value={car.title}
                      {...register("title", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="price" class="leading-7 text-sm text-gray-600">
                      Price
                    </label>
                    <input
                      value={car.price}
                      {...register("price", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="useraddressame"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <input
                      {...register("useraddress", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="phone" class="leading-7 text-sm text-gray-600">
                      Phone
                    </label>
                    <input
                      type="number"
                      {...register("phone", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-lg ">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Buy Now
              </button>
              <Link to="/dashboard/myorder">
                <button className="text-white bg-orange-400 border-0 py-2 px-6 mx-4 focus:outline-none  rounded text-lg">
                  Review Order
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

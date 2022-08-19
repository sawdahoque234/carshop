/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import login from "../../img/login.avif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "./../../hooks/useAuth";
import { useLocation } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  return (
    <div>
      <div class="relative flex flex-wrap h-full w-full">
        <div class="lg:h-screen lg:w-1/2 w-full  bg-black">
          <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p class="text-2xl sm:pt-20">Please Login Now</p>
            </div>

            <div class="mt-10">
              <form onSubmit={handleLoginSubmit} method="POST">
                <div>
                  <label class="mb-2.5 block font-extrabold" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onBlur={handleOnBlur}
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                <div class="mt-4">
                  <label class="mb-2.5 block font-extrabold" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onBlur={handleOnBlur}
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label for="remember" class="mx-2 text-sm">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <fieldset>
                      <Link to="/register">
                        <legend class="mx-auto px-2 text-center text-sm mt-2">
                          Or Create a account.
                        </legend>
                      </Link>
                    </fieldset>
                  </div>
                </div>
                <div class="my-10">
                  <button
                    type="submit"
                    class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="lg:h-screen lg:w-1/2 w-full bg-blue-600">
          <img src={login} class="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;

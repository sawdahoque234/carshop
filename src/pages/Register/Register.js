/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import login from "../../img/login.avif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, navigate);

    e.preventDefault();
  };
  return (
    <div>
      <div class="relative flex flex-wrap h-full w-full">
        <div class="Lg:h-screen lg:w-1/2 w-full bg-black">
          <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p class="text-2xl">Please Sing Up</p>
            </div>
            <div class="mt-10">
              <form method="POST" onSubmit={handleLoginSubmit} action="#">
                <div>
                  <label class="mb-2.5 block font-extrabold" for="name">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    onBlur={handleOnBlur}
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter name"
                  />
                </div>
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
                    name="password"
                    id="password"
                    onBlur={handleOnBlur}
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>

                <div class="my-10">
                  <button
                    type="submit"
                    class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800"
                  >
                    Sing In
                  </button>
                </div>
              </form>
              <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
                <div>
                  <input type="checkbox" id="remember" />
                  <label for="remember" class="mx-2 text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <fieldset>
                    <Link to="/login">
                      <legend class="mx-auto px-2 text-center text-sm  py-2">
                        Or Already have an account.
                      </legend>
                    </Link>
                  </fieldset>
                </div>
              </div>
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

export default Register;

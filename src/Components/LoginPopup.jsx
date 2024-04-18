import React from "react";
import logo from "../assets/Logo.png";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";

function LoginPopup({
  mode,
  closePopup,
  toggleForgetPassword,
  toggleCreateAccount,
}) {
  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-black p-4 rounded-2xl shadow-lg popup relative">
        <div
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={closePopup}
        >
          {mode === "dark" ? (
            <img src={whiteCross} alt="" />
          ) : (
            <img src={cross} alt="" />
          )}
        </div>
        <div className="log-in-welcome text-center">
          <img className="my-o mx-auto" src={logo} alt="" />
          <h2 className="text-2xl font-normal mb-4 dark:text-white">
            Welcome Back
          </h2>
        </div>
        <h2 className="text-md font-bold mb-4 dark:text-white">Log in</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 border dark:bg-gray-600 rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="px-4 py-2 border dark:bg-gray-600 rounded-md border-none bg-lite w-full"
            />
          </div>
          <p className="text-right font-medium text-sm">
            <a
              href="#"
              className="text-underline dark:text-white"
              onClick={toggleForgetPassword}
            >
              Forger password?
            </a>
          </p>
          <a href="#">
            <div
              type="submit"
              className="bg-black dark:bg-white dark:text-black text-center full-size hover:bg-slate-900 rounded-xl  text-white font-normal py-2 my-3 px-4"
            >
              Log in
            </div>
          </a>
          <div className="text-center">
            <p className="dark:text-white">
              You don't have an account?{" "}
              <a
                href="#"
                className="font-bold text-underline dark:text-white"
                onClick={toggleCreateAccount}
              >
                Craete account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;

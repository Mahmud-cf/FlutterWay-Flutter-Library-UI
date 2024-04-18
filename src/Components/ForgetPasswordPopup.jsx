import React from "react";
import logo from "../assets/Logo.png";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";

function ForgetPasswordPopup({
  mode,
  closePopup,
  toggleSetNewPassword,
  togglePopup,
}) {
  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-black p-4 rounded-2xl shadow-lg popup relative">
        <div
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={closePopup}
        >
          {mode === "dark" ? <img src={whiteCross} alt="" /> : <img src={cross} alt="" />  }
        </div>
        <div className="log-in-welcome text-center">
          <img className="my-o mx-auto" src={logo} alt="" />
          <h2 className="text-2xl font-normal mb-4 dark:text-white ">Reset Password</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 border dark:bg-gray-600 rounded-md border-none bg-lite w-full"
            />
          </div>
          <a href="#">
            <div
              type="submit"
              className="bg-black dark:bg-white dark:text-black text-center full-size hover:bg-slate-900 rounded-xl  text-white font-normal py-2 my-3 px-4"
              onClick={toggleSetNewPassword}
            >
              Sand Code
            </div>
          </a>
          <div className="text-center">
            <p className="dark:text-white" >
              Know you email and password?{" "}
              <a
                href="#"
                className="font-bold text-underline"
                onClick={togglePopup}
              >
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordPopup;

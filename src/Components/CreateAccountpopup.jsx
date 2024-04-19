import React, { useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";

function CreateAccountpopup({ mode, closePopup, togglePopup }) {
  const popupRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    }

    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);

  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={popupRef}
        className="bg-white dark:bg-black px-5 py-7 rounded-2xl shadow-lg popup relative"
      >
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
            Create your account
          </h2>
        </div>
        <h2 className="text-md font-bold mb-4 dark:text-white">
          Create an account
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter full name"
              className="px-4 py-2 dark:bg-gray-600 border rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 dark:bg-gray-600 border rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="px-4 py-2 dark:bg-gray-600 border rounded-md border-none bg-lite w-full"
            />
          </div>
          <p className="text-left font-normel text-lite text-sm">
            By clicking "Sign Up," you agree to the{" "}
            <span className="text-black font-medium dark:text-white">
              License Agreement, Terms of Use,
            </span>{" "}
            and{" "}
            <span className="text-black font-medium  dark:text-white">
              Privacy Policy.
            </span>
          </p>
          <a href="#">
            <div
              type="submit"
              className="bg-black dark:bg-white dark:text-black text-center full-size hover:bg-slate-900 rounded-xl  text-white font-bold py-2 my-3 px-4"
            >
              Sign up
            </div>
          </a>
          <div className="text-center dark:text-white">
            <p>
              Already have an account?{" "}
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

export default CreateAccountpopup;

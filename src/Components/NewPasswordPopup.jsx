import React, { useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";

function NewPasswordPopup({ mode, closePopup }) {
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
          <h2 className="text-2xl font-normal mb-2 dark:text-white">
            Set New Password
          </h2>
          <p className="text-xs text-lite mb-4 dark:text-white">
            We sent a code to your email. Please check your mail.
          </p>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Reset password code"
              className="px-4 py-2 border dark:bg-gray-600 rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="New password"
              className="px-4 py-2 border dark:bg-gray-600 rounded-md border-none bg-lite w-full"
            />
          </div>
          <a href="#">
            <div
              type="submit"
              className="bg-black dark:text-black dark:bg-white text-center full-size hover:bg-slate-900 rounded-xl  text-white font-bold py-2 my-3 px-4"
            >
              Sand Code
            </div>
          </a>
        </form>
      </div>
    </div>
  );
}

export default NewPasswordPopup;

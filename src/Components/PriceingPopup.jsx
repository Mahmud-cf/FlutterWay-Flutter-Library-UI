import React from "react";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";
import logo from "../assets/Logo.png";

function PriceingPopup({mode, rightIcon, whiteRight, closePopup }) {
  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-4 dark:bg-black rounded-2xl shadow-lg popup priceing relative">
        <div
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={closePopup}
        >
          <img src={mode ? whiteCross : cross} alt="" />
        </div>
        <div className="log-in-welcome text-center">
          <img className="my-o mx-auto" src={logo} alt="" />
          <h2 className="text-2xl font-normal mb-2 dark:text-white">
            Upgrade to access the full library.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-5">
          <div className="priceing-month rounded-xl p-3">
            <h2 className="text-md font-bold dark:text-white">Monthly</h2>
            <h1 className="text-3xl my-3 dark:text-white">
              $29<span className="text-xl">/monthly</span>
            </h1>
            <ul className="dark:text-white">
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Full access</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited downloads</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited copy code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Premium articles</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Premium videos</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Early access of code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Billed monthly</span>{" "}
              </li>
            </ul>
            <div className="bg-black dark:bg-white dark:text-black text-white rounded-2xl text-center py-2 mt-4">
              <a href="#">Upgrade</a>
            </div>
          </div>
          <div className="priceing-month rounded-xl p-3 bg-black dark:bg-white text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-bold dark:text-black ">Yearly</h2>
              <span
                className="py-0 px-2 rounded-2xl dark:text-black"
                style={{ border: "1px solid #fff" }}
              >
                Save 25%
              </span>
            </div>
            <h1 className="text-3xl my-3 dark:text-black">
              $19<span className="text-xl dark:text-black">/monthly</span>
            </h1>
            <ul className="dark:text-black">
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1 ">Full access</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited downloads</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited copy code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Premium articles</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Premium videos</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Early access of code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode ? rightIcon: whiteRight} alt="" />{" "}
                <span className="ml-2 mb-1">Billed monthly</span>{" "}
              </li>
            </ul>
            <div className="bg-white dark:bg-black dark:text-white text-black rounded-2xl text-center py-2 mt-4">
              <a href="#">Upgrade</a>
            </div>
          </div>
          <div className="priceing-year"></div>
        </div>
      </div>
    </div>
  );
}

export default PriceingPopup;

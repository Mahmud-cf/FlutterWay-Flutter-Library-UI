import React, { useEffect, useRef } from "react";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";
import logo from "../assets/Logo.png";

function PriceingPopup({mode, rightIcon, whiteRight, closePopup }) {

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
      <div ref={popupRef} className="bg-white p-4 md:overflow-y-scroll md:max-h-screen dark:bg-black rounded-2xl shadow-lg popup priceing relative">
        <div
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={closePopup}
        >
          <div className="logo">
            <svg className="svg-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.9694 2H12.0306C13.52 2 14.6793 1.99999 15.6122 2.06889C16.559 2.13881 17.3317 2.28267 18.0358 2.60167C19.5274 3.27752 20.7225 4.47259 21.3983 5.96423C21.7173 6.66827 21.8612 7.44105 21.9311 8.38781C22 9.32065 22 10.48 22 11.9694V12.0306C22 13.52 22 14.6793 21.9311 15.6122C21.8612 16.559 21.7173 17.3317 21.3983 18.0358C20.7225 19.5274 19.5274 20.7225 18.0358 21.3983C17.3317 21.7173 16.559 21.8612 15.6122 21.9311C14.6793 22 13.52 22 12.0306 22H11.9694C10.48 22 9.32065 22 8.38781 21.9311C7.44105 21.8612 6.66827 21.7173 5.96423 21.3983C4.47259 20.7225 3.27752 19.5274 2.60167 18.0358C2.28267 17.3317 2.13881 16.559 2.06889 15.6122C1.99999 14.6793 2 13.52 2 12.0306V11.9694C2 10.48 1.99999 9.32066 2.06889 8.38781C2.13881 7.44105 2.28267 6.66827 2.60167 5.96423C3.27752 4.47259 4.47259 3.27752 5.96423 2.60167C6.66827 2.28267 7.44105 2.13881 8.38781 2.06889C9.32066 1.99999 10.48 2 11.9694 2ZM8.49829 3.56482C7.63466 3.6286 7.05961 3.75215 6.58329 3.96796C5.42313 4.49363 4.49363 5.42313 3.96796 6.58329C3.75215 7.05961 3.6286 7.63466 3.56482 8.49829C3.50048 9.36945 3.5 10.4736 3.5 12C3.5 13.5264 3.50048 14.6306 3.56482 15.5017C3.6286 16.3653 3.75215 16.9404 3.96796 17.4167C4.49363 18.5769 5.42313 19.5064 6.58329 20.032C7.05961 20.2479 7.63466 20.3714 8.49829 20.4352C9.36945 20.4995 10.4736 20.5 12 20.5C13.5264 20.5 14.6306 20.4995 15.5017 20.4352C16.3653 20.3714 16.9404 20.2479 17.4167 20.032C18.5769 19.5064 19.5064 18.5769 20.032 17.4167C20.2479 16.9404 20.3714 16.3653 20.4352 15.5017C20.4995 14.6306 20.5 13.5264 20.5 12C20.5 10.4736 20.4995 9.36945 20.4352 8.49829C20.3714 7.63466 20.2479 7.05961 20.032 6.58329C19.5064 5.42313 18.5769 4.49363 17.4167 3.96796C16.9404 3.75215 16.3653 3.6286 15.5017 3.56482C14.6306 3.50048 13.5264 3.5 12 3.5C10.4736 3.5 9.36945 3.50048 8.49829 3.56482ZM8.99478 8.99481C9.28767 8.70191 9.76254 8.70191 10.0554 8.99481L12 10.9394L13.9446 8.99481C14.2375 8.70191 14.7123 8.70191 15.0052 8.99481C15.2981 9.2877 15.2981 9.76257 15.0052 10.0555L13.0607 12L15.0052 13.9446C15.2981 14.2374 15.2981 14.7123 15.0052 15.0052C14.7123 15.2981 14.2374 15.2981 13.9445 15.0052L12 13.0607L10.0555 15.0052C9.76258 15.2981 9.28771 15.2981 8.99482 15.0052C8.70192 14.7123 8.70192 14.2374 8.99482 13.9446L10.9393 12L8.99478 10.0555C8.70188 9.76257 8.70188 9.2877 8.99478 8.99481Z" fill={mode === 'dark' ? '#fff' : "#111111"} />
            </svg>
          </div>
        </div>
        <div className="log-in-welcome text-center">
          <img className="my-o mx-auto" src={logo} alt="" />
          <h2 className="text-2xl font-normal mb-2 dark:text-white">
            Upgrade to access the full library.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 ">
          <div className="priceing-month rounded-xl p-3">
            <h2 className="text-md font-bold sm-font dark:text-white">Monthly</h2>
            <h1 className="text-2xl md:text-3xl my-3 dark:text-white">
              $29<span className="text-base md:text-xl">/monthly</span>
            </h1>
            <ul className="dark:text-white">
              <li className="flex items-center">
                <img src={mode === 'dark' ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Full access</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited downloads</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited copy code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Premium articles</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode=== 'dark' ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Premium videos</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? whiteRight : rightIcon} alt="" />{" "}
                <span className="ml-2 mb-1">Early access of code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? whiteRight : rightIcon} alt="" />{" "}
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
                className="py-0 px-2 rounded-2xl dark:text-black dark:border-black border border-solid border-white"
              >
                Save 25%
              </span>
            </div>
            <h1 className="text-3xl my-3 dark:text-black">
              $19<span className="text-xl dark:text-black">/monthly</span>
            </h1>
            <ul className="dark:text-black">
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1 ">Full access</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited downloads</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Unlimited copy code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Premium articles</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Premium videos</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight } alt="" />{" "}
                <span className="ml-2 mb-1">Early access of code</span>{" "}
              </li>
              <li className="flex items-center">
                <img src={mode === 'dark' ? rightIcon: whiteRight} alt="" />{" "}
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

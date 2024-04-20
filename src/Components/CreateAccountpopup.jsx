import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";

function CreateAccountpopup({ mode, closePopup, togglePopup }) {
  const popupRef = useRef(null);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

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
          <div className="logo">
          {mode === "dark" ? (
            <img src={whiteCross} alt="" />
          ) : (
            <img src={cross} alt="" />
          )}
          </div>
        </div>
        <div className="log-in-welcome text-center">
          <img className="my-o mx-auto" src={logo} alt="" />
          <h2 className="text-2xl font-normal mb-4 dark:text-white">
            Create your account
          </h2>
        </div>
        <h2 className="sm-font text-md font-bold mb-4 dark:text-white">
          Create an account
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter full name"
              className="px-4 py-2 input-h text-sm  dark:bg-neutral-800 dark:text-neutral-500  border rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 input-h text-sm  dark:bg-neutral-800 dark:text-neutral-500  border rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter Your Password"
              className="px-4 py-2 input-h text-sm input-h border  dark:bg-neutral-800 dark:text-neutral-500  rounded-md border-none bg-lite w-full"
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none" id="eye"><path d="M25 39c13.036 0 23.352-12.833 23.784-13.379l.491-.621-.491-.621C48.352 23.833 38.036 11 25 11S1.648 23.833 1.216 24.379L.725 25l.491.621C1.648 26.167 11.964 39 25 39zm0-26c10.494 0 19.47 9.46 21.69 12C44.473 27.542 35.509 37 25 37 14.506 37 5.53 27.54 3.31 25 5.527 22.458 14.491 13 25 13z"  fill={mode === 'dark' ? '#fff' : '#989898'} /><path d="M25 34c4.963 0 9-4.038 9-9s-4.037-9-9-9-9 4.038-9 9 4.037 9 9 9zm0-16c3.859 0 7 3.14 7 7s-3.141 7-7 7-7-3.14-7-7 3.141-7 7-7z" fill={mode === 'dark' ? '#fff' : '#989898'} /></svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.8892 4.11066C20.1821 4.40355 20.1821 4.87843 19.8892 5.17132L17.2208 7.8397C17.7917 8.21503 18.3121 8.63624 18.7816 9.07998C20.4159 10.6246 21.4707 12.4734 21.9506 13.7331C22.0981 14.1202 21.9038 14.5535 21.5168 14.701C21.1297 14.8484 20.6964 14.6542 20.5489 14.2671C20.1399 13.1934 19.2031 11.5423 17.7513 10.1702C17.2657 9.71124 16.7268 9.28716 16.1341 8.92643L14.1401 10.9205C15.113 11.598 15.7498 12.7247 15.7498 14.0001C15.7498 16.0712 14.0708 17.7501 11.9998 17.7501C10.7243 17.7501 9.59757 17.1134 8.92011 16.1404L5.17104 19.8895C4.87814 20.1824 4.40327 20.1824 4.11038 19.8895C3.81748 19.5966 3.81748 19.1217 4.11038 18.8288L8.30338 14.6358C8.2681 14.4292 8.24972 14.2168 8.24972 14.0001C8.24972 11.929 9.92865 10.2501 11.9998 10.2501C12.2165 10.2501 12.4289 10.2685 12.6355 10.3038L14.7067 8.2325C13.8848 7.92815 12.9827 7.75006 11.9998 7.75006C9.60588 7.75006 7.69125 8.80633 6.24821 10.1702C4.79637 11.5423 3.85959 13.1934 3.45058 14.2671C3.30313 14.6542 2.8698 14.8484 2.48272 14.701C2.09564 14.5535 1.90139 14.1202 2.04885 13.7331C2.52873 12.4734 3.58362 10.6246 5.2179 9.07998C6.86097 7.52712 9.12689 6.25006 11.9998 6.25006C13.4375 6.25006 14.7233 6.56993 15.8551 7.08416L18.8286 4.11066C19.1215 3.81777 19.5963 3.81777 19.8892 4.11066ZM10.0332 12.9061C10.2371 12.5404 10.54 12.2374 10.9058 12.0335L10.0332 12.9061ZM10.0097 15.0509C10.3871 15.7641 11.1367 16.2501 11.9998 16.2501C13.2424 16.2501 14.2498 15.2427 14.2498 14.0001C14.2498 13.137 13.7638 12.3874 13.0505 12.01L10.0097 15.0509Z" fill={mode === 'dark' ? '#fff' : '#989898'} />
                </svg>}
            </div>
          </div>
          <p className="text-left font-normel text-lite text-xs sm:text-sm">
            By clicking "Sign Up," you agree to the{" "}
            <span className="text-black font-semibold dark:text-white">
              License Agreement, Terms of Use,
            </span>{" "}
            and{" "}
            <span className="text-black font-semibold  dark:text-white">
              Privacy Policy.
            </span>
          </p>
          <a href="#">
            <div
              type="submit"
              className="bg-black button-h dark:bg-white dark:text-black text-center full-size hover:bg-slate-900 rounded-xl  text-white font-bold py-2 my-3 px-4"
            >
              Sign up
            </div>
          </a>
          <div className="text-center dark:text-white text-sm sm:text-base">
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

import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";

function LoginPopup({
  mode,
  closePopup,
  toggleForgetPassword,
  toggleCreateAccount,
  logInModeToggle
}) {

  const [isPasswordVisible, setPasswordVisible] = useState(false);
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


  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div ref={popupRef} className="bg-white dark:bg-black px-5 py-7 rounded-2xl shadow-lg popup relative">
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
          <h2 className="text-2xl font-normal mb-4 dark:text-white">
            Welcome Back
          </h2>
        </div>
        <h2 className="sm-font sm:text-base  font-semibold mb-4 dark:text-white">Log in</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 input-h text-sm border  dark:bg-neutral-800 dark:text-neutral-500  rounded-md border-none bg-lite w-full"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter Your Password"
              className="px-4 py-2 text-sm input-h border dark:bg-neutral-800 dark:text-neutral-500 rounded-md border-none bg-lite w-full"
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none" id="eye"><path d="M25 39c13.036 0 23.352-12.833 23.784-13.379l.491-.621-.491-.621C48.352 23.833 38.036 11 25 11S1.648 23.833 1.216 24.379L.725 25l.491.621C1.648 26.167 11.964 39 25 39zm0-26c10.494 0 19.47 9.46 21.69 12C44.473 27.542 35.509 37 25 37 14.506 37 5.53 27.54 3.31 25 5.527 22.458 14.491 13 25 13z" fill={mode === 'dark' ? '#fff' : '#989898'} /><path d="M25 34c4.963 0 9-4.038 9-9s-4.037-9-9-9-9 4.038-9 9 4.037 9 9 9zm0-16c3.859 0 7 3.14 7 7s-3.141 7-7 7-7-3.14-7-7 3.141-7 7-7z" fill={mode === 'dark' ? '#fff' : '#989898'} /></svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.8892 4.11066C20.1821 4.40355 20.1821 4.87843 19.8892 5.17132L17.2208 7.8397C17.7917 8.21503 18.3121 8.63624 18.7816 9.07998C20.4159 10.6246 21.4707 12.4734 21.9506 13.7331C22.0981 14.1202 21.9038 14.5535 21.5168 14.701C21.1297 14.8484 20.6964 14.6542 20.5489 14.2671C20.1399 13.1934 19.2031 11.5423 17.7513 10.1702C17.2657 9.71124 16.7268 9.28716 16.1341 8.92643L14.1401 10.9205C15.113 11.598 15.7498 12.7247 15.7498 14.0001C15.7498 16.0712 14.0708 17.7501 11.9998 17.7501C10.7243 17.7501 9.59757 17.1134 8.92011 16.1404L5.17104 19.8895C4.87814 20.1824 4.40327 20.1824 4.11038 19.8895C3.81748 19.5966 3.81748 19.1217 4.11038 18.8288L8.30338 14.6358C8.2681 14.4292 8.24972 14.2168 8.24972 14.0001C8.24972 11.929 9.92865 10.2501 11.9998 10.2501C12.2165 10.2501 12.4289 10.2685 12.6355 10.3038L14.7067 8.2325C13.8848 7.92815 12.9827 7.75006 11.9998 7.75006C9.60588 7.75006 7.69125 8.80633 6.24821 10.1702C4.79637 11.5423 3.85959 13.1934 3.45058 14.2671C3.30313 14.6542 2.8698 14.8484 2.48272 14.701C2.09564 14.5535 1.90139 14.1202 2.04885 13.7331C2.52873 12.4734 3.58362 10.6246 5.2179 9.07998C6.86097 7.52712 9.12689 6.25006 11.9998 6.25006C13.4375 6.25006 14.7233 6.56993 15.8551 7.08416L18.8286 4.11066C19.1215 3.81777 19.5963 3.81777 19.8892 4.11066ZM10.0332 12.9061C10.2371 12.5404 10.54 12.2374 10.9058 12.0335L10.0332 12.9061ZM10.0097 15.0509C10.3871 15.7641 11.1367 16.2501 11.9998 16.2501C13.2424 16.2501 14.2498 15.2427 14.2498 14.0001C14.2498 13.137 13.7638 12.3874 13.0505 12.01L10.0097 15.0509Z" fill={mode === 'dark' ? '#fff' : '#989898'} />
                </svg>}
            </div>
          </div>
          <p className="text-right font-medium text-sm">
            <a
              href="#"
              className="text-underline dark:text-white text-xs"
              onClick={toggleForgetPassword}
            >
              Forger password?
            </a>
          </p>
          <a href="#">
            <div
              onClick={logInModeToggle}
              type="submit"
              className="bg-black button-h dark:bg-white dark:text-black text-center full-size hover:bg-slate-900 rounded-xl  text-white font-bold py-2 my-3 px-4"
            >
              Log in
            </div>
          </a>
          <div className="text-center">
            <p className="dark:text-white text-sm sm:text-base">
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

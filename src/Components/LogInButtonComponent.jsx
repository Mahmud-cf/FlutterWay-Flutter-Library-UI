import React, { useEffect, useRef, useState } from "react";
import cross from "../assets/cross.png";
import rightIcon from "../assets/rightIcon.png";
import whiteRight from "../assets/whiteRight.png";
import LoginPopup from "./LoginPopup";
import CreateAccountpopup from "./CreateAccountpopup";
import ForgetPasswordPopup from "./ForgetPasswordPopup";
import NewPasswordPopup from "./NewPasswordPopup";
import PriceingPopup from "./PriceingPopup";

function LogInButtonComponent({ mode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [priceing, setPriceing] = useState(false);
  const [loginmode, setloginmode] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const popupRef = useRef(null);

  const logInModeToggle = () => {
    setloginmode(!loginmode);
    setLogOut(!logOut)
  }

  const toggleLogout = () => {
    setLogOut(!logOut)
  }

  const togglePriceing = () => {
    setPriceing(true);
  };

  const togglePopup = () => {
    setIsOpen(true);
    setForgetPassword(false);
    setNewPassword(false);
    setCreateAccount(false);
  };

  const toggleForgetPassword = () => {
    setForgetPassword(true);
    setIsOpen(false);
    setNewPassword(false);
    setCreateAccount(false);
  };

  const toggleSetNewPassword = () => {
    setNewPassword(true);
    setIsOpen(false);
    setForgetPassword(false);
    setCreateAccount(false);
  };

  const toggleCreateAccount = () => {
    setCreateAccount(true);
    setNewPassword(false);
    setIsOpen(false);
    setForgetPassword(false);
  };

  const closePopup = () => {
    setIsOpen(false);
    setForgetPassword(false);
    setNewPassword(false);
    setCreateAccount(false);
    setPriceing(false);
  };

  useEffect(() => {
    // Function to handle clicks outside the popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        toggleLogout();
      }
    }

    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleLogout]);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };



  return (
    <div className="flex" >
      {loginmode ?
        <div style={{ order: 2 }} className="ml-4 relative cursor-pointer" onClick={toggleLogout} >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
            <path d="M0.5 16.5C0.5 7.93959 7.43959 1 16 1H32C40.5604 1 47.5 7.93959 47.5 16.5V32.5C47.5 41.0604 40.5604 48 32 48H16C7.43959 48 0.5 41.0604 0.5 32.5V16.5Z" stroke={mode === 'dark' ? '#2e2e2e' : "#F0F0F0"} />
            <path fillRule="evenodd" clipRule="evenodd" d="M24.5713 16C22.5625 16 20.9341 17.6284 20.9341 19.6372C20.9341 21.646 22.5625 23.2745 24.5713 23.2745C26.5801 23.2745 28.2085 21.646 28.2085 19.6372C28.2085 17.6284 26.5801 16 24.5713 16ZM19.4341 19.6372C19.4341 16.8 21.7341 14.5 24.5713 14.5C27.4085 14.5 29.7085 16.8 29.7085 19.6372C29.7085 22.4745 27.4085 24.7745 24.5713 24.7745C21.7341 24.7745 19.4341 22.4745 19.4341 19.6372ZM21.7537 26.5461H27.3902C28.4823 26.5461 29.3478 26.5461 30.0454 26.6031C30.7588 26.6614 31.3624 26.783 31.9136 27.0638C32.8074 27.5192 33.534 28.2459 33.9894 29.1397C34.2709 29.692 34.3921 30.3012 34.4502 31.0221C34.5072 31.7283 34.5072 32.6069 34.5072 33.7172V33.75C34.5072 34.1642 34.1714 34.5 33.7572 34.5C33.3429 34.5 33.0072 34.1642 33.0072 33.75C33.0072 32.5996 33.0066 31.7815 32.9551 31.1426C32.9042 30.5116 32.8075 30.1239 32.6529 29.8206C32.3413 29.2091 31.8442 28.7119 31.2326 28.4003C30.9282 28.2452 30.5439 28.1488 29.9233 28.0981C29.2939 28.0467 28.4896 28.0461 27.3572 28.0461H21.7867C20.6542 28.0461 19.85 28.0467 19.2206 28.0981C18.6 28.1488 18.2157 28.2452 17.9112 28.4003C17.2997 28.7119 16.8025 29.2091 16.4909 29.8206C16.3364 30.1239 16.2397 30.5116 16.1888 31.1426C16.1373 31.7815 16.1367 32.5996 16.1367 33.75C16.1367 34.1642 15.8009 34.5 15.3867 34.5C14.9725 34.5 14.6367 34.1642 14.6367 33.75V33.7172C14.6367 32.6069 14.6367 31.7283 14.6936 31.0221C14.7518 30.3012 14.873 29.692 15.1544 29.1397C15.6098 28.2459 16.3365 27.5192 17.2303 27.0638C17.7814 26.783 18.3851 26.6614 19.0984 26.6031C19.7961 26.5461 20.6616 26.5461 21.7537 26.5461Z" fill={mode === 'dark' ? '#f0f0f0' : '#111'} />
          </svg>
          {logOut ?
            <div ref={popupRef} className="absolute bg-white dark:bg-black right-0 top-16 px-3 py-4 rounded-xl" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '180px' }} >
              <div className="" >
                <p className="font-semibold text-xs dark:text-white" >Abu Anwar MD Abdullah</p>
                <span className="font-normal text-xs text-lite block border-b pb-3 py-2" >abuanwar072@gmail.com</span>
              </div>
              <div className="py-1 mb-2 px-2 rounded-md cursor-pointer hover:bg-gray-100 log-out mt-2 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 5.13556C12.2783 5.13556 12.5336 5.28957 12.6634 5.53564L15.7854 11.4543L20.8173 7.89896C21.0789 7.71407 21.4291 7.71582 21.6889 7.90331C21.9488 8.09081 22.0608 8.42264 21.9677 8.72923L18.6543 19.6501C18.5584 19.9662 18.267 20.1823 17.9366 20.1823H6.06348C5.73314 20.1823 5.4417 19.9662 5.34579 19.6501L2.03235 8.72923C1.93933 8.42264 2.05134 8.09081 2.31115 7.90331C2.57096 7.71582 2.92118 7.71407 3.18284 7.89896L8.21469 11.4543L11.3367 5.53564C11.4665 5.28957 11.7218 5.13556 12 5.13556ZM12 7.49309L9.1429 12.9097C9.0422 13.1006 8.86415 13.2389 8.65426 13.2891C8.44437 13.3394 8.223 13.2969 8.04673 13.1723L4.10233 10.3853L6.61969 18.6823H17.3804L19.8978 10.3853L15.9534 13.1723C15.7771 13.2969 15.5557 13.3394 15.3458 13.2891C15.1359 13.2389 14.9579 13.1006 14.8572 12.9097L12 7.49309Z" fill={mode === 'dark' ? '#F0F0F0' : '#111'} />
                </svg>
                <span className="ml-2 text-sm dark:text-white" >Get Pro</span>
              </div>
              <div className="py-1 mb-2 px-2 rounded-md cursor-pointer hover:bg-gray-100 log-out mt-2 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.7679 0.40625H12.2321C13.0449 0.40624 13.7006 0.40624 14.2315 0.44961C14.7781 0.49428 15.2582 0.58864 15.7025 0.81498C16.4081 1.1745 16.9818 1.74818 17.3413 2.45379C17.5676 2.898 17.662 3.37815 17.7066 3.92478C17.75 4.45567 17.75 5.11125 17.75 5.92404V16.9054C17.75 17.3329 17.75 17.7044 17.7229 18.0003C17.6954 18.2998 17.6324 18.647 17.4145 18.9461C17.1218 19.3478 16.6722 19.6062 16.1778 19.6567C15.8096 19.6942 15.4779 19.5738 15.2053 19.4467C14.9361 19.3212 14.6151 19.134 14.2458 18.9187L10.234 16.5798C9.6029 16.2119 9.4293 16.1209 9.262 16.085C9.0893 16.048 8.9107 16.048 8.738 16.085C8.5707 16.1209 8.3971 16.2119 7.766 16.5798L3.75422 18.9187C3.38488 19.134 3.06393 19.3212 2.79471 19.4467C2.52212 19.5738 2.19041 19.6942 1.82223 19.6567C1.32781 19.6062 0.878171 19.3478 0.585531 18.9461C0.367621 18.647 0.304581 18.2998 0.277101 18.0003C0.249971 17.7044 0.249981 17.3329 0.250001 16.9054V5.92415C0.249991 5.11131 0.249991 4.45569 0.293371 3.92478C0.338031 3.37815 0.432391 2.898 0.658731 2.45379C1.01825 1.74818 1.59193 1.1745 2.29754 0.81498C2.74176 0.58864 3.2219 0.49428 3.76853 0.44961C4.29944 0.40624 4.95506 0.40624 5.7679 0.40625ZM3.89068 1.94463C3.43681 1.98172 3.17604 2.05085 2.97852 2.15149C2.55516 2.3672 2.21095 2.71141 1.99524 3.13477C1.8946 3.33229 1.82547 3.59305 1.78838 4.04693C1.75059 4.50956 1.75 5.1038 1.75 5.95625V16.8714C1.75 17.3428 1.75076 17.6444 1.77083 17.8632C1.78333 17.9995 1.80046 18.0572 1.80591 18.0733C1.84493 18.1213 1.90045 18.1532 1.96164 18.1627C1.97829 18.1593 2.03678 18.1451 2.16077 18.0872C2.35992 17.9944 2.62083 17.8431 3.02811 17.6057L7.0105 15.2839C7.0403 15.2665 7.0698 15.2493 7.0988 15.2324C7.5988 14.9404 7.9916 14.7109 8.4237 14.6183C8.8036 14.5369 9.1964 14.5369 9.5763 14.6183C10.0084 14.7109 10.4012 14.9404 10.9012 15.2324C10.9302 15.2493 10.9597 15.2665 10.9895 15.2839L14.9719 17.6057C15.3792 17.8431 15.6401 17.9944 15.8392 18.0872C15.9632 18.1451 16.0217 18.1593 16.0384 18.1627C16.0996 18.1532 16.1551 18.1213 16.1941 18.0733C16.1995 18.0572 16.2167 17.9995 16.2292 17.8632C16.2492 17.6444 16.25 17.3428 16.25 16.8714V5.95625C16.25 5.1038 16.2494 4.50956 16.2116 4.04693C16.1745 3.59305 16.1054 3.33229 16.0048 3.13477C15.7891 2.71141 15.4448 2.3672 15.0215 2.15149C14.824 2.05085 14.5632 1.98172 14.1093 1.94463C13.6467 1.90683 13.0525 1.90625 12.2 1.90625H5.8C4.94755 1.90625 4.35331 1.90683 3.89068 1.94463ZM12.5303 5.31342C12.8232 5.60631 12.8232 6.08119 12.5303 6.37408L8.5303 10.3741C8.2374 10.667 7.7626 10.667 7.4697 10.3741L5.46967 8.3741C5.17678 8.0812 5.17678 7.60631 5.46967 7.31342C5.76257 7.02053 6.23744 7.02053 6.53033 7.31342L8 8.7831L11.4697 5.31342C11.7626 5.02053 12.2374 5.02053 12.5303 5.31342Z" fill={mode === 'dark' ? '#F0F0F0' : '#111'} />
                </svg>
                <span className="ml-2 text-sm dark:text-white" >Collections</span>
              </div>
              <div onClick={logInModeToggle} className="py-1 mb-2 px-2 rounded-md cursor-pointer hover:bg-gray-100 log-out mt-2 flex items-center" >
                <span className="text-sm dark:text-white" >Log Out</span>
              </div>
            </div> : ''
          }
        </div> :
        <button
          className="w-20 hidden button-h res-button lg:block sm:w-24 ml-4 bg-white rounded-xl text-black p-2 sm:p-3 font-semibold button-border dark:bg-black "
          onClick={togglePopup}
        >
          Log in
        </button>
      }
      {isOpen && (
        <LoginPopup
          mode={mode}
          loginmode={loginmode}
          logInModeToggle={logInModeToggle}
          closePopup={closePopup}
          toggleForgetPassword={toggleForgetPassword}
          toggleCreateAccount={toggleCreateAccount}
        />
      )}

      {createAccount && (
        <CreateAccountpopup
          mode={mode}
          closePopup={closePopup}
          togglePopup={togglePopup}
        />
      )}

      {forgetPassword && (
        <ForgetPasswordPopup
          mode={mode}
          closePopup={closePopup}
          toggleSetNewPassword={toggleSetNewPassword}
          togglePopup={togglePopup}
        />
      )}

      {newPassword && <NewPasswordPopup mode={mode} closePopup={closePopup} />}

      <button
        className="w-24 hidden button-h res-button lg:block lg:w-24 ml-4 bg-black dark:hover:bg-gray-300 hover:bg-zinc-600 transition-all rounded-xl text-white p-2 sm:p-3 font-semibold dark-button dark:text-black "
        onClick={togglePriceing}
      >
        Get Pro
      </button>
      {priceing && (
        <PriceingPopup
          mode={mode}
          rightIcon={rightIcon}
          whiteRight={whiteRight}
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default LogInButtonComponent;

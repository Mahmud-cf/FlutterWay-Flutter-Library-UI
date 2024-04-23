import React, { useEffect, useRef, useState } from "react";
import { template } from "../AllData";
import save from "../assets/save.png";
import download from "../assets/downloadCode.png";
import { useTheme } from "../Context/Context";

function TemplateModal({ handleClosePopup, selectedItem }) {
  const [copy, setCopy] = useState(false);
  const tempItem = template.slice(3, 4)[0];
  const popupRef = useRef(null);

  const {mode} = useTheme()
  console.log(mode)

  useEffect(() => {
    // Function to handle clicks outside the popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    }

    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClosePopup]);

  const handleCopy = () => {
    setCopy(!copy);
  };


  return (
    <div className="the-pop-up template-modal modal-h fixed inset-0 z-50 flex items-center justify-end">
      <div
        ref={popupRef}
        className="bg-white min-h-screen overflow-y-scroll dark:bg-black w-5/12 p-4 shadow-lg popup relative"
      >
        <span
          className="absolute right-5 top-5 cursor-pointer"
          onClick={handleClosePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9694 2H12.0306C13.52 2 14.6793 1.99999 15.6122 2.06889C16.559 2.13881 17.3317 2.28267 18.0358 2.60167C19.5274 3.27752 20.7225 4.47259 21.3983 5.96423C21.7173 6.66827 21.8612 7.44105 21.9311 8.38781C22 9.32065 22 10.48 22 11.9694V12.0306C22 13.52 22 14.6793 21.9311 15.6122C21.8612 16.559 21.7173 17.3317 21.3983 18.0358C20.7225 19.5274 19.5274 20.7225 18.0358 21.3983C17.3317 21.7173 16.559 21.8612 15.6122 21.9311C14.6793 22 13.52 22 12.0306 22H11.9694C10.48 22 9.32065 22 8.38781 21.9311C7.44105 21.8612 6.66827 21.7173 5.96423 21.3983C4.47259 20.7225 3.27752 19.5274 2.60167 18.0358C2.28267 17.3317 2.13881 16.559 2.06889 15.6122C1.99999 14.6793 2 13.52 2 12.0306V11.9694C2 10.48 1.99999 9.32066 2.06889 8.38781C2.13881 7.44105 2.28267 6.66827 2.60167 5.96423C3.27752 4.47259 4.47259 3.27752 5.96423 2.60167C6.66827 2.28267 7.44105 2.13881 8.38781 2.06889C9.32066 1.99999 10.48 2 11.9694 2ZM8.49829 3.56482C7.63466 3.6286 7.05961 3.75215 6.58329 3.96796C5.42313 4.49363 4.49363 5.42313 3.96796 6.58329C3.75215 7.05961 3.6286 7.63466 3.56482 8.49829C3.50048 9.36945 3.5 10.4736 3.5 12C3.5 13.5264 3.50048 14.6306 3.56482 15.5017C3.6286 16.3653 3.75215 16.9404 3.96796 17.4167C4.49363 18.5769 5.42313 19.5064 6.58329 20.032C7.05961 20.2479 7.63466 20.3714 8.49829 20.4352C9.36945 20.4995 10.4736 20.5 12 20.5C13.5264 20.5 14.6306 20.4995 15.5017 20.4352C16.3653 20.3714 16.9404 20.2479 17.4167 20.032C18.5769 19.5064 19.5064 18.5769 20.032 17.4167C20.2479 16.9404 20.3714 16.3653 20.4352 15.5017C20.4995 14.6306 20.5 13.5264 20.5 12C20.5 10.4736 20.4995 9.36945 20.4352 8.49829C20.3714 7.63466 20.2479 7.05961 20.032 6.58329C19.5064 5.42313 18.5769 4.49363 17.4167 3.96796C16.9404 3.75215 16.3653 3.6286 15.5017 3.56482C14.6306 3.50048 13.5264 3.5 12 3.5C10.4736 3.5 9.36945 3.50048 8.49829 3.56482ZM8.99478 8.99481C9.28767 8.70191 9.76254 8.70191 10.0554 8.99481L12 10.9394L13.9446 8.99481C14.2375 8.70191 14.7123 8.70191 15.0052 8.99481C15.2981 9.2877 15.2981 9.76257 15.0052 10.0555L13.0607 12L15.0052 13.9446C15.2981 14.2374 15.2981 14.7123 15.0052 15.0052C14.7123 15.2981 14.2374 15.2981 13.9445 15.0052L12 13.0607L10.0555 15.0052C9.76258 15.2981 9.28771 15.2981 8.99482 15.0052C8.70192 14.7123 8.70192 14.2374 8.99482 13.9446L10.9393 12L8.99478 10.0555C8.70188 9.76257 8.70188 9.2877 8.99478 8.99481Z"
              fill={mode === 'dark' ? '#fff' : '#000'}
            />
          </svg>
        </span>
        <div>
          <h2
            className="text-xl font-bold mb-4 dark:text-white"
            onClick={handleCopy}
          >
            Sign in page
          </h2>
          <div className="flex items-center mb-5">
            <button className="w-32 button-h bg-black rounded-xl text-white p-2 font-semibold dark:bg-white dark:text-black  ">
              Copy code
            </button>

            <button className="w-28 ml-4 button-h bg-white rounded-xl text-black p-2 font-semibold button-border dark:bg-black">
              Copy link
            </button>
            <div
              className="flex ml-5 button-h cursor-pointer temp-model-button "
              onClick={handleCopy}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5H32C40.5604 0.5 47.5 7.43959 47.5 16V32C47.5 40.5604 40.5604 47.5 32 47.5H16C7.43959 47.5 0.5 40.5604 0.5 32V16Z" stroke={mode === 'dark' ? '#2E2E2E' : '#F0F0F0'} />
                <path fillRule="evenodd" clipr
                  ule="evenodd" d="M14 24C14 22.3086 15.3711 20.9375 17.0625 20.9375C18.7539 20.9375 20.125 22.3086 20.125 24C20.125 25.6914 18.7539 27.0625 17.0625 27.0625C15.3711 27.0625 14 25.6914 14 24ZM17.0625 22.4375C16.1996 22.4375 15.5 23.1371 15.5 24C15.5 24.8629 16.1996 25.5625 17.0625 25.5625C17.9254 25.5625 18.625 24.8629 18.625 24C18.625 23.1371 17.9254 22.4375 17.0625 22.4375ZM20.9375 24C20.9375 22.3086 22.3086 20.9375 24 20.9375C25.6914 20.9375 27.0625 22.3086 27.0625 24C27.0625 25.6914 25.6914 27.0625 24 27.0625C22.3086 27.0625 20.9375 25.6914 20.9375 24ZM24 22.4375C23.1371 22.4375 22.4375 23.1371 22.4375 24C22.4375 24.8629 23.1371 25.5625 24 25.5625C24.8629 25.5625 25.5625 24.8629 25.5625 24C25.5625 23.1371 24.8629 22.4375 24 22.4375ZM27.875 24C27.875 22.3086 29.2461 20.9375 30.9375 20.9375C32.6289 20.9375 34 22.3086 34 24C34 25.6914 32.6289 27.0625 30.9375 27.0625C29.2461 27.0625 27.875 25.6914 27.875 24ZM30.9375 22.4375C30.0746 22.4375 29.375 23.1371 29.375 24C29.375 24.8629 30.0746 25.5625 30.9375 25.5625C31.8004 25.5625 32.5 24.8629 32.5 24C32.5 23.1371 31.8004 22.4375 30.9375 22.4375Z" fill={mode === 'dark' ? '#fff' : '#111'} />
              </svg>
            </div>
          </div>
          <div>
            <img className="mx-auto" src={selectedItem.img} alt="" />
          </div>
          <div className="flex my-6">
            <h2 className="font-normal dark:text-white">Tags: </h2>
            <div className="secondery text-sec font-medium px-2 py-1 rounded-md text-xs ml-2">
              Auth
            </div>
            <div className="secondery text-sec font-medium px-2 py-1 rounded-md text-xs ml-2">
              Sign in
            </div>
            <div className="secondery text-sec font-medium px-2 py-1 rounded-md text-xs ml-2">
              Register
            </div>
          </div>
          {copy && (
            <div
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                top: "110px",
                right: "105px",
              }}
              className="absolute w-48 bg-white dark:bg-black rounded-xl border border-solid border-gray-200 dark:border-gray-900"
            >
              <div className="flex items-center p-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 cursor-pointer rounded-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.7679 2.40625H15.2321C16.0449 2.40624 16.7006 2.40624 17.2315 2.44961C17.7781 2.49428 18.2582 2.58864 18.7025 2.81498C19.4081 3.1745 19.9818 3.74818 20.3413 4.45379C20.5676 4.898 20.662 5.37815 20.7066 5.92478C20.75 6.45567 20.75 7.11125 20.75 7.92404V18.9054C20.75 19.3329 20.75 19.7044 20.7229 20.0003C20.6954 20.2998 20.6324 20.647 20.4145 20.9461C20.1218 21.3478 19.6722 21.6062 19.1778 21.6567C18.8096 21.6942 18.4779 21.5738 18.2053 21.4467C17.9361 21.3212 17.6151 21.134 17.2458 20.9187L13.234 18.5798C12.6029 18.2119 12.4293 18.1209 12.262 18.085C12.0893 18.048 11.9107 18.048 11.738 18.085C11.5707 18.1209 11.3971 18.2119 10.766 18.5798L6.75422 20.9187C6.38488 21.134 6.06393 21.3212 5.79471 21.4467C5.52212 21.5738 5.19041 21.6942 4.82223 21.6567C4.32781 21.6062 3.87817 21.3478 3.58553 20.9461C3.36762 20.647 3.30458 20.2998 3.2771 20.0003C3.24997 19.7044 3.24998 19.3329 3.25 18.9054V7.92415C3.24999 7.11131 3.24999 6.45569 3.29337 5.92478C3.33803 5.37815 3.43239 4.898 3.65873 4.45379C4.01825 3.74818 4.59193 3.1745 5.29754 2.81498C5.74176 2.58864 6.2219 2.49428 6.76853 2.44961C7.29944 2.40624 7.95506 2.40624 8.7679 2.40625ZM6.89068 3.94463C6.43681 3.98172 6.17604 4.05085 5.97852 4.15149C5.55516 4.3672 5.21095 4.71141 4.99524 5.13477C4.8946 5.33229 4.82547 5.59305 4.78838 6.04693C4.75059 6.50956 4.75 7.1038 4.75 7.95625V18.8714C4.75 19.3428 4.75076 19.6444 4.77083 19.8632C4.78333 19.9995 4.80046 20.0572 4.80591 20.0733C4.84493 20.1213 4.90045 20.1532 4.96164 20.1627C4.97829 20.1593 5.03678 20.1451 5.16077 20.0872C5.35992 19.9944 5.62083 19.8431 6.02811 19.6057L10.0105 17.2839C10.0403 17.2665 10.0698 17.2493 10.0988 17.2324C10.5988 16.9404 10.9916 16.7109 11.4237 16.6183C11.8036 16.5369 12.1964 16.5369 12.5763 16.6183C13.0084 16.7109 13.4012 16.9404 13.9012 17.2324C13.9302 17.2493 13.9597 17.2665 13.9895 17.2839L17.9719 19.6057C18.3792 19.8431 18.6401 19.9944 18.8392 20.0872C18.9632 20.1451 19.0217 20.1593 19.0384 20.1627C19.0996 20.1532 19.1551 20.1213 19.1941 20.0733C19.1995 20.0572 19.2167 19.9995 19.2292 19.8632C19.2492 19.6444 19.25 19.3428 19.25 18.8714V7.95625C19.25 7.1038 19.2494 6.50956 19.2116 6.04693C19.1745 5.59305 19.1054 5.33229 19.0048 5.13477C18.7891 4.71141 18.4448 4.3672 18.0215 4.15149C17.824 4.05085 17.5632 3.98172 17.1093 3.94463C16.6467 3.90683 16.0525 3.90625 15.2 3.90625H8.8C7.94755 3.90625 7.35331 3.90683 6.89068 3.94463Z" fill={mode === 'dark' ? '#fff':'#111'} />
                </svg>
                <span className="dark:text-white ml-3" >Save</span>{" "}
              </div>
              <div className="flex items-center p-2  hover:bg-zinc-100 dark:hover:bg-zinc-600 cursor-pointer rounded-md transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M12 4.05542C12.4142 4.05542 12.75 4.39121 12.75 4.80542V13.3675L15.6018 10.7289C15.9058 10.4476 16.3803 10.466 16.6616 10.7701C16.943 11.0741 16.9245 11.5486 16.6205 11.8299L12.5094 15.6337C12.2219 15.8997 11.7781 15.8997 11.4907 15.6337L7.37956 11.8299C7.07552 11.5486 7.0571 11.0741 7.33841 10.7701C7.61972 10.466 8.09424 10.4476 8.39827 10.7289L11.25 13.3675V4.80542C11.25 4.39121 11.5858 4.05542 12 4.05542ZM2.75 9.19431C3.16421 9.19431 3.5 9.5301 3.5 9.94431C3.5 14.6388 7.30558 18.4443 12 18.4443C16.6944 18.4443 20.5 14.6388 20.5 9.94431C20.5 9.5301 20.8358 9.19431 21.25 9.19431C21.6642 9.19431 22 9.5301 22 9.94431C22 15.4672 17.5228 19.9443 12 19.9443C6.47715 19.9443 2 15.4672 2 9.94431C2 9.5301 2.33579 9.19431 2.75 9.19431Z"  fill={mode === 'dark' ? '#fff':'#111'} />
</svg>
                <span className="dark:text-white ml-3">Download code</span>{" "}
              </div>
            </div>
          )}
          <div className="p-1 sm:p-3 border flex border-solid border-gray-200 dark:border-zinc-800 rounded-xl">
            <img className="w-24 sm:w-40 rounded-md" src={tempItem.img} alt="" />
            <div className="ml-3">
              <p className="text-lite text-xs">This screen is part of</p>
              <h2 className="font-medium mb-3 dark:text-white">
                Shoplo - Shop Template
              </h2>
              <a
                href="/template"
                className="px-3 border dark:text-white border-solid border-gray-200 dark:border-zinc-800  rounded-xl py-1 font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                View full screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateModal;

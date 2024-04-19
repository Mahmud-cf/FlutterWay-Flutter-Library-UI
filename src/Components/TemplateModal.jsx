import React, { useEffect, useRef, useState } from "react";
import { template } from "../AllData";
import save from "../assets/save.png";
import download from "../assets/downloadCode.png";

function TemplateModal({ mode, handleClosePopup, selectedItem }) {
  const [copy, setCopy] = useState(false);
  const tempItem = template.slice(3, 4)[0];
  const popupRef = useRef(null);

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
    <div className="the-pop-up template-modal fixed inset-0 z-50 flex items-center justify-end">
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
              fill={mode === 'dark'? '#fff': '#000'}
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
            <button className="w-32 bg-black rounded-xl text-white p-2 font-semibold dark:bg-white dark:text-black  ">
              Copy code
            </button>

            <button className="w-28 ml-4  bg-white rounded-xl text-black p-2 font-semibold button-border dark:bg-black">
              Copy link
            </button>
            <div
              className="flex ml-5 border border-slid border-gray-200 cursor-pointer py-4 px-2 rounded-xl"
              onClick={handleCopy}
            >
              <div className="w-2 h-2 mr-1 rounded-lg border-2 border-solid border-black dark:border-white"></div>
              <div className="w-2 h-2 mr-1 rounded-lg border-2 border-solid border-black dark:border-white"></div>
              <div className="w-2 h-2 rounded-lg border-2 border-solid border-black dark:border-white"></div>
            </div>
          </div>
          <div>
            <img className="mx-auto" src={selectedItem.img} alt="" />
          </div>
          <div className="flex my-6">
            <h2 className="font-semibold dark:text-white">Tags: </h2>
            <div className="bg-gray-200 px-2 py-1 rounded-md text-sm ml-2">
              Auth
            </div>
            <div className="bg-gray-200 px-2 py-1 rounded-md text-sm ml-2">
              Sign in
            </div>
            <div className="bg-gray-200 px-2 py-1 rounded-md text-sm ml-2">
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
                <img className="mr-2" src={save} alt="" />{" "}
                <span className="dark:text-white">Save</span>{" "}
              </div>
              <div className="flex items-center p-2  hover:bg-zinc-100 dark:hover:bg-zinc-600 cursor-pointer rounded-md transition-all">
                <img className="mr-2" src={download} alt="" />{" "}
                <span className="dark:text-white">Download code</span>{" "}
              </div>
            </div>
          )}
          <div className="p-1 sm:p-3 border flex border-solid border-gray-200 rounded-xl">
            <img className="w-24 sm:w-40 rounded-md" src={tempItem.img} alt="" />
            <div className="ml-3">
              <p className="text-lite text-sm">This screen is part of</p>
              <h2 className="font-semibold mb-3 dark:text-white">
                Shoplo - Shop Template
              </h2>
              <a
                href="/template"
                className="px-3 border dark:text-white border-solid border-gray-200 rounded-xl py-1 font-medium"
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

import React, { useState } from "react";
import { template } from "../AllData";
import save from '../assets/save.png'
import download from '../assets/downloadCode.png'

function TemplateModal({ handleClosePopup, selectedItem }) {

  const [copy, setCopy] = useState(false)
  const tempItem = template.slice(3, 4)[0];

  const handleCopy = () => {
    setCopy(!copy)
  }

  console.log(copy)

  return (
    <div className="the-pop-up template-modal fixed inset-0 z-50 flex items-center justify-end">
      <div className="bg-white min-h-screen overflow-y-scroll dark:bg-black w-5/12 p-4 shadow-lg popup relative">
        <span className="close dark:text-white cursor-pointer absolute right-5 top-5 flex items-center justify-center text-center font-bold text-xl border border-solid border-black dark:border-white rounded-xl w-7 h-7 " onClick={handleClosePopup}>
          &times;
        </span>
        <div>
        <h2 className="text-xl font-bold mb-4 dark:text-white" onClick={handleCopy} >
            Sign in page
          </h2>
          <div className="flex items-center mb-5">
            <button className="w-28 sm:w-40 bg-black rounded-xl text-white p-1 sm:p-2 font-semibold dark:bg-white dark:text-black  ">
              Copy code
            </button>

            <button className="w-20 sm:w-24 ml-4  bg-white rounded-xl text-black p-1 sm:p-2 font-semibold button-border dark:bg-black">
              Copy link
            </button>
            <div className="flex ml-5 border border-slid border-gray-200 cursor-pointer py-4 px-2 rounded-xl" onClick={handleCopy}  >
              <div className="w-2 h-2 mr-1 rounded-lg border-2 border-solid border-black dark:border-white" ></div>
              <div className="w-2 h-2 mr-1 rounded-lg border-2 border-solid border-black dark:border-white" ></div>
              <div className="w-2 h-2 rounded-lg border-2 border-solid border-black dark:border-white" ></div>
            </div>
          </div>
          <div>
            <img className="mx-auto" src={selectedItem.img} alt="" />
          </div>
          <div className="flex my-6">
            <h2 className="font-semibold dark:text-white" >Tags: </h2>
            <div className="bg-gray-200 px-2 py-1 rounded-md text-sm ml-2" >Auth</div>
            <div className="bg-gray-200 px-2 py-1 rounded-md text-sm ml-2" >Sign in</div>
            <div className="bg-gray-200 px-2 py-1 rounded-md text-sm ml-2" >Register</div>
          </div>
          {copy && (
            <div style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', top:'110px', right:'105px'}} className="absolute w-48 bg-white dark:bg-black rounded-xl border border-solid border-gray-200 dark:border-gray-900" >
            <div className="flex items-center p-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 cursor-pointer rounded-md transition-all" ><img className="mr-2" src={save} alt="" /> <span className="dark:text-white" >Save</span> </div>
            <div className="flex items-center p-2  hover:bg-zinc-100 dark:hover:bg-zinc-600 cursor-pointer rounded-md transition-all" ><img className="mr-2" src={download} alt="" /> <span className="dark:text-white">Download code</span> </div>
          </div>
          )}
          <div className="p-3 border flex border-solid border-gray-200 rounded-xl" >
            <img className="w-40" src={tempItem.img} alt="" />
            <div className="ml-3" >
              <p className="text-lite text-sm" >This screen is part of</p>
              <h2 className="font-semibold mb-3 dark:text-white" >Shoplo - Shop Template</h2>
              <a href="/template" className="px-3 border dark:text-white border-solid border-gray-200 rounded-xl py-1 font-medium" >View full screen</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateModal;

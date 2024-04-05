import React from "react";
import { ScreensMenu, screensImg } from "../AllData";
import filter from "../assets/filter.png";
import right from "../assets/right.png";
import shaddow from "../assets/shaddow.png";
import copy from "../assets/book.png";

function Screens() {
  return (
    <div className="mt-7">
      <div className="template-title flex justify-between items-center mb-5">
        <h2 className="text-2xl font-normal dark:text-white">Screens</h2>
        <p className="text-lite text-sm cursor-pointer dark:hover:text-white  hover:underline hover:text-black ">
          See all
        </p>
      </div>
      <div className="screens-menu flex items-center">
        <div className="filter-button">
          <div className="flex justify-center items-center rounded-3xl bg-lite px-3 py-1">
            <img src={filter} alt="" />
            <span>Filter</span>
          </div>
        </div>
        <div className="flex screens-menu-item pb-2 overflow-x-auto gap-1 items-center">
          {" "}
          {/* Apply overflow-x-auto for horizontal scrolling */}
          {ScreensMenu.map((screenMenuItem) => (
            <span
              className="py-1 px-3 rounded-3xl whitespace-nowrap dark:text-white dark:hover:text-black "
              key={screenMenuItem.id}
            >
              {screenMenuItem.title}
            </span>
          ))}
          <img src={right} alt="" />
        </div>
      </div>
      <div className="screens-image-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-5">
        {screensImg.map((scrnImg) => (
          <div key={scrnImg.id} className="mb-3 relative z-0 scrn-img scrnImg">
            <img className="cursor-pointer" src={scrnImg.img} alt="" />
            <img
              className="absolute left-0 right-0 z-10 shaddow-img bottom-0.5"
              src={shaddow}
              alt=""
            />
            <div className="scrn-button justify-between items-center">
              <div className="hidden items-center bg-white rounded-md py-1 px-3 scrn-button-copy-img absolute z-20">
                <img src={copy} alt="" />
                <span>20</span>
              </div>
              <div className="hidden items-center bg-white rounded-md py-1 px-3 scrn-button-copy-button  absolute z-20" >Copy code</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Screens;

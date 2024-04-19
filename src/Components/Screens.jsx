import React, { useEffect, useRef, useState } from "react";
import { ScreensMenu, screensImg } from "../AllData";
import filter from "../assets/filter.png";
import right from "../assets/right.png";
import shaddow from "../assets/shaddow.png";
import copy from "../assets/book.png";
import TemplateModal from "./TemplateModal";
import Slider from "./SliderShow";
import SlideNav from "./SlideNav";

function Screens({mode, screensImgSlice}) {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  

  const handleShowItem = (tempItem) => {
    setSelectedItem(tempItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div className="mt-7">
      <div className="template-title flex justify-between items-center mb-5">
        <h2 className="text-2xl font-normal dark:text-white">Screens</h2>
        <p className="text-lite text-sm cursor-pointer dark:hover:text-white  hover:underline hover:text-black ">
          <a href="./screens">See all</a>
        </p>
      </div>
      <div className="screens-menu flex items-center">
        <div className="filter-button">
          <div className="flex justify-center items-center rounded-3xl bg-lite" style={{padding:'6px 22px'}} >
            <img src={filter} alt="" />
            <span className="ml-2" >Filter</span>
          </div>
        </div>
        <SlideNav mode={mode} />
      </div>
      <div className="screens-image-wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-2 mt-5">
        {screensImgSlice.map((scrnImg) => (
          <div key={scrnImg.id}  onClick={() => handleShowItem(scrnImg)} className="mb-3 sm:aspect-video relative z-0 scrn-img scrnImg">
            <img className="cursor-pointer mx-auto" src={scrnImg.img} alt="" />
            <img
              className="absolute mx-auto left-0 right-0 z-10 shaddow-img bottom-0.5"
              src={shaddow}
              alt=""
            />
            <div className="absolute z-20 hidden scrn-button justify-between items-center">
              <div className="items-center flex mr-3 cursor-pointer bg-white rounded-md py-1 px-3 scrn-button-copy-img">
                <img src={copy} alt="" />
                <span className="ml-2" >20</span>
              </div>
              <div className="cursor-pointer w-28 items-center bg-white rounded-md py-1 px-3 scrn-button-copy-button" >Copy code</div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <TemplateModal handleClosePopup={handleClosePopup} selectedItem={selectedItem} />
        </div>
      )}
    </div>
  );
}

export default Screens;

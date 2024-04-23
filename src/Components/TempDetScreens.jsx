import React, { useEffect, useRef, useState } from "react";
import { ScreensMenu, screensImg } from "../AllData";
import filter from "../assets/filter.png";
import right from "../assets/right.png";
import shaddow from "../assets/shaddow.png";
import copy from "../assets/book.png";
import TemplateModal from "./TemplateModal";
import Slider from "./SliderShow";
import SlideNav from "./SlideNav";

function TempDetScreens({ mode, screensImgSlice }) {

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
        <h2 className="text-xl sm:text-2xl font-normal dark:text-white">Screens</h2>
        <p className="text-lite text-xs sm:text-sm cursor-pointer dark:hover:text-white  hover:underline hover:text-black ">
          <a href="./screens">See all</a>
        </p>
      </div>
      <div className="screens-menu flex items-center">
        <div className="filter-button">
          <div className="flex justify-center filter items-center rounded-3xl bg-lite " style={{ padding: '6px 22px' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.53754 2.33337C5.44066 2.33337 4.55146 3.22257 4.55146 4.31945C4.55146 5.41633 5.44065 6.30553 6.53753 6.30553C7.63439 6.30553 8.52359 5.41633 8.52359 4.31945C8.52359 3.22257 7.63439 2.33337 6.53754 2.33337ZM3.62157 3.6732C3.91689 2.33472 5.11027 1.33337 6.53754 1.33337C7.96479 1.33337 9.15819 2.33472 9.45352 3.6732L13.1183 3.67321C13.3945 3.67321 13.6183 3.89706 13.6183 4.17321C13.6183 4.44935 13.3945 4.67321 13.1183 4.67321L9.50285 4.6732C9.32792 6.15563 8.06699 7.30551 6.53753 7.30551C5.00807 7.30551 3.74717 6.15563 3.57219 4.67321L2.8815 4.6732C2.60535 4.6732 2.3815 4.44935 2.3815 4.1732C2.3815 3.89706 2.60535 3.6732 2.8815 3.6732H3.62157ZM9.46239 9.69457C8.36552 9.69457 7.47632 10.5838 7.47632 11.6806C7.47632 12.7775 8.36552 13.6667 9.46239 13.6667C10.5593 13.6667 11.4485 12.7775 11.4485 11.6806C11.4485 10.5838 10.5593 9.69457 9.46239 9.69457ZM6.49704 11.3269C6.67199 9.84444 7.93292 8.69457 9.46239 8.69457C10.9919 8.69457 12.2528 9.84444 12.4277 11.3269H13.1183C13.3945 11.3269 13.6183 11.5508 13.6183 11.8269C13.6183 12.103 13.3945 12.3269 13.1183 12.3269H12.3783C12.0831 13.6654 10.8897 14.6667 9.46239 14.6667C8.03512 14.6667 6.84172 13.6654 6.54643 12.3269H2.88155C2.60541 12.3269 2.38155 12.103 2.38155 11.8269C2.38155 11.5508 2.60541 11.3269 2.88155 11.3269H6.49704Z" fill={mode === 'dark' ? '#F0F0F0' : '#111111'} />
            </svg>
            <span className="ml-2 text-sm" >Filter</span>
          </div>
        </div>
        <SlideNav mode={mode} />
      </div>
      <div className="screens-image-wrapper flex flex-row flex-nowrap overflow-x-auto gap-2 mt-5">
        {screensImgSlice.map((scrnImg) => (
          <div key={scrnImg.id} onClick={() => handleShowItem(scrnImg)} className="flex-shrink-0 scrn-img w-56 mb-3 sm:aspect-video relative z-0 scrn-img scrnImg ">
            <img className="cursor-pointer mx-auto" src={scrnImg.img} alt="" />
            <img
              className="absolute mx-auto left-0 right-0 z-10 shaddow-img bottom-0.5"
              src={shaddow}
              alt=""
            />
            <div className="absolute z-20 hidden scrn-button justify-between items-center">
              <div className="items-center copy-btn-h flex mr-3 cursor-pointer bg-white rounded-md py-1 px-3 scrn-button-copy-img">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.33 2.94861C10.9104 2.91433 10.3742 2.91394 9.61923 2.91394H4.12886C3.85272 2.91394 3.62886 2.69009 3.62886 2.41394C3.62886 2.1378 3.85272 1.91394 4.12886 1.91394H9.64123C10.3693 1.91394 10.9463 1.91393 11.4114 1.95193C11.887 1.99079 12.2894 2.07186 12.6568 2.25909C13.2527 2.56269 13.7372 3.04713 14.0408 3.64297C14.228 4.01042 14.309 4.41284 14.3479 4.88843C14.3859 5.35351 14.3859 5.93051 14.3859 6.65859V12.8006C14.3859 13.0767 14.162 13.3006 13.8859 13.3006C13.6098 13.3006 13.3859 13.0767 13.3859 12.8006V6.68061C13.3859 5.92562 13.3855 5.38945 13.3512 4.96986C13.3174 4.55611 13.2532 4.29995 13.1498 4.09696C12.942 3.68928 12.6106 3.35782 12.2029 3.15009C11.9999 3.04667 11.7437 2.98242 11.33 2.94861ZM4.29518 4.51997H9.20676C9.5629 4.51996 9.8601 4.51995 10.1029 4.53979C10.3562 4.56049 10.594 4.60523 10.8188 4.71979C11.1638 4.89555 11.4442 5.17602 11.62 5.52099C11.7346 5.74583 11.7793 5.9836 11.8 6.23685C11.8198 6.47967 11.8198 6.7769 11.8198 7.13298V12.6342C11.8198 12.9903 11.8198 13.2876 11.8 13.5304C11.7793 13.7836 11.7346 14.0214 11.62 14.2462C11.4442 14.5912 11.1638 14.8717 10.8188 15.0474C10.594 15.162 10.3562 15.2068 10.1029 15.2274C9.8601 15.2473 9.5629 15.2473 9.20676 15.2472H4.29516C3.93906 15.2473 3.64184 15.2473 3.39902 15.2274C3.14576 15.2068 2.90799 15.162 2.68314 15.0474C2.33818 14.8717 2.05772 14.5912 1.88195 14.2462C1.76739 14.0214 1.72264 13.7836 1.70196 13.5304C1.68212 13.2876 1.68212 12.9903 1.68213 12.6342V7.13298C1.68212 6.77691 1.68212 6.47967 1.70196 6.23685C1.72264 5.9836 1.76739 5.74583 1.88195 5.52099C2.05772 5.17602 2.33818 4.89555 2.68314 4.71979C2.90799 4.60523 3.14576 4.56049 3.39902 4.53979C3.64184 4.51995 3.93907 4.51996 4.29518 4.51997ZM3.48045 5.53647C3.28903 5.55211 3.19751 5.58003 3.13714 5.61079C2.98034 5.69069 2.85285 5.81817 2.77296 5.97497C2.7422 6.03535 2.71427 6.12687 2.69864 6.31829C2.68252 6.51554 2.68213 6.77168 2.68213 7.15331V12.6139C2.68213 12.9956 2.68252 13.2517 2.69864 13.449C2.71427 13.6404 2.7422 13.7319 2.77296 13.7922C2.85285 13.949 2.98034 14.0766 3.13714 14.1564C3.19751 14.1872 3.28903 14.2151 3.48045 14.2308C3.6777 14.2469 3.93384 14.2472 4.31546 14.2472H9.18649C9.5681 14.2472 9.82423 14.2469 10.0215 14.2308C10.2129 14.2151 10.3044 14.1872 10.3648 14.1564C10.5216 14.0766 10.6491 13.949 10.729 13.7922C10.7598 13.7319 10.7877 13.6404 10.8033 13.449C10.8194 13.2517 10.8198 12.9956 10.8198 12.6139V7.15331C10.8198 6.77168 10.8194 6.51554 10.8033 6.31829C10.7877 6.12687 10.7598 6.03535 10.729 5.97497C10.6491 5.81817 10.5216 5.69069 10.3648 5.61079C10.3044 5.58003 10.2129 5.55211 10.0215 5.53647C9.82423 5.52035 9.5681 5.51997 9.18649 5.51997H4.31546C3.93384 5.51997 3.6777 5.52035 3.48045 5.53647Z" fill="#111111" />
                </svg>
                <span className="ml-2" >20</span>
              </div>
              <div className="cursor-pointer copy-btn-h w-28 items-center bg-white rounded-md py-1 px-3 scrn-button-copy-button" >Copy code</div>
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

export default TempDetScreens;

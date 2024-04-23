import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Fotter from "../Components/Fotter";
import { ScreensMenu, darkTemplate, template } from "../AllData";
import commentIcon from "../assets/comment.png";
import downloadIcon from "../assets/download.png";
import right from "../assets/right.png";
import filter from "../assets/filter.png";
import TemplateModal from "../Components/TemplateModal";
import SlideNav from "../Components/SlideNav";
import Templates from "../Components/Templates";
import { useTheme } from "../Context/Context";

function TemplatePage() {
  
  const {mode, setMode, toggleMode} = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const tempalteSlice = mode === 'dark' ? darkTemplate : template;

  const handleShowItem = (tempItem) => {
    setSelectedItem(tempItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper template-page ">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="my-3">
            <div className=" flex justify-between items-center mb-3 mt-24 sm:mt-20 lg:mt-12">
              <h2 className="text-2xl font-normal dark:text-white">
                Templates
              </h2>
              <a href="./template-details">
                <p className="text-lite text-sm cursor-pointer dark:hover:text-white hover:underline hover:text-black ">
                  Template Details
                </p>
              </a>
            </div>
            <div className="screens-menu flex items-center mb-4">
              <div className="filter-button">
              <div className="flex justify-center filter items-center rounded-3xl bg-lite" style={{ padding: '6px 22px' }} >
            <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.53754 2.33337C5.44066 2.33337 4.55146 3.22257 4.55146 4.31945C4.55146 5.41633 5.44065 6.30553 6.53753 6.30553C7.63439 6.30553 8.52359 5.41633 8.52359 4.31945C8.52359 3.22257 7.63439 2.33337 6.53754 2.33337ZM3.62157 3.6732C3.91689 2.33472 5.11027 1.33337 6.53754 1.33337C7.96479 1.33337 9.15819 2.33472 9.45352 3.6732L13.1183 3.67321C13.3945 3.67321 13.6183 3.89706 13.6183 4.17321C13.6183 4.44935 13.3945 4.67321 13.1183 4.67321L9.50285 4.6732C9.32792 6.15563 8.06699 7.30551 6.53753 7.30551C5.00807 7.30551 3.74717 6.15563 3.57219 4.67321L2.8815 4.6732C2.60535 4.6732 2.3815 4.44935 2.3815 4.1732C2.3815 3.89706 2.60535 3.6732 2.8815 3.6732H3.62157ZM9.46239 9.69457C8.36552 9.69457 7.47632 10.5838 7.47632 11.6806C7.47632 12.7775 8.36552 13.6667 9.46239 13.6667C10.5593 13.6667 11.4485 12.7775 11.4485 11.6806C11.4485 10.5838 10.5593 9.69457 9.46239 9.69457ZM6.49704 11.3269C6.67199 9.84444 7.93292 8.69457 9.46239 8.69457C10.9919 8.69457 12.2528 9.84444 12.4277 11.3269H13.1183C13.3945 11.3269 13.6183 11.5508 13.6183 11.8269C13.6183 12.103 13.3945 12.3269 13.1183 12.3269H12.3783C12.0831 13.6654 10.8897 14.6667 9.46239 14.6667C8.03512 14.6667 6.84172 13.6654 6.54643 12.3269H2.88155C2.60541 12.3269 2.38155 12.103 2.38155 11.8269C2.38155 11.5508 2.60541 11.3269 2.88155 11.3269H6.49704Z" fill={mode === 'dark' ? '#F0F0F0': '#111111'} />
            </svg>
            <span className="ml-2 text-sm" >Filter</span>
          </div>
              </div>
              <SlideNav />
            </div >
            <Templates tempalteSlice={tempalteSlice} />
            <div>
              <p className="text-center py-3 font-semibold">Loading...</p>
            </div>
            <div className="templates-docs mt-6">
              <h2 className="text-xl sm:text-2xl font-semibold pb-2 ">
                How To Use Free Flutter Template
              </h2>
              <p className="text-lite text-sm md:text-base">
                Need a boost in your app design? Grab a free Flutter UI kit!
                These handy Flutter UI libraries offer a variety of pre-designed
                templates, making it easy for you to create stunning apps. The
                best part you can download beautiful, ready-to-use UI components
                for free and give your project a professional look in no time!
              </p>
            </div>
          </div>
          {showPopup && (
            <div className="popup">
              <TemplateModal
                handleClosePopup={handleClosePopup}
                selectedItem={selectedItem}
              />
            </div>
          )}
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;

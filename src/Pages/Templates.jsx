import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Fotter from "../Components/Fotter";
import { ScreensMenu, template } from "../AllData";
import commentIcon from "../assets/comment.png";
import downloadIcon from "../assets/download.png";
import right from "../assets/right.png";
import filter from "../assets/filter.png";
import TemplateModal from "../Components/TemplateModal";

function TemplatePage() {
  const [mode, setMode] = useState("light");

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

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
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="my-6">
            <div className="template-title flex justify-between items-center mb-5">
              <h2 className="text-2xl font-normal dark:text-white">
                Templates
              </h2>
              <a href="./template-details">
                <p className="text-lite text-sm cursor-pointer dark:hover:text-white hover:underline hover:text-black ">
                  Template Details
                </p>
              </a>
            </div>
            <div className="screens-menu flex items-center">
              <div className="filter-button">
                <div className="flex justify-center items-center rounded-3xl bg-lite px-3 py-1">
                  <img src={filter} alt="" />
                  <span>Filter</span>
                </div>
              </div>
              <div className="flex screens-menu-item pb-2 overflow-x-auto gap-1 items-center">
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
            <div className="template-wrapper mt-7 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 ">
              {template.map((tempItem) => (
                <div key={tempItem.id}  onClick={() => handleShowItem(tempItem)}>
                  <img className="cursor-pointer" src={tempItem.img} alt="" />
                  <div className="flex justify-between py-2">
                    <h6 className="font-medium cursor-pointer xl:text-base lg:text-sm text-xs dark:text-white">
                      {tempItem.title}
                    </h6>
                    <div className="flex items-center">
                      <img
                        className=" hidden sm:inline-block w-4 h-4 lg:w-5 lg:h-5 ml-3"
                        src={commentIcon}
                        alt=""
                      />
                      <span className="hidden sm:inline-block xl:text-base lg:text-sm text-xs dark:text-white">
                        {tempItem.comment}
                      </span>
                      <img
                        className="hidden sm:inline-block w-4 h-4 lg:w-5 lg:h-5 ml-3"
                        src={downloadIcon}
                        alt=""
                      />
                      <span className="hidden sm:inline-block xl:text-base lg:text-sm text-xs dark:text-white">
                        {tempItem.download}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-center py-3 font-semibold">Loading...</p>
            </div>
            <div className="templates-docs mt-6">
              <h2 className="text-xl font-medium pb-2 ">
                How To Use Free Flutter Template
              </h2>
              <p className="text-lite">
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
          <TemplateModal handleClosePopup={handleClosePopup} selectedItem={selectedItem} />
        </div>
      )}
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;

import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Fotter from "../Components/Fotter";
import { screensImg, template } from "../AllData";
import shaddow from "../assets/shaddow.png";
import copy from "../assets/book.png";
import TemplateModal from "../Components/TemplateModal";

function ScreensPage() {
  const [mode, setMode] = useState("light");
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

  const toggleMode = (newMode) => {
    setMode(newMode);
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
                Screens
              </h2>
              <a href="./screens">
                <p className="text-lite text-sm cursor-pointer dark:hover:text-white hover:underline hover:text-black ">
                  See all
                </p>
              </a>
            </div>
            <div className="screens-image-wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-2 mt-5">
        {screensImg.map((scrnImg) => (
          <div key={scrnImg.id}  onClick={() => handleShowItem(scrnImg)} className="mb-3 relative z-0 scrn-img scrnImg">
            <img className="cursor-pointer mx-auto" src={scrnImg.img} alt="" />
            <img
              className="absolute mx-auto left-0 right-0 z-10 shaddow-img bottom-0.5"
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
            <div>
              <p className='text-center py-3 font-semibold' >Loading...</p>
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

export default ScreensPage;

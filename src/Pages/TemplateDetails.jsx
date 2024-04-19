import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Fotter from "../Components/Fotter";
import { ScreensMenu, screensImg, template } from "../AllData";
import eye from "../assets/eye.png";
import left from "../assets/left.png";
import Screens from "../Components/Screens";
import revenu from "../assets/revenu.png";
import shop1 from "../assets/shop1.png";
import Templates from "../Components/Templates";

function TemplateDetails() {
  const [mode, setMode] = useState("light");
  const tempalteSlice = template.slice(0, 3);

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  const screensImgSlice = screensImg.slice(0, 5);
  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="temp-det-wrapper">
            <div className="temp-det-intro flex flex-col md:flex-row items-start justify-between md:items-end">
              <div className="max-w-lg mt-10">
                <a href="/template" className="flex">
                  <img src={left} alt="" />{" "}
                  <span className="text-sm text-lite">Template</span>{" "}
                </a>
                <h2 className="text-2xl my-3 font-normal dark:text-white">
                  Chat App Template
                </h2>
                <p className="text-sm text-lite">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
              </div>
              <div className="flex items-center mt-5 md:mt-0">
                <button className="w-36 ml-0 md:ml-4 bg-white rounded-xl text-black p-2 font-semibold button-border dark:bg-black">
                  <div className="flex items-center">
                    <img src={eye} alt="" />
                    <span>Preview</span>
                  </div>
                </button>

                <button className="w-28 bg-black rounded-xl text-white p-2 ml-4 font-semibold dark:bg-white dark:text-black ">
                  Get Code
                </button>
              </div>
            </div>

            <Screens screensImgSlice={screensImgSlice} />

            <div className="temp-det-intro flex flex-col md:flex-row  justify-between items-start">
              <div className="max-w-2xl mr-5">
                <h2 className="text-2xl my-3 font-normal dark:text-white">
                  Overview
                </h2>
                <p className="text-sm text-lite">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
                <img src={shop1} alt="" />
                <p className="text-sm text-lite">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
                <h2 className="text-2xl my-3 font-normal dark:text-white">
                  Build you shop app in days
                </h2>
                <p className="text-sm text-lite">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful. Need
                  a boost in your app design? Grab a free Flutter UI kit! These
                  handy Flutter UI libraries offer a variety of pre-designed
                  templates, making it easy for you to create stunning apps. The
                  best part you can download beautiful.
                </p>
              </div>
              <div className="sponser my-3 p-3 rounded-xl relative">
                <div className="flex justify-between">
                  <img src={revenu} alt="" />
                  <span className="m-0 absolute right-0 top-0">Sponsored</span>
                </div>
                <p>
                  Libriwi is a plugin for Figma that lets you easily created and
                  share Figma groups, layouts and components with a single click
                  of the button.
                </p>
                <div className="flex justify-end">
                  <button className="w-32 ml-4 bg-black rounded-xl text-white p-1 sm:p-1 font-semibold dark:bg-white dark:text-black ">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-2xl my-5 font-normal dark:text-white">
              You may also like...
            </h2>
            <Templates tempalteSlice={tempalteSlice} />
          </div>
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default TemplateDetails;

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
import { useTheme } from "../Context/Context";
import TempDetScreens from "../Components/TempDetScreens";

function TemplateDetails() {
  const { mode, setMode, toggleMode } = useTheme()
  const tempalteSlice = template.slice(0, 3);

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="temp-det-wrapper">
            <div className="temp-det-intro flex flex-col md:flex-row items-start justify-between md:items-end">
              <div className="max-w-xl mt-10">
                <a href="/template" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5987 4.5296C12.8586 4.75687 12.8849 5.15172 12.6577 5.41152L8.64374 10L12.6577 14.5885C12.8849 14.8483 12.8586 15.2431 12.5987 15.4705C12.339 15.6977 11.9441 15.6713 11.7168 15.4115L7.34294 10.4115C7.13683 10.176 7.13683 9.82412 7.34294 9.58853L11.7168 4.5885C11.9441 4.3287 12.339 4.30233 12.5987 4.5296Z" fill={mode === 'dark' ? '#fff' : '#000'} />
                  </svg>
                  <span className="text-sm text-lite">Template</span>{" "}
                </a>
                <h2 className="text-2xl my-3 font-normal dark:text-white">
                  Chat App Template
                </h2>
                <p className="text-base text-lite">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
              </div>
              <div className="flex items-center mt-5 md:mt-0 sm-width">
                <button className="w-36 button-h ml-0 md:ml-4 bg-white rounded-xl text-black p-2 font-semibold button-border dark:bg-black">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.24869 10.1701C4.79686 11.5422 3.86008 13.1933 3.45107 14.267C3.30361 14.6541 2.87029 14.8483 2.48321 14.7009C2.09613 14.5534 1.90188 14.1201 2.04934 13.733C2.52922 12.4733 3.58411 10.6245 5.21838 9.07992C6.86146 7.52706 9.12738 6.25 12.0002 6.25C14.873 6.25 17.139 7.52706 18.782 9.07992C20.4163 10.6245 21.4712 12.4733 21.9511 13.733C22.0985 14.1201 21.9043 14.5534 21.5172 14.7009C21.1301 14.8483 20.6968 14.6541 20.5493 14.267C20.1403 13.1933 19.2036 11.5422 17.7517 10.1701C16.3087 8.80628 14.3941 7.75 12.0002 7.75C9.60637 7.75 7.69173 8.80628 6.24869 10.1701ZM12.0002 11.75C10.7576 11.75 9.7502 12.7574 9.7502 14C9.7502 15.2426 10.7576 16.25 12.0002 16.25C13.2429 16.25 14.2502 15.2426 14.2502 14C14.2502 12.7574 13.2429 11.75 12.0002 11.75ZM8.2502 14C8.2502 11.9289 9.92914 10.25 12.0002 10.25C14.0713 10.25 15.7502 11.9289 15.7502 14C15.7502 16.0711 14.0713 17.75 12.0002 17.75C9.92914 17.75 8.2502 16.0711 8.2502 14Z" fill={mode === 'dark' ? '#F0F0F0' : '#111'} />
                    </svg>
                    <span className="ml-2" >Preview</span>
                  </div>
                </button>

                <button className="w-28 button-h bg-black rounded-xl text-white p-2 ml-4 font-semibold dark:bg-white dark:text-black ">
                  Get Code
                </button>
              </div>
            </div>

            <div className="temp-det-page-screens" >
              <TempDetScreens screensImgSlice={screensImg}/>
            </div>

            <div className="temp-det-intro flex flex-col lg:flex-row  justify-between items-start">
              <div className="lg:w-3/5 mr-5">
                <h2 className="text-2xl my-3 font-normal dark:text-white">
                  Overview
                </h2>
                <p className="text-base text-lite mb-3">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
                <img src={shop1} alt="" />
                <p className="text-base text-lite">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
                <h2 className="text-2xl my-3 font-normal dark:text-white">
                  Build you shop app in days
                </h2>
                <p className="text-base text-lite">
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
              <div className="sponser sm:w-2/5 my-3 p-3 rounded-xl relative">
                <div className="flex justify-between">
                  <img src={revenu} alt="" />
                  <span className="m-0 absolute right-0 top-0 text-lite">Sponsored</span>
                </div>
                <p className="text-sm text-gray-900" >
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

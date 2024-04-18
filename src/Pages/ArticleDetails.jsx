import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Fotter from "../Components/Fotter";
import { Articles, ScreensMenu, screensImg, template } from "../AllData";
import eye from "../assets/eye.png";
import left from "../assets/left.png";
import Screens from "../Components/Screens";
import revenu from "../assets/revenu.png";
import shop1 from "../assets/shop1.png";
import anwar from "../assets/anwar.png";
import code from "../assets/code.png";
import Templates from "../Components/Templates";
import Article from "../Components/Article";
import SyntextHighliter from "../Components/SyntextHighliter";
import MyComponent from "../Components/SyntextHighliter";
import SyntextCode from "../Components/SyntextCode";

function ArticleDetails() {
  const [mode, setMode] = useState("light");
  const tempalteSlice = template.slice(0, 3);

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  const articleSlice = Articles.slice(0, 3);
  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="temp-det-wrapper">
            <div className="temp-det-intro flex justify-between items-start">
              <div className="max-w-2xl mr-5">
                <div className="ceo-comment flex items-center my-5">
                  <div>
                    <img src={anwar} alt="" />
                  </div>
                  <div className=" ml-5" >
                    <span className="text-black mr-3 font-semibold" >Abu Anwar</span>
                    <span className="text-lite mr-3" >@abuanwar072</span>
                    <div className="flex items-center" >
                      <span className="text-lite mr-3">March 29, 2024</span>
                      <div className="w-2 h-2 bg-slate-200 rounded-md"></div>
                      <span className="text-lite ml-3">Flutter, Animation</span>
                    </div>
                  </div>
                  <div className="get-source h-10 flex items-center" >
                    <button className=" flex items-center rounded-3xl ml-8 py-2 px-5 " > <img src={code} alt="" className="mr-2" /> <span>Source Code</span></button>
                  </div>
                </div>
                <p className="text-sm text-lite mb-5">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
                <img className="rounded-xl" src={shop1} alt="" />
                <p className="text-sm text-lite my-5">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>

                <div className="syntext">
                    <SyntextCode/>
                </div>


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
                  <button className="w-20 sm:w-32 ml-4 bg-black rounded-xl text-white p-1 sm:p-1 font-semibold dark:bg-white dark:text-black ">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-2xl my-5 font-normal dark:text-white">
              You may also like...
            </h2>
            <Article articleSlice={articleSlice} />
          </div>
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;

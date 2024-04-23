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
import { useTheme } from "../Context/Context";

function ArticleDetails() {
  const {mode, setMode, toggleMode} = useTheme()
  const tempalteSlice = template.slice(0, 3);


  const articleSlice = Articles.slice(0, 3);
  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="temp-det-wrapper">
            <div className="max-w-xl mt-28 lg:mt-10">
              <a href="/template" className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5987 4.5296C12.8586 4.75687 12.8849 5.15172 12.6577 5.41152L8.64374 10L12.6577 14.5885C12.8849 14.8483 12.8586 15.2431 12.5987 15.4705C12.339 15.6977 11.9441 15.6713 11.7168 15.4115L7.34294 10.4115C7.13683 10.176 7.13683 9.82412 7.34294 9.58853L11.7168 4.5885C11.9441 4.3287 12.339 4.30233 12.5987 4.5296Z" fill={mode === 'dark' ? '#fff' : '#000'} />
                </svg>
                <span className="text-sm text-lite">Article</span>{" "}
              </a>
              <h2 className="text-2xl mb-0 my-3 font-normal dark:text-white">
                Shipping a visionOS app for launch
              </h2>
            </div>
            <div className="temp-det-intro  flex flex-col md:flex-row  justify-between items-start">

              <div className="sm:max-w-2xl mr-5">
                <div className="ceo-comment flex md:items-center flex-col md:flex-row items-start my-5">
                  <div className="flex" >
                    <div>
                      <img src={anwar} alt="" />
                    </div>
                    <div className=" ml-5">
                      <span className="text-black mr-3 font-normal text-sm dark:text-white">
                        Abu Anwar
                      </span>
                      <span className="text-lite mr-3 text-sm">@abuanwar072</span>
                      <div className="flex items-center">
                        <span className="text-lite mr-3 text-sm">March 29, 2024</span>
                        <div className="w-2 h-2 bg-slate-200 rounded-md"></div>
                        <span className="text-lite ml-3 text-sm">
                          Flutter, Animation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="get-source h-10 flex items-center">
                    <button className=" flex items-center rounded-3xl md:ml-8  mt-3 py-2 px-5 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35109 2.99865C9.61763 3.07069 9.77536 3.3452 9.70329 3.61178L7.26076 12.6492C7.18869 12.9158 6.91423 13.0734 6.64762 13.0014C6.38104 12.9294 6.22335 12.6548 6.29539 12.3882L8.73796 3.35087C8.80996 3.08429 9.08449 2.92659 9.35109 2.99865ZM10.8064 4.91104C10.9932 4.70777 11.3096 4.6945 11.5128 4.88141L14.5042 7.63191C14.6072 7.72664 14.6658 7.86011 14.6658 7.99997C14.6658 8.13991 14.6072 8.27337 14.5042 8.36804L11.5128 11.1186C11.3096 11.3054 10.9932 11.2922 10.8064 11.0889C10.6194 10.8856 10.6327 10.5694 10.836 10.3824L13.427 7.99997L10.836 5.61753C10.6327 5.43062 10.6194 5.11431 10.8064 4.91104ZM5.19207 4.91113C5.37897 5.11441 5.36571 5.43071 5.16243 5.61761L2.57136 8.00004L5.16243 10.3825C5.36571 10.5694 5.37897 10.8857 5.19207 11.089C5.00516 11.2923 4.68885 11.3056 4.48558 11.1186L1.49421 8.36811C1.39124 8.27344 1.33264 8.13997 1.33264 8.00004C1.33264 7.86017 1.39125 7.72671 1.49422 7.63197L4.48558 4.88149C4.68885 4.69459 5.00516 4.70785 5.19207 4.91113Z" fill={mode === 'dark' ? '#fff' : '#000'} />
                      </svg>
                      <span className="ml-2" >Source Code</span>
                    </button>
                  </div>
                </div>
                <p className="text-base text-lite mb-5">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>
                <img className="rounded-xl" src={shop1} alt="" />
                <p className="text-base text-lite my-5">
                  Need a boost in your app design? Grab a free Flutter UI kit!
                  These handy Flutter UI libraries offer a variety of
                  pre-designed templates, making it easy for you to create
                  stunning apps. The best part you can download beautiful.
                </p>

                <div className="syntext">
                  <SyntextCode />
                </div>

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
              <div className="sponser my-3 p-3 rounded-xl relative">
                <div className="flex justify-between">
                  <img src={revenu} alt="" />
                  <span className="m-0 absolute right-0 top-0">Sponsored</span>
                </div>
                <p className="text-sm" >
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
            <Article articleSlice={articleSlice} />
          </div>
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;

import React, { useState } from "react";
import { Articles, ScreensMenu, screensImg, template } from "../AllData";
import cross from "../assets/cross.png";
import whiteCross from "../assets/white-cross.png";
import Templates from "./Templates";
import Article from "./Article";
import Screens from "./Screens";
import filter from "../assets/filter.png";
import right from "../assets/right.png";

function SearchPopup({ mode, closePopup }) {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [allShow, setAllShow] = useState(true);
  const [templateShow, setTemplateShow] = useState(false);
  const [articleShow, setArticleShow] = useState(false);
  const [screensShow, setScreensShow] = useState(false);
  console.log(mode);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const tempSlice = template.slice(0, 3);
  const articleSlice = Articles.slice(0, 3);
  const screensImgSlice = screensImg.slice(0, 5);

  const searchNavItem = ["All", "Template", "Article", "Single Screens"];

  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-black p-4 rounded-2xl shadow-lg popup search-popup relative">
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="w-72 text-left dark:bg-gray-500 space-x-3 px-4 h-10 bg-lite ring-0 ring-slate-900/10 focus:outline-none focus:ring-2 shadow-sm rounded-3xl mr-6"
          />

          <div className="filter-button">
            <div className="flex justify-center items-center rounded-3xl bg-lite px-3 py-1">
              <img src={filter} alt="" />
              <span>Filter</span>
            </div>
          </div>

          <div
            className={`flex ${
              mode === "dark" ? "active-state" : ""
            } pb-2 overflow-x-auto gap-1 items-center search-nav-item`}
          >
            {searchNavItem.map((screenMenuItem, index) => (
              <span
                className={`py-1 search-menu-item dark:bg-black px-3 cursor-pointer rounded-3xl whitespace-nowrap dark:text-white dark:hover:text-black ${
                  activeNavItem === index ? "active-item" : ""
                }`}
                key={index}
                onClick={() => handleNavItemClick(index)}
              >
                {screenMenuItem}
              </span>
            ))}
          </div>
        </div>
        <div
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={closePopup}
        >
          {mode === "dark" ? (
            <img src={whiteCross} alt="" />
          ) : (
            <img src={cross} alt="" />
          )}
        </div>
        <div className="mt-8">
          {activeNavItem === 0 && (
            <div>
              <Templates tempalteSlice={tempSlice} />
              <Article articleSlice={articleSlice} />
              <Screens screensImgSlice={screensImgSlice} />
            </div>
          )}
          {activeNavItem === 1 && <Templates tempalteSlice={template} />}
          {activeNavItem === 2 && <Article articleSlice={Articles} />}
          {activeNavItem === 3 && <Screens screensImgSlice={screensImg} />}
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;
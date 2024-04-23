import React, { useEffect, useRef, useState } from "react";
import { Articles, ScreensMenu, darkArticles, darkTemplate, screensImg, template } from "../AllData";
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

  const popupRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    }

    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);


  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const tempSlice = mode === 'dark' ? darkTemplate : template;
  const articleSlice = mode === 'dark' ? darkArticles : Articles
  const screensImgSlice = screensImg.slice(0, 5);

  const searchNavItem = ["All", "Template", "Article", "Single Screens"];

  return (
    <div className="the-pop-up fixed inset-0 z-50 flex items-center justify-center">
      <div ref={popupRef} className="bg-white dark:bg-black p-4 rounded-2xl shadow-lg popup search-popup relative">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <input
            type="search"
            placeholder="Search..."
            className="w-64 sm:w-72 mb-5 md:mb-0 text-left text-gray-400 secondery space-x-3 px-4 h-10 bg-lite ring-0 ring-slate-900/10 focus:outline-none focus:ring-2 shadow-sm rounded-3xl mr-6"
          />

          <div className="flex" >
            <div className="filter-button">
            <div className="flex justify-center filter items-center rounded-3xl bg-lite" style={{ padding: '6px 22px' }} >
            <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.53754 2.33337C5.44066 2.33337 4.55146 3.22257 4.55146 4.31945C4.55146 5.41633 5.44065 6.30553 6.53753 6.30553C7.63439 6.30553 8.52359 5.41633 8.52359 4.31945C8.52359 3.22257 7.63439 2.33337 6.53754 2.33337ZM3.62157 3.6732C3.91689 2.33472 5.11027 1.33337 6.53754 1.33337C7.96479 1.33337 9.15819 2.33472 9.45352 3.6732L13.1183 3.67321C13.3945 3.67321 13.6183 3.89706 13.6183 4.17321C13.6183 4.44935 13.3945 4.67321 13.1183 4.67321L9.50285 4.6732C9.32792 6.15563 8.06699 7.30551 6.53753 7.30551C5.00807 7.30551 3.74717 6.15563 3.57219 4.67321L2.8815 4.6732C2.60535 4.6732 2.3815 4.44935 2.3815 4.1732C2.3815 3.89706 2.60535 3.6732 2.8815 3.6732H3.62157ZM9.46239 9.69457C8.36552 9.69457 7.47632 10.5838 7.47632 11.6806C7.47632 12.7775 8.36552 13.6667 9.46239 13.6667C10.5593 13.6667 11.4485 12.7775 11.4485 11.6806C11.4485 10.5838 10.5593 9.69457 9.46239 9.69457ZM6.49704 11.3269C6.67199 9.84444 7.93292 8.69457 9.46239 8.69457C10.9919 8.69457 12.2528 9.84444 12.4277 11.3269H13.1183C13.3945 11.3269 13.6183 11.5508 13.6183 11.8269C13.6183 12.103 13.3945 12.3269 13.1183 12.3269H12.3783C12.0831 13.6654 10.8897 14.6667 9.46239 14.6667C8.03512 14.6667 6.84172 13.6654 6.54643 12.3269H2.88155C2.60541 12.3269 2.38155 12.103 2.38155 11.8269C2.38155 11.5508 2.60541 11.3269 2.88155 11.3269H6.49704Z" fill={mode === 'dark' ? '#F0F0F0' : '#111111'} />
            </svg>
            <span className="ml-2 text-sm" >Filter</span>
          </div>
            </div>

            <div
              className={`flex ${mode === "dark" ? "active-state" : ""
                } pb-2 overflow-x-auto gap-1 items-center search-nav-item`}
            >
              {searchNavItem.map((screenMenuItem, index) => (
                <span
                  className={`py-1 search-menu-item text-sm dark:bg-black px-3 cursor-pointer rounded-3xl whitespace-nowrap dark:text-white dark:hover:text-black ${activeNavItem === index ? "active-item" : ""
                    }`}
                  key={index}
                  onClick={() => handleNavItemClick(index)}
                >
                  {screenMenuItem}
                </span>
              ))}
            </div>
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
              <div>
                <Templates tempalteSlice={tempSlice.slice(0,3)} />
              </div>

              <div>
                <Article articleSlice={articleSlice.slice(0,3)} />
              </div>
              <div>
                <Screens screensImgSlice={screensImgSlice} />
              </div>

            </div>
          )}
          {activeNavItem === 1 && <div>
            <Templates tempalteSlice={tempSlice} />
          </div>}
          {activeNavItem === 2 && <div>
            <Article articleSlice={articleSlice} />
          </div>}
          {activeNavItem === 3 && <div>
            <Screens screensImgSlice={screensImgSlice} />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;

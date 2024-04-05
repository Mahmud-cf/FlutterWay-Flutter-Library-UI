import React from "react";
import searchIcon from "../assets/search.png";

function Hero({ darkMode, setDarkMode }) {
  return (
    <div>
      <div className="header-nav-wrapper flex justify-between">
        <div className="search-button">
          <button
            type="button"
            className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-lite ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 shadow-sm rounded-3xl text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          >
            {darkMode ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-none text-slate-300 dark:text-slate-400"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
            ) : (
              <img src={searchIcon} alt="" />
            )}
            <span className="flex-auto">Search...</span>
          </button>
        </div>
        <div className="header-nav-right-part flex items-center">
          <div
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="fill-sky-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  className="fill-white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  className="fill-white"
                ></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  className="fill-sky-400/20 stroke-black"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  className="stroke-black"
                ></path>
              </svg>
            )}
          </div>
          <button className="w-24 ml-4 bg-white rounded-xl text-black p-3 font-semibold button-border dark:bg-black ">
            Log in
          </button>
          <button className="w-24 ml-4 bg-black rounded-xl text-white p-3 font-semibold dark:bg-white dark:text-black ">
            Get Pro
          </button>
        </div>
      </div>
      <div className="hero-title text-center py-10">
        <div className="title-width  mx-auto" >
        <h1 className="font-normal mb-4 dark:text-white" >
          Build your next App <br />
          even faster!
        </h1>
        <p className="text-lite dark:text-stone-300" >
          Beautifully designed, expertly crafted Flutter components and
          templates, to jumpstart your projects and speed up your development
          process.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

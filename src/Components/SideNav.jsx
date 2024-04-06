import React from 'react';
import logo from '../assets/Logo.png';
import { menuLi, AllScreens } from '../AllData.js';

function SideNav() {
  return (
    <aside
      id="default-sidebar"
      className="sideNav fixed w-full lg:w-48 bottom-0  lg:top-0 lg:left-0 z-40  lg:h-screen transition-transform  sm:translate-x-0  border-r-2 border-solid border-slate-200 dark:border-slate-900"
      aria-label="Sidebar"
    >
      <div className="h-full flex lg:block overflow-y-auto sideNav-scroll bg-white dark:bg-slate-950">
        <div className="logo pt-4 hidden lg:block">
          <img src={logo} alt="" className="w-36 mb-5" />
        </div>

        <ul className="space-y-2 font-medium nav-item-ul flex lg:block lg:overflow-x-hidden overflow-x-scroll"> 
          {menuLi.map((menuItem) => {
            return (
              <li key={menuItem.id} className="menu-item whitespace-nowrap lg:whitespace-normal">
                <a
                  href="#"
                  className="flex flex-col lg:flex-row items-center p-2 lg:pl-5 dark:text-slate-300 lg:hover:bg-gray-100 hover:bg-slate-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white group font-normal text-sm lg:hover:text-black"
                >
                  <img src={menuItem.icon} alt="" />
                  <span className="ml-2">{menuItem.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2 All-Screens font-medium nav-item-ul mt-5 hidden lg:block">
          <h6 className="pl-5 dark:text-white ">All Screens</h6>
          {AllScreens.map((menuItem) => {
            return (
              <li key={menuItem.id} className="menu-item">
                <a
                  href="#"
                  className="flex items-center p-2 px-5 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group font-normal text-sm hover:text-black justify-between"
                >
                  <span className="ml-2">{menuItem.name}</span>
                  <span>{menuItem.number}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default SideNav;

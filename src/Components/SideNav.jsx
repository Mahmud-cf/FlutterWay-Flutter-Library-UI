import React from 'react';
import logo from '../assets/Logo.png';
import { menuLi, AllScreens } from '../AllData.js';

function SideNav() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-slate-100 dark:border-slate-900"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto sideNav-scroll bg-white dark:bg-slate-950 ">
        <div className="logo pt-4">
          <img src={logo} alt="" className="w-36 mb-5" />
        </div>

        <ul className="space-y-2 font-medium nav-item-ul"> 
          {menuLi.map((menuItem) => {
            return (
              <li key={menuItem.id} className="menu-item">
                <a
                  href="#"
                  className="flex items-center p-2 pl-5 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group font-normal text-sm hover:text-black"
                >
                  <img src={menuItem.icon} alt="" />
                  <span className="ml-2">{menuItem.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2 All-Screens font-medium nav-item-ul mt-5">
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

import React from "react";
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import logo from '../assets/Logo.png'

function Fotter() {
  return (
    <div className="pt-7" >
      <div className=" flex justify-between" >
      <div className="footer-left">
        <img src={logo} alt="Logo" className="w-44" />
        <p className="text-lite text-xs" >
          Beautifully designed, expertly crafted Flutter components and
          templates, to jumpstart <br />
          your projects and speed up your development process.
        </p>
        <div className="social-icon flex gap-3 mt-4">
          
          <a href="#" className="w-8 h-8 rounded-full bg-black flex justify-center item-center p-2">
          <img src={twitter} alt="" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-black flex justify-center item-center p-2">
          <img src={linkedin} alt="" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-black flex justify-center item-center p-2">
          <img src={instagram} alt="" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-black flex justify-center item-center p-2">
          <img src={facebook} alt="" />
          </a>
          
        </div>
      </div>
      <div className="footer-right flex gap-10 dark:text-white">
        <div className="footer-right-menu">
            <p className="mb-3 font-semibold" >Explore</p>
            <p className=" text-sm mb-2" >Blog</p>
            <p className=" text-sm mb-2" >Templates</p>
            <p className=" text-sm mb-2" >Screens</p>
        </div>
        <div className="footer-right-menu">
            <p className="mb-3 font-semibold" >Support</p>
            <p className=" text-sm mb-2" >Pricing</p>
            <p className=" text-sm mb-2" >Become a sponsor</p>
            <p className=" text-sm mb-2" >Hire top Flutter Devs</p>
        </div>
      </div>
      </div>
      <div className="flex justify-between copywright text-lite">
        <p className="mb-0" >Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <p className="mb-0" >Privacy Policy | Terms & Conditions | Cookie Policy</p>
      </div>
    </div>
  );
}

export default Fotter;

import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Templates from "../Components/Templates";
import Article from "../Components/Article";
import Screens from "../Components/Screens";
import Fotter from "../Components/Fotter";
import HeroText from "../Components/HeroText";
import { template, Articles, screensImg, darkTemplate, darkArticles } from "../AllData";
import { useTheme } from "../Context/Context";

function Home() {

  const { mode, setMode, toggleMode } = useTheme();

  const tempalteSlice = mode === 'dark' ? darkTemplate : template;
  const articleSlice = mode === 'dark' ? darkArticles : Articles;
  const screensImgSlice = screensImg.slice(0,10)

  return (
    <div  className={`${mode === 'dark' ? 'dark' : ''} allwrapper`} >
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
            <Hero mode={mode} setMode={setMode} toggleMode={toggleMode}  />
            <div className="hidden md:block" >
              <HeroText/>
            </div>
            <Templates mode={mode} tempalteSlice = {tempalteSlice.slice(0,6)} />
            <Article articleSlice={articleSlice.slice(0,3)} />
            <Screens mode={mode} screensImgSlice ={screensImgSlice} />
            <Fotter/>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Templates from "../Components/Templates";
import Article from "../Components/Article";
import Screens from "../Components/Screens";
import Fotter from "../Components/Fotter";
import HeroText from "../Components/HeroText";
import { template, Articles, screensImg } from "../AllData";

function Home() {

  const [mode, setMode] = useState('light');

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  const tempalteSlice = template.slice(0,6)
  const articleSlice = Articles.slice(0,3)
  const screensImgSlice = screensImg.slice(0,10)

  return (
    <div  className={`${mode === 'dark' ? 'dark' : ''}`} >
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
            <Hero mode={mode} setMode={setMode} toggleMode={toggleMode}  />
            <div className="hidden md:block" >
              <HeroText/>
            </div>
            <Templates mode={mode} tempalteSlice = {tempalteSlice} />
            <Article articleSlice={articleSlice} />
            <Screens mode={mode} screensImgSlice ={screensImgSlice} />
            <Fotter/>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import SideNav from "../Components/SideNav";
import Hero from "../Components/Hero";
import Templates from "../Components/Templates";
import Article from "../Components/Article";
import Screens from "../Components/Screens";
import Fotter from "../Components/Fotter";

function Home({ darkMode, setDarkMode }) {
  return (
    <div>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-4 sm:ml-48">
            <Hero darkMode={darkMode} setDarkMode={setDarkMode}  />
            <Templates/>
            <Article/>
            <Screens/>
            <Fotter/>
        </div>
      </div>
    </div>
  );
}

export default Home;

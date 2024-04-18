import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../Pages/Home";
import TemplatePage from "../Pages/Templates";
import ArticlePage from "../Pages/ArticlePage";
import ScreensPage from "../Pages/ScreensPage";
import TemplateDetails from "../Pages/TemplateDetails";
import ArticleDetails from "../Pages/ArticleDetails";

function AllRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/template" element={<TemplatePage/>} />
          <Route path="/article" element={<ArticlePage/>} />
          <Route path="/screens" element={<ScreensPage/>} />
          <Route path="/template-details" element={<TemplateDetails/>} />
          <Route path="/article-details" element={<ArticleDetails/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRouter;

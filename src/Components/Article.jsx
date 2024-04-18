import React, { useState } from "react";
import TemplateModal from "./TemplateModal";

function Article({articleSlice}) {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowItem = (tempItem) => {
    setSelectedItem(tempItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div className="mt-7" >
      <div className="template-title flex justify-between items-center mb-5">
        <h2 className="text-2xl font-normal dark:text-white">Articles</h2>
        <a href="./article"><p className="text-lite text-sm cursor-pointer dark:hover:text-white  hover:underline hover:text-black ">
          See all
        </p></a>
      </div>
      <div className="template-wrapper grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {articleSlice.map((tempItem) => (
          <div key={tempItem.id}  onClick={() => handleShowItem(tempItem)} >
            <img className="cursor-pointer hover:scale-105 transition-all" src={tempItem.img} alt="" />
            <div className="py-2">
                <div className="text-lite text-xs mb-1" >
                    <span>Mar 24, 2024</span>
                    <span className="ml-4" >Animation</span>
                </div>
              <h6 className="font-medium cursor-pointer xl:text-base lg:text-sm text-xs dark:text-white">
                {tempItem.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <TemplateModal handleClosePopup={handleClosePopup} selectedItem={selectedItem} />
        </div>
      )}
    </div>
  );
}

export default Article;

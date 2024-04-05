import React from "react";
import { Articles } from "../AllData";
import commentIcon from "../assets/comment.png";
import downloadIcon from "../assets/download.png";

function Article() {
  return (
    <div className="mt-7" >
      <div className="template-title flex justify-between items-center mb-5">
        <h2 className="text-2xl font-normal dark:text-white">Articles</h2>
        <p className="text-lite text-sm cursor-pointer dark:hover:text-white  hover:underline hover:text-black ">
          See all
        </p>
      </div>
      <div className="template-wrapper grid grid-cols-2 sm:grid-cols-3 gap-4 ">
        {Articles.map((tempItem) => (
          <div key={tempItem.id}>
            <img className="cursor-pointer" src={tempItem.img} alt="" />
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
    </div>
  );
}

export default Article;

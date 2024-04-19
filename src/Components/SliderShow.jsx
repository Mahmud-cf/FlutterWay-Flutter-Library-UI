import React, { useState, useEffect } from "react";
import rightArrow from "../assets/right.png";
import leftArrow from "../assets/right.png";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8"
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numItemsToShow, setNumItemsToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setNumItemsToShow(7);
      } else if (screenWidth >= 1024) {
        setNumItemsToShow(6);
      } else if (screenWidth >= 640) {
        setNumItemsToShow(4);
      } else {
        setNumItemsToShow(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - numItemsToShow ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-x-auto">
        {items.slice(currentIndex, currentIndex + numItemsToShow).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full w-24 p-4"
          >
            {item}
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={handlePrev}
        >
          <img src={leftArrow} alt="Previous" />
        </button>
      )}
      {currentIndex < items.length - numItemsToShow && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={handleNext}
        >
          <img src={rightArrow} alt="Next" />
        </button>
      )}
    </div>
  );
}

export default Slider;

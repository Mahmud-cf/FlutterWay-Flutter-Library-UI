import React, { useState, useEffect, useRef } from "react";
import right from "../assets/right.png";
import { ScreensMenu } from "../AllData";

function SlideNav({mode}) {
  const [visibleItems, setVisibleItems] = useState(1); // Number of items visible initially
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const navWidth = navRef.current.offsetWidth;
      const itemWidth = 120; // Adjust this according to your item width
      const newVisibleItems = Math.floor(navWidth / itemWidth);
      setVisibleItems(newVisibleItems);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollRight = () => {
    const navWidth = navRef.current.offsetWidth;
    const itemWidth = 120; // Adjust this according to your item width
    const newScrollPosition = scrollPosition + (navWidth / visibleItems) * 1.5;
    const maxScrollPosition = navRef.current.scrollWidth - navWidth;
    setScrollPosition(newScrollPosition % maxScrollPosition);
  };

  return (
    <div className="relative flex pb-2 overflow-x-hidden items-center">
      <div
        ref={navRef}
        className="flex gap-1 items-center"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {ScreensMenu.map((screenMenuItem) => (
          <span
            className=" border border-solid border-gray-200 cursor-pointer hover:bg-zinc-100 py-1 px-3 rounded-3xl whitespace-nowrap dark:text-white dark:hover:text-black "
            key={screenMenuItem.id}
          >
            {screenMenuItem.title}
          </span>
        ))}
      </div>
      {ScreensMenu.length > visibleItems && (
        <div className="absolute xl:hidden right-0 top-0 bottom-0 flex items-center bg-white dark:bg-black">
          <svg
            className="mb-2 cursor-pointer"
            onClick={handleScrollRight}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3246 6.76254C13.6363 6.48982 14.1102 6.52147 14.3829 6.83323L19.5643 12.7563C19.8116 13.0391 19.8116 13.4612 19.5643 13.7439L14.3829 19.667C14.1101 19.9788 13.6363 20.0104 13.3246 19.7377C13.0128 19.465 12.9812 18.9911 13.2539 18.6794L17.3472 14.0001H4.99976C4.58554 14.0001 4.24976 13.6643 4.24976 13.2501C4.24976 12.8359 4.58554 12.5001 4.99976 12.5001H17.3472L13.2539 7.82084C12.9812 7.50908 13.0128 7.03526 13.3246 6.76254Z"
              fill={mode === 'dark' ? '#fff': '#000'}
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default SlideNav;

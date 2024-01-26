/** @format */

import React, { useEffect, useState } from "react";
import { navData } from "../Data/dummyData";
import BottomBarListData from "./ListData/BottomBarListData";
import { IoIosMore } from "react-icons/io";
import { useStateContext } from "../context/ContextProvider";

const BottomBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bottomData, setBottomData] = useState(navData);
  const [isWidth, setIsWidth] = useState(false);
  const { initialData, setInitialData } = useStateContext();

  const handleToggle = () => {
    setInitialData({ ...initialData, isRightBar: true });
  };

  // useEffect to get initial width and add event listener
  useEffect(() => {
    // Function to update window width
    /* const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    }; */

    // Add event listener to track window width changes
    /* window.addEventListener("resize", updateWindowWidth);

    if (windowWidth <= 640) {
      const fourItems = bottomData.slice(0, 4);
      setIsWidth(true);

      setBottomData(fourItems);
    } */
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 640) {
        const fourItems = bottomData.slice(0, 4);
        setIsWidth(true);
        setBottomData(fourItems);
      } else {
        setIsWidth(false);
        setBottomData(navData);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    // Clean up by removing event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };

    // Dependency array is empty, so this effect runs once on component mount
  }, []);

  
  return (
    <section className="md:hidden flex items-center justify-center fixed bottom-0 bg-[#120d21] w-full py-3 px-2 z-50">
      <ul className="flex items-end justify-center gap-4">
        {bottomData.map((items) => {
          return <BottomBarListData key={items.id} items={items} />;
        })}
      </ul>
      {isWidth ? (
        <>
          <button
            onClick={handleToggle}
            className="py-2 px-6 sidebar-link rounded-md text-[18px] font-semibold"
          >
            <IoIosMore />
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default BottomBar;

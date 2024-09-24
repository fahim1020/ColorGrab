import React from "react";
import { copyColor, generateColor } from "../features";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Colors = () => {
  const colorList = Array.from({ length: 300 }, generateColor);

  return (
    <>
      <div className="main w-[90%] mx-auto my-2 p-2 grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center items-center h-[11rem]">
        {/* all colors  */}
        {colorList.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="color w-[18rem] h-[10rem] flex justify-center items-center mx-auto rounded text-xl cursor-pointer shadow-xl transition-transform transform-gpu hover:scale-105"
            onClick={() => {
              copyColor(color);
            }}
          >
            {color}
          </div>
        ))}
        <ToastContainer />
      </div>
    </>
  );
};

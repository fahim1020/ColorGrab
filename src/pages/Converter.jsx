import React, { useEffect, useState } from "react";
import { copyColor, hexToRgb, rgbToHex } from "../features";
import { ToastContainer } from "react-toastify";

export const Converter = () => {
  //State for text color when background color is changed
  const [textColor, setTextColor] = useState("black");
  //State for RGB color choice
  const [RGB, setRGB] = useState({ R: 156, G: 129, B: 182 });
  //State for HEX color choice
  const [hex, setHex] = useState("#e7d6c0");
  //State for first div backgroundColor in hex
  const [hexbg, setHexbg] = useState("#9c81b6");

  const onChangeHandler = (e, colorType) => {
    setRGB({ ...RGB, [colorType]: parseInt(e.target.value) });
  };
  //Hex to RGB color format
  const rgbColor = (hex) => {
    const rgb = hexToRgb(hex);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  useEffect(() => {
    setHexbg(rgbToHex(RGB.R, RGB.G, RGB.B));
  }, [RGB]);
  // set textColor when background color is changed
  useEffect(() => {
    if (
      window.getComputedStyle(document.body).backgroundColor === "rgb(17,17,17)"
    ) {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  }, []);

  return (
    <>
      {/* Main div  */}
      <div
        style={{ color: textColor }}
        className="main flex flex-col h-screen sm:flex-row w-full justify-evenly items-center  "
      >
        {/* Left side Div  */}
        <div
          style={{ backgroundColor: hexbg }}
          id="left-box"
          className={`rgb-hex w-[70%] sm:w-[30%] sm:h-[40%] flex flex-col  justify-evenly items-center rounded-md duration-500`}
          // Handle rotations
          onMouseOver={() => {
            document.getElementById("right-box").classList.add("rotate-45");
          }}
          onMouseLeave={() => {
            document.getElementById("right-box").classList.remove("rotate-45");
          }}
        >
          <label htmlFor="rgb" className="font-bold">
            RGB to Hex
          </label>
          {/* Red color input field */}

          <input
            type="number"
            id="rgb"
            className="shadow-lg my-2 p-1 rounded-sm focus:rounded-md outline-none  focus:border-2 border-blue-600"
            placeholder="Red"
            value={RGB.R}
            onChange={(e) => {
              onChangeHandler(e, "R");
            }}
          />
          {/* Green color input field */}

          <input
            type="number"
            className="shadow-lg my-2 p-1 rounded-sm focus:rounded-md outline-none  focus:border-2 border-blue-600"
            placeholder="Green"
            value={RGB.G}
            onChange={(e) => {
              onChangeHandler(e, "G");
            }}
          />
          {/* Blue color input field */}
          <input
            type="number"
            className="shadow-lg my-2 p-1 rounded-sm focus:rounded-md outline-none  focus:border-2 border-blue-600"
            placeholder="Blue"
            value={RGB.B}
            onChange={(e) => {
              onChangeHandler(e, "B");
            }}
          />
          {/* Result of RGB to Hex color  */}
          <input
            type="text"
            className="shadow-lg my-2 p-1 rounded-sm outline-none cursor-context-menu"
            value={rgbToHex(RGB.R, RGB.G, RGB.B)}
            onClick={(e) => {
              copyColor(e.target.value);
            }}
            readOnly
          />
        </div>
        <div
          style={{ backgroundColor: hex }}
          id="right-box"
          className={
            "hex-rgb w-[70%] sm:w-[40%] flex flex-col sm:flex-row justify-evenly items-center rounded-md sm:h-[15%]  duration-500"
          }
          // Handle rotations
          onMouseOver={() => {
            document
              .getElementById("left-box")
              .classList.add("rotate-[-45deg]");
          }}
          onMouseLeave={() => {
            document
              .getElementById("left-box")
              .classList.remove("rotate-[-45deg]");
          }}
        >
          <label htmlFor="hex" className="font-bold">
            Hex to RGB
          </label>
          <span>#</span>
          {/* Hex color input field  */}
          <input
            type="text"
            id="hex"
            className="shadow-lg my-2 p-1 rounded-sm focus:rounded-md outline-none  focus:border-2 border-blue-600 "
            placeholder="Hex"
            value={hex}
            onChange={(e) => {
              setHex(e.target.value);
            }}
          />
          {/* Result of Hex to RGB color  */}

          <input
            type="text"
            className="shadow-lg my-2 p-1 outline-none cursor-context-menu"
            readOnly
            value={rgbColor(hex)}
            onClick={(e) => {
              copyColor(e.target.value);
            }}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

import React, { useEffect, useState } from "react";
import {
  copyColor,
  hexToRgb,
  darkModeHasOrNot,
  onChangeHandler,
  rgbToHex,
} from "../features";

export const Controllers = ({ color, setColor }) => {
  const [RGB, setRGB] = useState({ R: 0, G: 0, B: 0 });

  // Handler function to update RGB values
  const rgbOnChangeHandler = (e, colorType) => {
    const updatedRGB = { ...RGB, [colorType]: parseInt(e.target.value) };
    setRGB(updatedRGB);
    setColor(rgbToHex(updatedRGB.R, updatedRGB.G, updatedRGB.B));
  };

  useEffect(() => {
    const { r, g, b } = hexToRgb(color);
    setRGB({ R: r, G: g, B: b });
  }, [color]);

  return (
    <div
      className={`change mx-auto md:w-[30%] sm:w-[30%] flex flex-col items-center bg-gray-200 ${
        darkModeHasOrNot() ? "text-black" : "text-black"
      } p-2 m-2 shadow-xl-red rounded-md`}
    >
      <p className="text-lg baskervville-sc-regular font-bold">
        Pick a hot color with your creative mind
      </p>
      <label htmlFor="color">Choose Color</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(e) => onChangeHandler(e, setColor)}
      />
      {/* For hex color */}
      <h1 className="py-2">
        Hex Color:{" "}
        <span
          className="bg-white text-black shadow-md px-2 rounded-sm cursor-pointer"
          onClick={() => {
            copyColor(color);
          }}
        >
          {color}
        </span>
      </h1>
      {/* For RGB color */}
      <h1 className="py-2">
        RGB Color:{" "}
        <span
          className="bg-white text-black shadow-md px-2 rounded-sm cursor-pointer"
          onClick={() => {
            copyColor(`rgb(${RGB.R},${RGB.G},${RGB.B})`);
          }}
        >
          {RGB.R},{RGB.G},{RGB.B}
        </span>
      </h1>
      <div className="control flex items-center flex-col w-full">
        <input
          type="range"
          value={RGB.R}
          min={0}
          max={255}
          className="bg-red-600 mb-2"
          onChange={(e) => rgbOnChangeHandler(e, "R")}
        />
        <input
          type="range"
          value={RGB.G}
          min={0}
          max={255}
          className="bg-green-500 mb-2"
          onChange={(e) => rgbOnChangeHandler(e, "G")}
        />
        <input
          type="range"
          value={RGB.B}
          min={0}
          max={255}
          className="bg-blue-500"
          onChange={(e) => rgbOnChangeHandler(e, "B")}
        />
      </div>
    </div>
  );
};

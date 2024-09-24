import React, { useState } from "react";
import { onChangeHandler, pickerHandler } from "../features";
export const Monitor = ({color, setColor}) => {
  const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });
  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
        className="w-full min-h-[15rem]"
        onClick={(e) => pickerHandler(e, setPickerPosition)}
      ></div>
      <input
        type="color"
        id="picker"
        value={color}
        onChange={(e) => onChangeHandler(e, setColor)}
        style={{
          position: "absolute",
          top: pickerPosition.top,
          left: pickerPosition.left,
          visibility: "hidden",
        }}
      />
    </>
  );
};

import { Bounce, toast } from "react-toastify";

// Generate random color
export const generateColor = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
};

// Set random color as background color
export const randomColor = () => {
  const hexColor = generateColor();
  document.body.style.backgroundColor = `${hexColor}`;
};

// Copy Hex Color
export const copyColor = (color) => {
  navigator.clipboard
    .writeText(color)
    .then(() => {
      toast(`Copied ${color} to clipboard!`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    })
    .catch((error) => {
      toast.error("Failed to copy", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    });
};

// For input field
export const onChangeHandler = (e, setColor) => {
  setColor(e.target.value);
};

// For picker detection
export const pickerHandler = (e, setPickerPosition) => {
  const pickerElement = document.getElementById("picker");
  setPickerPosition({ top: e.clientY, left: e.clientX });
  pickerElement.click();
};

//Hex to RGB
export const hexToRgb = (hex) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return {r,g,b};
};
//Dark mode has or not
export const darkModeHasOrNot = () => {
  return document.body.classList.contains("dark");
};
//RGB to Hex color
export const rgbToHex = (r, g, b) => {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};



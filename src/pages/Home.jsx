import React, { useState } from "react";

import { ToastContainer } from "react-toastify";
import { Controllers } from "../components/Controllers";
import { Monitor } from "../components/Monitor";
export const Home = () => {
  const [color, setColor] = useState("#ef9876");


  return (
    <>
      <Monitor color={color} setColor={setColor} />
      <Controllers color={color} setColor={setColor}/>
      <ToastContainer />
    </>
  );
};

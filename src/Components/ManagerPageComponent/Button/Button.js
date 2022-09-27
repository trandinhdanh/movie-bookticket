import "./Button.scss";
import React from "react";

function Button() {
  return (
    <>
      <button className="text-white font-bold bg-blue-500 border text-[16px] transition-all p-1 hover:bg-blue-300">
        + ADD USER
      </button>
    </>
  );
}

export default Button;

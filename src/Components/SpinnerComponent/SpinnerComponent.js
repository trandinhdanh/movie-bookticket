import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
export default function SpinnerComponent() {
    let {isLoading} = useSelector((state) => { 
        return state.spinnerReducer;
     })
    return isLoading  ? (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0,0.9)", zIndex: "99" }}
      className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center"
    >
      <HashLoader color="#b10000" size={70} />
    </div>
  ) : "";
}

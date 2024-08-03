/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import logo from "@/assets/shindaifood_logo.png";
import hamburger from "@/assets/hamburger1.png";

export default function SpHeader() {
  return (
    <>
      {/* <BrowserRouter> */}
      <header className="flex items-center bg-green-100">
        <div className="w-4/5">
          <a href="/" className="flex justify-center">
            <img src={logo} alt="" className="h-32 object-scale-down" />
          </a>
        </div>

        <div className="w-1/5 flex justify-end pr-2">
          <img src={hamburger} alt="" className="w-10 flex justify-end" />

          {/* <div>
            {for(let i=0; i<3;i++){
              return 
              <div className="border border-black "></div>;
            }}
            <div className="border border-black "></div>
            <div className="border border-black"></div>
            <div className="border border-black"></div>
          </div> */}
        </div>
      </header>
      {/* </BrowserRouter> */}
    </>
  );
}

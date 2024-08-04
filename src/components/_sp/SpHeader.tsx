/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import logo from "@/assets/shindaifood_logo.png";

export default function SpHeader() {
  return (
    <>
      {/* <BrowserRouter> */}

      <header className="flex items-center bg-green-100 w-full">
        <div className="w-4/5">
          <a href="/" className="flex justify-center">
            <img src={logo} alt="" className="h-32 object-scale-down" />
          </a>
        </div>

        <button className="w-1/6 flex justify-end">
          {(function () {
            const list = [];
            for (let i = 0; i < 3; i++) {
              list.push(
                <div
                  className="bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3.5"
                  key={i}
                ></div>
              );
            }
            return <ul className="w-1/ mb-3">{list}</ul>;
          })()}
        </button>
      </header>

      {/* </BrowserRouter> */}
    </>
  );
}

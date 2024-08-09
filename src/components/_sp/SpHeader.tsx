/* eslint-disable react/react-in-jsx-scope */
// import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/shindaifood_logo.png";
import "./SpHeader.css";

export default function SpHeader() {
  const [open, setOpen] = useState(false);
  const clickMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <BrowserRouter> */}

      <header className="flex items-center bg-green-100 w-full">
        <div className="w-4/5">
          <a href="/" className="flex justify-center">
            <img src={logo} alt="" className="h-32 object-scale-down" />
          </a>
        </div>

        <button
          className="w-1/5 flex flex-col items-center transition-opacity"
          onClick={clickMenu}
        >
          {(function () {
            const list = [];
            for (let i = 0; i < 3; i++) {
              list.push(
                <div
                  className="bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
                  key={i}
                ></div>
              );
            }
            return <ul className="mb-1">{list}</ul>;
          })()}
          <p className="text-green-600 font-bold">{open ? "CLOSE" : "MENU"}</p>
        </button>
      </header>

      <div className="menu-bar">
        <nav className="fixed left-0 w-full bg-black opacity-50 h-full z-10 nav-mask"></nav>

        <nav className="fixed right-0 w-2/5 min-h-full text-black flex flex-col items-center bg-green-100 opacity-95 z-20 nav-links">
          <button className="w-2/3 py-8 font-bold text-2xl border-y border-green-300 transition-opacity">
            TOP
          </button>

          <button className="w-2/3 py-8 font-bold text-2xl border-b border-green-300 transition-opacity">
            ABOUT US
          </button>
        </nav>
      </div>

      {/* </BrowserRouter> */}
    </>
  );
}

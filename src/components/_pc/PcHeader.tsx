/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import logo from "@/assets/shindaifood_logo.png";

export default function PcHeader() {
  return (
    <>
      {/* <BrowserRouter> */}
      <header className="flex items-center bg-green-100">
        <div className="w-2/3">
          <a href="/" className="flex justify-center">
            <img src={logo} alt="" className="h-32 object-cover" />
          </a>
        </div>

        <nav className="w-1/3">
          <ul className="flex justify-around">
            <li>
              <a
                href="/"
                className="text-slate-950 font-bold text-2xl transition hover:opacity-40"
              >
                TOP
              </a>
              {/* <Link to="/">TOP</Link> */}
            </li>

            <li>
              <a
                href="/aboutus"
                className="text-slate-950 font-bold text-2xl transition hover:opacity-40"
              >
                ABOUT US
              </a>
              {/* <Link to="/aboutus">ABOUT US</Link> */}
            </li>
          </ul>
        </nav>
      </header>
      {/* </BrowserRouter> */}
    </>
  );
}

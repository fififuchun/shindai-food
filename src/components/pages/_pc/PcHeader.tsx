import React from "react";
import "./PcHeader.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function PcHeader() {
  return (
    <>
      <BrowserRouter>
        <header className="Header">
          <div className="logo">シンダイフード</div>

          <nav>
            <ul>
              <li>
                {/* <a href="/">TOP</a> */}
                <Link to="/">TOP</Link>
              </li>

              <li>
                {/* <a href="/aboutus">ABOUT US</a> */}
                <Link to="/AboutUs">ABOUT US</Link>
              </li>
            </ul>
          </nav>
        </header>
      </BrowserRouter>
    </>
  );
}

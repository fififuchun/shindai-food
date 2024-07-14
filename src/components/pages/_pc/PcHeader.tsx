import React from "react";
import "./PcHeader.css";
// import { Link } from "react-router-dom";

export default function PcHeader() {
  return (
    <>
      <header className="Header">
        <div className="logo">シンダイフード</div>

        <nav>
          <ul>
            <li>
              <a href="/">TOP</a>
            </li>

            <li>
              <a href="/aboutus">ABOUT US</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">シンダイフード</div>

        <nav>
          <ul>
            <li>
              <Link to="/">TOP</Link>
            </li>

            {/* <li>
              <Link to="/home">Home</Link>
            </li> */}

            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
          </ul>

          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </>
  );
}

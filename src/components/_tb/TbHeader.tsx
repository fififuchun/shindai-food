/* eslint-disable react/react-in-jsx-scope */
import logo from "@/assets/logo/logo_shindaifood.webp";
import { Link } from "react-router-dom";

export default function PcHeader() {
  return (
    <>
      <header className="flex items-center bg-green-100">
        <div className="w-3/4">
          <a href="/" className="flex justify-center transition">
            <img src={logo} alt="" className="h-32 object-scale-down" />
          </a>
        </div>

        <nav className="w-1/3">
          <ul className="flex justify-around">
            <li>
              <Link
                to="/"
                className="text-slate-950 font-bold text-xl transition hover:opacity-40"
              >
                TOP
              </Link>
              {/* <Link to="/">TOP</Link> */}
            </li>

            <li>
              <Link
                to="/about"
                className="text-slate-950 font-bold text-xl transition hover:opacity-40"
              >
                ABOUT US
              </Link>
              1{/* <Link to="/aboutus">ABOUT US</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

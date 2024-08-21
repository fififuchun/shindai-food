/* eslint-disable react/react-in-jsx-scope */
import logo from "@/assets/shindaifood_logo.png";

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
              <a
                href="/"
                className="text-slate-950 font-bold text-xl transition hover:opacity-40"
              >
                TOP
              </a>
              {/* <Link to="/">TOP</Link> */}
            </li>

            <li>
              <a
                href="/aboutus"
                className="text-slate-950 font-bold text-xl transition hover:opacity-40"
              >
                ABOUT US
              </a>
              1{/* <Link to="/aboutus">ABOUT US</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

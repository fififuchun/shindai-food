/* eslint-disable react/react-in-jsx-scope */
// import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/shindaifood_logo.png";
// import "./SpHeader.css";

export default function SpHeader() {
  const [open, setOpen] = useState(false);
  const clickMenu = () => {
    setOpen(!open);
  };

  const normalHeader = "flex items-center bg-green-100 w-full";
  const activeHeader = "flex items-center bg-green-100 w-full fixed top-0 z-10";
  const headerstyle = open ? activeHeader : normalHeader;

  const header = () => {
    return (
      <header className="">
        <div className={headerstyle}>
          <div className="w-4/5">
            <a href="/" className="flex justify-center transition">
              <img src={logo} alt="" className="h-32 object-scale-down" />
            </a>
          </div>

          <motion.button
            className="w-1/5 flex flex-col items-center transition-opacity"
            onClick={clickMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
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
            <p className="text-green-600 font-bold">
              {open ? "CLOSE" : "MENU"}
            </p>
          </motion.button>
        </div>
      </header>
    );
  };

  return (
    <>
      {/* <BrowserRouter> */}
      {header()}

      <div className="menu-bar transition">
        {open && (
          <motion.button
            className="fixed left-0 w-full bg-black opacity-50 h-full z-10 transition"
            transition={{ delay: 0, duration: 1 }}
            onClick={clickMenu}
          >
            <motion.nav animate={{ opacity: open ? 0.7 : 0 }} />
          </motion.button>
        )}

        <motion.nav
          className="fixed right-0 w-2/5 min-h-full text-black flex flex-col items-center bg-green-100 opacity-95 z-20"
          animate={{ x: open ? 0 : 520 }}
        >
          <button className="w-2/3 py-8 font-bold text-2xl border-y border-green-300 transition-opacity">
            TOP
          </button>

          <button className="w-2/3 py-8 font-bold text-2xl border-b border-green-300 transition-opacity">
            ABOUT US
          </button>
        </motion.nav>
      </div>

      {/* </BrowserRouter> */}
    </>
  );
}

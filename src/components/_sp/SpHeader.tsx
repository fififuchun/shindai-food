/* eslint-disable react/react-in-jsx-scope */
// import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/shindaifood_logo.png";

const SpHeader = () => {
  const [open, setOpen] = useState(false);
  const clickMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <BrowserRouter> */}

      {open && (
        <p className="bg-green-100 h-32 text-black font-bold items-center flex justify-center">
          見せられないよ...!
        </p>
      )}

      <header
        className={
          open
            ? "flex items-center bg-green-100 w-full fixed top-0 z-10"
            : "flex items-center bg-green-100 w-full"
        }
      >
        <a href="/" className="w-4/5 flex justify-center transition">
          <img src={logo} alt="" className="h-32 object-scale-down" />
        </a>

        <motion.button
          className="w-1/5 flex flex-col items-center transition-opacity"
          onClick={clickMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        >
          {/* {(function () {
            const list = [];
            for (let i = 0; i < 3; i++) {
              list.push(
                <motion.div
                  className={
                    open && i === 0
                      ? "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3 rotate-45"
                      : "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
                  }
                  key={i}
                />
              );
            }
            return <ul className="mb-1">{list}</ul>;
          })()} */}

          <motion.div
            className={
              open
                ? "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3 rotate-45"
                : "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
            }
          />
          <motion.div
            className={
              open
                ? "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3 opacity-0"
                : "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
            }
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            className={
              open
                ? "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3 -rotate-45"
                : "bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
            }
          />
          <p className="text-green-600 font-bold">{open ? "CLOSE" : "MENU"}</p>
        </motion.button>

        <div className="fixed top-32">
          {/* 背景 */}
          {open && (
            <motion.button
              className="fixed w-full bg-black opacity- h-full z-10"
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              onClick={clickMenu}
            />
          )}

          {/* サイドバー */}
          <motion.nav
            className="fixed right-0 w-5/12 min-h-full text-black flex flex-col items-center bg-green-100 opacity-95 z-20"
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
      </header>

      {/* </BrowserRouter> */}
    </>
  );
};

export default SpHeader;

/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/shindaifood_logo.png";
import { Link } from "react-router-dom";

const SpHeader = () => {
  const [open, setOpen] = useState(false);
  const clickMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <p className="bg-green-100 h-32 text-black font-bold items-center flex justify-center text-left">
          見ないで!
        </p>
      )}

      <header
        className={
          open
            ? "h-32 flex items-center bg-green-100 w-full fixed top-0 z-10"
            : "h-32 flex items-center bg-green-100 w-full"
        }
      >
        <a href="/" className="w-4/5 flex justify-center transition">
          <img src={logo} alt="" className="object-scale-down" />
        </a>

        <motion.button
          className="w-1/5 flex flex-col items-center transition-opacity"
          onClick={clickMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        >
          {/* 1 */}
          <motion.div
            className="bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3 rotate-0"
            // initial={{ rotate: 0 }}
            animate={{
              rotate: open ? 45 : 0,
              translateY: open ? 14 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          {/* 2 */}
          <motion.div
            className="bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
            initial={{ opacity: 1 }}
            animate={{ opacity: open ? 0 : 1 }}
          />
          {/* 3 */}
          <motion.div
            className="bg-green-600 rounded-full list-none w-10 pb-0.5 mt-3"
            animate={{ rotate: open ? -45 : 0, translateY: open ? -14 : 0 }}
            transition={{ duration: 0.2 }}
          />
          {/* テキスト */}
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
            <Link
              to="/"
              className="w-2/3 py-8 flex justify-center font-bold text-2xl border-y border-green-300 transition-opacity"
              onClick={clickMenu}
            >
              TOP
            </Link>

            <Link
              to="/aboutus"
              className="w-2/3 py-8 flex justify-center font-bold text-2xl border-b border-green-300 transition-opacity"
              onClick={clickMenu}
            >
              <p>ABOUT&nbsp;</p>
              <p>US</p>
            </Link>
          </motion.nav>
        </div>
      </header>
    </>
  );
};

export default SpHeader;

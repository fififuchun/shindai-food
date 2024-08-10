/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import SpHeader from "./SpHeader.tsx";
import SpContents from "./SpContents.tsx";
import AboutUsPage from "@/components/AboutUsPage";
// import { Fragment } from "react/jsx-runtime";
// import { AnimatePresence } from "framer-motion";

const SpComponent = () => {
  // const location = useLocation();

  return (
    <>
      <SpHeader />

      {/* <AnimatePresence> */}
      <Router>
        {/* <Routes location={location} key={location.pathname}> */}
        <Routes>
          <Route path="/" element={<SpContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Router>
      {/* </AnimatePresence> */}
    </>
  );
};

export default SpComponent;

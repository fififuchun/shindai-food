/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import PcHeader from "./PcHeader.tsx";
import PcContents from "./PcContents.tsx";
import AboutUsPage from "@/components/AboutUsPage";

const PcComponent = () => {
  return (
    <>
      <PcHeader />

      <Router>
        <Routes>
          <Route path="/" element={<PcContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default PcComponent;

/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TbHeader from "./TbHeader.tsx";
import TbContents from "./TbContents.tsx";
import AboutUsPage from "@/components/AboutUsPage";

const SpComponent = () => {
  return (
    <>
      <TbHeader />

      <Router>
        <Routes>
          <Route path="/" element={<TbContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default SpComponent;

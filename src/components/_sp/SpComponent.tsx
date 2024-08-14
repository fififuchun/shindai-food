/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SpHeader from "./SpHeader.tsx";
import SpContents from "./SpContents.tsx";
import AboutUsPage from "@/components/AboutUsPage";

const SpComponent = () => {
  return (
    <>
      <SpHeader />
      {/* {isOpen && <div className="h-36 bg-slate-400">{isOpen}</div>} */}

      <Router>
        <Routes>
          <Route path="/" element={<SpContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default SpComponent;

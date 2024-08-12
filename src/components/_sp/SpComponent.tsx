/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SpHeader, isOpen } from "./SpHeader.tsx";
import SpContents from "./SpContents.tsx";
import AboutUsPage from "@/components/AboutUsPage";

const SpComponent = () => {
  return (
    <>
      <SpHeader />
      {/* {true && <div className="h-36 bg-slate-400">{isOpen}</div>} */}
      {/* {console.log(isOpen)} */}

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

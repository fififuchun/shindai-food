// import { useState } from "react";
import React from "react";
import "./App.css";
// import Header from "./components/Header";
// import TopPage from "./components/TopPage";
import AboutUsPage from "./components/AboutUsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./input.css";

import { MediaQueryProvider } from "./components/Provider/MediaQueryProvider";
import MainComponent from "@/components/pages/MainComponent.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MediaQueryProvider>
                <MainComponent />
              </MediaQueryProvider>
            }
          />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

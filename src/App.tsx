// import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopPage from "./components/TopPage";
import AboutUsPage from "./components/AboutUsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />

          {/* <HomePage /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

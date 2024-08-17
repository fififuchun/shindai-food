/* eslint-disable react/react-in-jsx-scope */
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SpHeader from "./_sp/SpHeader.tsx";
import SpContents from "./_sp/SpContents.tsx";

import PcHeader from "./_pc/PcHeader";
import PcContents from "./_pc/PcContents";

import TbHeader from "./_tb/TbHeader.tsx";
import TbContents from "./_tb/TbContents.tsx";

import AboutUsPage from "@/components/AboutUsPage";

const MainComponent = () => {
  const { isMobileSite, /*isTabletSite,*/ isPcSite } = useMediaQueryContext();

  if (isMobileSite) {
    return (
      <BrowserRouter>
        <SpHeader />

        <Routes>
          <Route path="/" element={<SpContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (isPcSite) {
    return (
      <BrowserRouter>
        <PcHeader />

        <Routes>
          <Route path="/" element={<PcContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <TbHeader />

        <Routes>
          <Route path="/" element={<TbContents />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default MainComponent;

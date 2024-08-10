/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import "./input.css";
import {
  MediaQueryProvider,
  useMediaQueryContext,
} from "./components/Provider/MediaQueryProvider";
import MainComponent from "./components/MainComponent";

// import PcComponent from "@/components/_pc/PcComponent";
// import SpComponent from "@/components/_sp/SpComponent";
// import TbComponent from "@/components/_tb/TbComponent";
// import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

function App() {
  const { isMobileSite /*, isTabletSite*/, isPcSite } = useMediaQueryContext();
  console.log(isMobileSite);
  console.log(isPcSite);

  return (
    <MediaQueryProvider>
      <MainComponent />

      {/* {(function () {
        if (isMobileSite) {
          return <SpComponent />;
        } else if (isPcSite) {
          return <PcComponent />;
        } else {
          return <TbComponent />;
        }
      })()} */}
    </MediaQueryProvider>
  );
}

export default App;

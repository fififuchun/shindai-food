import React from "react";
import "./input.css";
import { MediaQueryProvider } from "./components/Provider/MediaQueryProvider";
import MainComponent from "./components/pages/MainComponent";

// import MainComponent from "@/components/pages/MainComponent.tsx";
// import PcComponent from "@/components/pages/_pc/PcComponent";
// import SpContents from "@/components/pages/_sp/SpContents";
// import TbContents from "@/components/pages/_tb/TbContents";
// import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

function App() {
  // const { isMobileSite /*, isTabletSite*/, isPcSite } = useMediaQueryContext();

  return (
    <MediaQueryProvider>
      <MainComponent />
    </MediaQueryProvider>
  );

  // if (isMobileSite) {
  //   return (
  //     <MediaQueryProvider>
  //       <SpContents />
  //     </MediaQueryProvider>
  //   );
  // } else if (isPcSite) {
  //   return (
  //     <MediaQueryProvider>
  //       <PcComponent />
  //     </MediaQueryProvider>
  //   );
  // } else {
  //   return (
  //     <MediaQueryProvider>
  //       <TbContents />
  //     </MediaQueryProvider>
  //   );
  // }
}

export default App;

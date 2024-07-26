/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import PcComponent from "@/components/pages/_pc/PcComponent";
import SpContents from "@/components/pages/_sp/SpContents";
import TbContents from "@/components/pages/_tb/TbContents";
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

const MainComponent = () => {
  const { isMobileSite /*, isTabletSite*/, isPcSite } = useMediaQueryContext();

  if (isMobileSite) {
    return <SpContents />;
  } else if (isPcSite) {
    return <PcComponent />;
  } else {
    return <TbContents />;
  }
};

export default MainComponent;

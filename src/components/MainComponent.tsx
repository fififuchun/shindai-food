/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import PcComponent from "@/components/_pc/PcComponent";
import SpContents from "@/components/_sp/SpContents";
import TbContents from "@/components/_tb/TbContents";
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

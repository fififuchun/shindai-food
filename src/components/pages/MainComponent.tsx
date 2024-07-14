import React from "react";
import PcContents from "@/components/pages/_pc/PcContents";
import SpContents from "@/components/pages/_sp/SpContents";
import TbContents from "@/components/pages/_tb/TbContents";
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

const MainComponent = () => {
  const { isMobileSite /*, isTabletSite*/, isPcSite } = useMediaQueryContext();

  if (isMobileSite) {
    return <SpContents />;
  } else if (isPcSite) {
    return <PcContents />;
  } else {
    return <TbContents />;
  }
};

export default MainComponent;

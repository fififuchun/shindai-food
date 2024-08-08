/* eslint-disable react/react-in-jsx-scope */
import PcComponent from "@/components/_pc/PcComponent";
import SpComponent from "@/components/_sp/SpComponent";
import TbComponent from "@/components/_tb/TbComponent";
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

const MainComponent = () => {
  const { isMobileSite /*, isTabletSite*/, isPcSite } = useMediaQueryContext();

  if (isMobileSite) {
    return <SpComponent />;
  } else if (isPcSite) {
    return <PcComponent />;
  } else {
    return <TbComponent />;
  }
};

export default MainComponent;

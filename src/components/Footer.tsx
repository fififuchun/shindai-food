/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import kento from "@/assets/kento_icon.png";
import logo from "@/assets/logo-black.png";
// import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

const Footer = () => {
  // const { isMobileSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      <div className="bg-green-500 text-white mt-10">
        <ul className="flex pt-3 pb-2 mx-4 border-b border-green-600">
          <li>
            <Link to="/" className="transition hover:opacity-40">
              シンダイフードTOP
            </Link>
          </li>

          <li>&ensp;|&ensp;</li>

          <li>
            <Link to="/aboutus" className="transition hover:opacity-40">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>

      <ul className="h-40 pl-4 flex bg-green-500 text-white min-w-min">
        <li className="flex flex-col justify-center font-bold pl-3">
          <p>FuchunGames</p>
          <p>サービス一覧</p>
        </li>

        <a
          className="ml-8 my-4 flex flex-col justify-center items-center transition text-sm"
          href="https://play.google.com/store/apps/details?id=com.FuchunGames.RepeatKento"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={kento} alt="" className="h-3/4 rounded-2xl" />
          <div className="pt-2">ゲーム「検討を重ねろ！」</div>
        </a>

        <a
          className="ml-8 my-4 flex flex-col justify-center items-center transition text-sm"
          href="https://x.com/FuchunGames"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} alt="" className="h-3/4 p-2" />
          <div className="pt-2">FuchunGames 公式X</div>
        </a>
      </ul>

      <div className="bg-green-600 w-full h-10 text-white flex items-center justify-center font-bold text-sm">
        &copy;&ensp;2023-2024&ensp;FuchunGames,鈴木風優斗
      </div>
    </>
  );
};

export default Footer;

/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import kento from "@/assets/kento_feature.png";

const Footer = () => {
  return (
    <>
      <div className="mt-16">
        <div className="w-full h-10 bg-green-500 text-white font-bold">
          <ul className="flex m-4 pt-3 border-b border-green-600">
            <li>
              <Link to="/" className="font-bold transition hover:opacity-40">
                シンダイフードTOP
              </Link>
            </li>

            <li>&ensp;|&ensp;</li>
            <li>
              <Link
                to="/aboutus"
                className="font-bold transition hover:opacity-40"
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>

        <ul className="w-full h-28 px-4 flex bg-green-500 text-white font-bold items-center">
          <div>
            <p className="">FuchunGames</p>
            <p className="">サービス一覧</p>
          </div>

          <div className="bg-slate-00 mx-10 h-4/5">
            <img src={kento} alt="" className="h-full" />
          </div>
        </ul>

        <div className="bg-green-600 w-full h-10 text-white flex items-center justify-center font-bold text-sm">
          &copy;&ensp;2023-2024&ensp;FuchunGames,鈴木風優斗
        </div>
      </div>
    </>
  );
};

export default Footer;

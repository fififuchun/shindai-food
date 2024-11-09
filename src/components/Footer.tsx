/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import kento from "@/assets/kento_icon.webp";
// import logo from "@/assets/logo-black.webp";
// import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

import logo_sf from "@/assets/logo/logo_footer_shindaifood.webp";
import logo_x from "@/assets/logo/logo_black.webp";
import logo_youtube from "@/assets/logo/logo_Youtube.webp";
// import logo_insta from "@/assets/logo/logo_Instagram.webp";
import logo_gmail from "@/assets/logo/logo_gmail.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-green-400 flex flex-col items-center mt-5">
        <img
          src={logo_sf}
          alt="シンダイフード"
          className="w-96 my-5 rounded-3xl"
        />

        <div className="flex list-none space-x-8 font-bold text-sm py-5">
          <Link
            to="/"
            className="active:text-green-700 md:hover:text-green-700 text-white duration-200"
          >
            サイトトップ
          </Link>
          {/* <Link
            to="/contact"
            className="active:text-green-700 md:hover:text-green-700 text-white duration-200"
          >
            お問い合わせ
          </Link> */}
          <Link
            to="/about"
            className="active:text-green-700 md:hover:text-green-700 text-white duration-200"
          >
            私たちについて
          </Link>
        </div>

        <div className="flex items-center list-none space-x-8 pb-8">
          <motion.a
            className="bg-white h-16 w-16 rounded-full flex justify-center items-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            href="https://x.com/FuchunGames"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="w-8 h-8" src={logo_x} alt="公式X" />
          </motion.a>
          <motion.a
            className="bg-white h-16 w-16 rounded-full flex justify-center items-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            href="https://www.youtube.com/@FuchunGames"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="w-18 h-12" src={logo_youtube} alt="公式Instagram" />
          </motion.a>
          <Link to="/about">
            <motion.button
              className="bg-white h-16 w-16 rounded-full flex justify-center items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img
                className="w-10 h-10"
                src={logo_gmail}
                alt="公式メールアドレス"
              />
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="bg-green-600 w-full h-10 text-white flex items-center justify-center font-bold text-sm">
        &copy;&ensp;2023-2024&ensp;シンダイフード&ensp;FuchunGames,鈴木風優斗
      </div>
    </>
  );
};

export default Footer;

// const Footer = () => {
//   // const { isMobileSite, isPcSite } = useMediaQueryContext();

//   return (
//     <>
//       <div className="bg-green-500 text-white mt-10">
//         <ul className="flex pt-3 pb-2 mx-4 border-b border-green-600">
//           <li>
//             <Link to="/" className="transition hover:opacity-40">
//               シンダイフードTOP
//             </Link>
//           </li>

//           <li>&ensp;|&ensp;</li>

//           <li>
//             <Link to="/about" className="transition hover:opacity-40">
//               ABOUT US
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <ul className="h-40 pl-4 flex bg-green-500 text-white min-w-min">
//         <li className="flex flex-col justify-center font-bold pl-3">
//           <p>FuchunGames</p>
//           <p>サービス一覧</p>
//         </li>

//         <a
//           className="ml-8 my-4 flex flex-col justify-center items-center transition text-sm"
//           href="https://play.google.com/store/apps/details?id=com.FuchunGames.RepeatKento"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           <img src={kento} alt="" className="h-3/4 rounded-2xl" />
//           <div className="pt-2">ゲーム「検討を重ねろ！」</div>
//         </a>

//         <a
//           className="ml-8 my-4 flex flex-col justify-center items-center transition text-sm"
//           href="https://x.com/FuchunGames"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           <img src={logo} alt="" className="h-3/4 p-2" />
//           <div className="pt-2">FuchunGames 公式X</div>
//         </a>
//       </ul>

//       <div className="bg-green-600 w-full h-10 text-white flex items-center justify-center font-bold text-sm">
//         &copy;&ensp;2023-2024&ensp;FuchunGames,鈴木風優斗
//       </div>
//     </>
//   );
// };

// export default Footer;

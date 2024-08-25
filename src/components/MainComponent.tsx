/* eslint-disable react/react-in-jsx-scope */
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import SpHeader from "./_sp/SpHeader.tsx";
import SpContents from "./_sp/SpContents.tsx";

import PcHeader from "./_pc/PcHeader";
import PcContents from "./_pc/PcContents";

import TbHeader from "./_tb/TbHeader.tsx";
import TbContents from "./_tb/TbContents.tsx";

import AboutUsPage from "@/components/AboutUsPage";
import Footer from "@/components/Footer.tsx";
import NotFound from "./NotFound.tsx";
import { List, GENRE_COLLECTION } from "./List.tsx";
import "./Detail.css";

import mapLogo from "@/assets/google-maps-logo-2020.svg";
import arrow from "@/assets/detail.png";
import star from "@/assets/star.png";
import paypayLogo from "@/assets/paypay_logo.jpg";
import creditIcon from "@/assets/creditCard_icon.png";
import suicaIcon from "@/assets/suica_icon.png";
import walk from "@/assets/walk.svg";
import cycle from "@/assets/cycle.svg";
import coupon from "@/assets/coupon.png";

const MainComponent = () => {
  const { isMobileSite, /*isTabletSite,*/ isPcSite } = useMediaQueryContext();

  function Detail() {
    const params = useParams();

    //星をscoreの小数点切り捨て個出す
    const starList = (score: number) => {
      const list = [];
      for (let i = 0; i < Math.floor(score); i++) {
        list.push(<img src={star} key={i} />);
      }

      return (
        <li className="h-5 flex" style={{ width: score * 20 }}>
          {list}
        </li>
      );
    };

    //valueを小数点scale位まで丸める
    const roundWithScale = (value: number, scale: number) => {
      return Math.round(value * 10 ** scale) / 10 ** scale;
    };

    //配列を引数に平均を取る
    const average = (array: number[]) => {
      let sum: number = 0;
      for (let i: number = 0; i < array.length; i++) {
        sum += array[i];
      }
      sum = sum / array.length;
      return sum;
    };

    return (
      <>
        {List.map(
          (rest) =>
            (params.id === "debug" || params.id === rest.Id) && (
              <div
                className="text-black flex flex-col mx-5 my-10"
                key={rest.Id}
              >
                <p className="my-2 text-2xl font-bold">{rest.Name}</p>

                <img
                  src={"/photos/" + rest.Id + ".png"}
                  alt={rest.Id}
                  className="h-48 p-3 object-scale-down flex mr-auto rounded-3xl"
                />

                <table className="border-2 border-black">
                  <tr>
                    <th>総合評価</th>
                    <td>
                      <div className="flex items-center">
                        {roundWithScale(average(rest.Score), 2)}&nbsp;
                        {starList(
                          roundWithScale(Math.floor(average(rest.Score)), 2)
                        )}
                        <img
                          src={star}
                          style={{
                            width:
                              (average(rest.Score) -
                                Math.floor(average(rest.Score))) *
                              20,
                            height: 20,
                          }}
                          className="object-left object-cover"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th rowSpan={3}>(内訳)</th>
                    <td>
                      <div className="flex items-center">
                        味&emsp;&emsp;{rest.Score[0]}&nbsp;
                        {starList(roundWithScale(Math.floor(rest.Score[0]), 2))}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center">
                        量&emsp;&emsp;{rest.Score[1]}&nbsp;
                        {starList(roundWithScale(Math.floor(rest.Score[1]), 2))}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center">
                        値段&emsp;{rest.Score[2]}&nbsp;
                        {starList(roundWithScale(Math.floor(rest.Score[2]), 2))}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>ジャンル</th>
                    <td>
                      {(function () {
                        const list = [];

                        for (let i = 0; i < rest.Genre.length; i++) {
                          if (i === rest.Genre.length - 1) {
                            list.push(GENRE_COLLECTION[rest.Genre[i]].value);
                          } else {
                            list.push(
                              GENRE_COLLECTION[rest.Genre[i]].value + "・"
                            );
                          }
                        }

                        return <div>{list}</div>;
                      })()}
                    </td>
                  </tr>

                  <tr>
                    <th>信大からの距離</th>
                    <td>
                      <div className="flex mt-1">
                        <img src={walk} className="w-6" />
                        {roundWithScale(rest.Distance / 70, 0)}
                        分&nbsp;
                        <img src={cycle} className="w-6" />
                        {roundWithScale(rest.Distance / 250, 0)}分
                      </div>

                      <div className="border border-green-600 my-2 rounded-xl max-w-96">
                        <a
                          href={
                            "https://www.google.co.jp/maps/search/" + rest.Map
                          }
                          target="_blank"
                          rel="noreferrer noopener"
                          className="p-2 flex items-center"
                        >
                          <img src={mapLogo} className="w-1/3 max-w-12" />
                          <p
                            className={
                              isMobileSite
                                ? "w-3/5 ml-auto text-sm flex justify-center"
                                : "w-3/5 ml-auto text-lg flex justify-center font-bold"
                            }
                          >
                            地図で確認
                          </p>
                          <img
                            src={arrow}
                            className="w-1/12 ml-auto max-w-10 -rotate-90 flex justify-end"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>現金以外の支払</th>
                    <td>
                      <div className="flex justify-around max-w-52">
                        <div className="flex items-center">
                          <img src={paypayLogo} className="h-8" />
                          {/* {rest.Pay[0] ? "⚪︎" : "×"} */}
                          {rest.Pay[0] === null
                            ? "?"
                            : rest.Pay[0]
                            ? "⚪︎"
                            : "×"}
                        </div>
                        <div className="flex items-center">
                          <img src={creditIcon} className="h-8 mx-1" />
                          {/* {rest.Pay[1] ? "⚪︎" : "×"} */}
                          {rest.Pay[1] === null
                            ? "?"
                            : rest.Pay[1]
                            ? "⚪︎"
                            : "×"}
                        </div>
                        <div className="flex items-center">
                          <img src={suicaIcon} className="h-8 mx-1" />
                          {/* {rest.Pay[2] ? "⚪︎" : "×"} */}
                          {rest.Pay[2] === null
                            ? "?"
                            : rest.Pay[2]
                            ? "⚪︎"
                            : "×"}
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>駐車場</th>
                    <td>{rest.Parking[0] ? "あり" : "なし"}</td>
                  </tr>

                  <tr>
                    <th>駐輪場</th>
                    <td>{rest.Parking[1] ? "あり" : "なし"}</td>
                  </tr>

                  <tr>
                    <th>学生クーポン</th>
                    <td>
                      <div className="flex flex-col">
                        {rest.Coupon[0] === "" ? "現在調査中" : rest.Coupon[0]}
                        {rest.Coupon[1] === "" ? (
                          ""
                        ) : (
                          <a
                            href={rest.Coupon[1]}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-blue-800 flex items-center transition font-bold"
                          >
                            <img
                              src={coupon}
                              alt="coupon"
                              className="h-6 mx-2"
                            />
                            クーポンはこちら
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            )
        )}

        <div className="text-black flex flex-col justify-center items-center text-lg">
          各種お問い合わせ・異議申し立ては下記
          <a
            className="font-bold transition"
            href="https://x.com/FuchunGames"
            target="_blank"
            rel="noreferrer noopener"
          >
            FuchunGames公式X
          </a>
          のDMで受け付けております
        </div>
      </>
    );
  }

  if (isMobileSite) {
    return (
      <BrowserRouter>
        <SpHeader />

        <Routes>
          <Route path="/" element={<SpContents />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    );
  } else if (isPcSite) {
    return (
      <BrowserRouter>
        <PcHeader />

        <Routes>
          <Route path="/" element={<PcContents />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <TbHeader />

        <Routes>
          <Route path="/" element={<TbContents />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    );
  }
};

export default MainComponent;

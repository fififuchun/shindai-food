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

const MainComponent = () => {
  const { isMobileSite, /*isTabletSite,*/ isPcSite } = useMediaQueryContext();

  function Detail() {
    const params = useParams();

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

    // Googleマップへのリンク
    // const Map = "https://www.google.co.jp/maps/search/" + rest.Map;

    return (
      <>
        {List.map(
          (rest) =>
            params.id === rest.Id && (
              <div className="text-black flex flex-col m-10" key={rest.Id}>
                <p className="my-2 text-2xl font-bold">{rest.Name}</p>

                <table className="border-2 border-black">
                  <tr>
                    <th>総合評価</th>
                    <td>{roundWithScale(average(rest.Score), 2)}</td>
                  </tr>

                  <tr>
                    <th rowSpan={3}>（内訳）</th>
                    <td>味 {rest.Score[0]}</td>
                  </tr>

                  <tr>
                    <td>量 {rest.Score[1]}</td>
                  </tr>

                  <tr>
                    <td>値段 {rest.Score[2]}</td>
                  </tr>

                  <tr>
                    <th>ジャンル</th>
                    <td>
                      {(function () {
                        const list = [];
                        for (let i = 0; i < rest.Genre.length; i++) {
                          list.push(
                            <li>{GENRE_COLLECTION[rest.Genre[i]].value}</li>
                          );
                        }
                        return <ul>{list}</ul>;
                      })()}
                    </td>
                  </tr>

                  <tr>
                    <th>信大からの距離</th>
                    {/* <td>徒歩{rest.Walk}分<a href={Map}>地図</a></td> */}
                    <td>徒歩</td>
                  </tr>

                  <tr>
                    <th>支払方法</th>
                    <td>{rest.Pay}</td>
                  </tr>

                  <tr>
                    <th>駐車場</th>
                    <td>{rest.Parking[0] ? "あり" : "なし"}</td>
                  </tr>

                  <tr>
                    <th>駐輪場</th>
                    <td>{rest.Parking[1] ? "あり" : "なし"}</td>
                  </tr>
                </table>
              </div>
            )
        )}
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

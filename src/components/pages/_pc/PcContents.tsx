import React from "react";
import List from "@/components/List.tsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AboutUsPage from "@/components/AboutUsPage";

import img1 from "@/assets/1.png";
import walk from "@/assets/walkIcon.png";
import cycle from "@/assets/cycleIcon.png";
import star from "@/assets/star.png";
import sort from "@/assets/sort.png";
import filter from "@/assets/filter3.png";

const PcContents = () => {
  const starList = (score: number) => {
    const list = [];
    for (let i = 0; i < Math.floor(score); i++) {
      list.push(<img src={star} alt="" key={i} />);
    }
    return <li className="h-6 flex">{list}</li>;
  };

  const roundWithScale = (value: number, scale: number) => {
    return Math.round(value * 10 ** scale) / 10 ** scale;
  };

  return (
    <>
      <div className="flex">
        <div className="w-2/3 pl-12">
          {List.map((rest) => (
            <a key={rest.id} href="/denden">
              <div className="mt-8 pt-4 pl-4 pb-4 border-b flex content-center">
                <div className="flex justify-center h-36 w-1/3">
                  <img src={img1} alt="" className="object-scale-down" />
                </div>

                <div>
                  <div className="flex items-center pt-2 pl-2 pb-2">
                    <h3 className="ml-2 mr-4 font-bold text-2xl text-green-700">
                      {rest.Name}
                    </h3>
                    <p className="text-black mt-1 mr-1 font-bold text-lg">
                      {roundWithScale(
                        (rest.Score[0] + rest.Score[1] + rest.Score[2]) / 3,
                        2
                      )}
                    </p>

                    {/* 星 */}
                    {starList(
                      Math.floor(
                        (rest.Score[0] + rest.Score[1] + rest.Score[2]) / 3
                      )
                    )}

                    {/* ------------------------------------------------------- */}
                    <img
                      src={star}
                      alt=""
                      style={{
                        width:
                          ((rest.Score[0] + rest.Score[1] + rest.Score[2]) / 3 -
                            Math.floor(
                              (rest.Score[0] + rest.Score[1] + rest.Score[2]) /
                                3
                            )) *
                          24,
                        height: 24,
                      }}
                      className="object-left object-cover"
                    />
                  </div>

                  <p className="text-black ml-8 p-0.5 text-left">
                    ジャンル：{rest.Genre}
                  </p>
                  <div className="flex p-0.5">
                    <p className="text-black ml-8">信大から：</p>

                    <img src={walk} alt="" className="w-6 h-6 ml-2 mb-0" />
                    <p className="text-black mb-0">{rest.Time * 3}分</p>

                    <img src={cycle} alt="" className="w-6 h-6 ml-3 mb-0" />
                    <p className="text-black mb-0">{rest.Time}分</p>
                  </div>
                  <p className="text-black ml-8 p-0.5 text-left">
                    営業時間：〜21:00
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-black w-1/4 m-12 p-6 rounded-md bg-green-200">
          <div className="flex">
            <img src={filter} alt="" className="w-5 h-5 mt-0.5" />
            <p className="font-bold pl-1">フィルタ</p>
          </div>

          <ul className="bg-slate-00 pt-3 pb-12">
            <li className="bg-slate-00 flex mb-6 border-b border-b-slate-600">
              <p className="bg-slate-00 w-1/3 text-center font-bold">予算</p>
              <div className="bg-slate-00 w-2/3">sample</div>
            </li>

            <li className="bg-slate-00 flex mb-6 border-b border-b-slate-600">
              <p className="bg-slate-00 w-1/3 text-center font-bold">予算</p>
              <div className="bg-slate-00 w-2/3">test</div>
            </li>
          </ul>

          <div className="flex">
            <img src={sort} alt="" className="w-5 h-6 mt-0" />
            <p className="font-bold pl-1">ソート</p>
          </div>

          <div className="flex justify-around pl-10 pb-10">
            <label>
              <input type="radio" name="sort" />
              評価順
            </label>

            <label>
              <input type="radio" name="sort" />
              距離順
            </label>

            <label>
              <input type="radio" name="sort" />
              ??順
            </label>
          </div>

          <div className="flex justify-center">
            <button className="font-bold bg-orange-00 w-2/5 py-1 mr-4 rounded text-black border border-black">
              クリア
            </button>
            <button className="font-bold bg-green-500 w-3/5 py-1 rounded text-white">
              検索する
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PcContents;

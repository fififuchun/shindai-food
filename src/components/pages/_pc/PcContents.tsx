import React, { useState /*useEffect, Fragment*/ } from "react";
import { List, GENRE_COLLECTION } from "@/components/List.tsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AboutUsPage from "@/components/AboutUsPage";
import "./PcContents.css";

import img1 from "@/assets/1.png";
import walk from "@/assets/walkIcon.png";
import cycle from "@/assets/cycleIcon.png";
import star from "@/assets/star.png";
import sort from "@/assets/sort.png";
import filter from "@/assets/filter3.png";

const PcContents = () => {
  //星をscoreの小数点切り捨て個出す
  const starList = (score: number) => {
    const list = [];
    for (let i = 0; i < Math.floor(score); i++) {
      list.push(<img src={star} alt="" key={i} />);
    }
    return <li className="h-6 flex">{list}</li>;
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

  //number型の配列を渡すとstring型でジャンルを返す
  const genreArray = (numbers: number[]) => {
    let _genres: string = "";

    for (let i = 0; i < numbers.length; i++) {
      if (i > 0 && i < numbers.length) _genres += "・";
      if (numbers[i] < 0 || numbers[i] > GENRE_COLLECTION.length - 1) continue;

      _genres += GENRE_COLLECTION[numbers[i]].value;
    }
    return _genres;
  };

  //-----------------------------------------------------------
  //チェック・ジャンル
  const [genre, setGenre] = useState(GENRE_COLLECTION);

  const handleChange = (e: { target: { value: string } }) => {
    const newGenres = genre.map((_genre) => {
      const newGenre = { ..._genre };
      if (newGenre.label === e.target.value) newGenre.checked = !_genre.checked;
      return newGenre;
    });
    setGenre(newGenres);
  };

  //チェック・予算

  //ソート
  const SORT_COLLECTION = [
    "営業終了時間が早い順　",
    "信大からの距離が近い順",
    "評価が高い順　　　　　",
  ];

  const [select, setSelect] = useState("営業終了時間が早い順　");
  const onSelect = (e: { target: { value: React.SetStateAction<string> } }) =>
    setSelect(e.target.value);
  const clearSelect = () => setSelect("営業終了時間が早い順　");

  // ソートとチェックをクリア
  const clear = () => {
    setGenre(GENRE_COLLECTION);
    clearSelect();
  };

  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (
    <div className="flex">
      <div className="w-2/3 pl-12">
        {List.filter((rest) => {
          for (let i = 0; i < rest.Genre.length; i++)
            if (genre[rest.Genre[i]].checked) return true;
          return false;
        }).map((rest) => (
          <a key={rest.Id} href="/denden">
            <div className="mt-8 pt-4 pl-4 pb-4 border-b flex content-center">
              {/* 写真 */}
              <div className="flex justify-center h-36 w-1/3">
                <img src={img1} alt="" className="object-scale-down" />
              </div>

              {/* 右部店舗情報 */}
              <div>
                {/* 店舗名・評価 */}
                <div className="flex items-center pt-2 pl-2 pb-2">
                  <h3 className="ml-2 mr-4 font-bold text-2xl text-green-700">
                    {rest.Name}
                  </h3>
                  <p className="text-black mt-1 mr-1 font-bold text-lg">
                    {roundWithScale(average(rest.Score), 2)}
                  </p>

                  {/* 星 */}
                  {starList(roundWithScale(Math.floor(average(rest.Score)), 2))}
                  {/* 小数点の星 */}
                  <img
                    src={star}
                    alt=""
                    style={{
                      width:
                        (average(rest.Score) -
                          Math.floor(average(rest.Score))) *
                        24,
                      height: 24,
                    }}
                    className="object-left object-cover"
                  />
                </div>

                {/* ジャンル */}
                <p className="text-black ml-8 p-0.5 text-left">
                  ジャンル：{genreArray(rest.Genre)}
                </p>

                {/* 距離 */}
                <div className="flex p-0.5">
                  <p className="text-black ml-8">信大から：</p>

                  <img src={walk} alt="" className="w-6 h-6 mb-0" />
                  <p className="text-black mb-0">{rest.Cycle * 3}分</p>

                  <img src={cycle} alt="" className="w-6 h-6 ml-3 mb-0" />
                  <p className="text-black mb-0">{rest.Cycle}分</p>
                </div>

                {/* 営業時間 */}
                <p className="text-black ml-8 p-0.5 text-left">
                  営業時間：〜21:00
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ページ右部のフィルタ&ソート */}
      <div className="text-black w-1/4 m-12 p-6 rounded-md bg-green-200">
        {/* フィルタアイコン */}
        <div className="flex">
          <img src={filter} alt="" className="w-5 h-5 mt-0.5" />
          <p className="font-bold pl-1">フィルタ</p>
        </div>

        {/* フィルタ本体 */}
        <ul className="pt-3 pb-12">
          {/* フィルタ内部：ジャンル */}
          <li className="flex pb-1 mb-6 border-b border-b-slate-600 items-center">
            <p className="w-2/5 text-center font-bold">ジャンル</p>

            <div className="flex flex-col">
              <div className="items-center pt-1">
                {genre.map((genre) => {
                  return (
                    <div
                      className="flex items-center mx-auto mt-0.5 bg-slate-00"
                      key={genre.label}
                    >
                      <div className="flex">
                        <input
                          id={genre.label}
                          type="checkbox"
                          value={genre.label}
                          checked={genre.checked}
                          onChange={handleChange}
                          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                        />
                      </div>
                      <label
                        htmlFor={genre.label}
                        className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                      >
                        {genre.value}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>

          {/* フィルタ内部：予算 */}
          <li className="flex mb-6 border-b border-b-slate-600 items-center">
            <p className="w-2/5 text-center font-bold">予算</p>

            <div className="flex flex-col">
              <div className="items-center">
                <div className="">
                  <input
                    id="value0"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                  />
                  <label
                    htmlFor="value0"
                    className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                  >
                    リーズナブル
                  </label>
                </div>

                <div>
                  <input
                    id="value1"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                  />
                  <label
                    htmlFor="value1"
                    className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                  >
                    特別な時に
                  </label>
                </div>
              </div>
            </div>
          </li>

          {/* フィルタ内部：営業時間 */}
          <li className="flex mb-6 border-b border-b-slate-600">
            <p className="w-2/5 text-center font-bold">営業時間</p>

            <div className="flex flex-col">
              <div className="items-center">
                <div className="">
                  <input
                    id="time0"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                  />
                  <label
                    htmlFor="time0"
                    className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                  >
                    ランチ
                  </label>
                </div>

                <div>
                  <input
                    id="time1"
                    type="checkbox"
                    value=""
                    className="appearance-none border cursor-pointer rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                  />
                  <label
                    htmlFor="time1"
                    className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                  >
                    ディナー
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* ソート */}
        <div className="flex">
          <img src={sort} alt="" className="w-5 h-6" />
          <p className="font-bold pl-1">ソート</p>
        </div>

        <div className="p-1 mb-8 flex flex-col">
          {/* ソートの子要素 */}
          {SORT_COLLECTION.map((value) => {
            return (
              <div className="flex items-center mx-auto" key={value}>
                <div className="flex">
                  <input
                    id={value}
                    type="radio"
                    name="sort"
                    value={value}
                    checked={select === value}
                    onChange={onSelect}
                    className="w-4 h-4 appearance-none border cursor-pointer border-black rounded-full mr-2 hover:border-green-500 checked:bg-center checked:border-green-600 checked:bg-green-600"
                  />
                  <div
                    className="absolute w-1.5 h-1.5 bg-green-200 rounded-full"
                    style={{ marginTop: 5, marginLeft: 5 }}
                  ></div>
                </div>
                <label
                  htmlFor={value}
                  className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                >
                  {value}
                </label>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            className="font-bold bg-orange-00 w-2/5 py-1 mr-4 rounded text-black border border-black"
            onClick={clear}
          >
            クリア
          </button>

          <button className="font-bold bg-green-500 w-3/5 py-1 rounded text-white">
            ソートする
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcContents;

/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import {
  List,
  GENRE_COLLECTION,
  PRICE_COLLECTION,
  TIME_COLLECTION,
} from "@/components/List.tsx";
import { motion } from "framer-motion";

import img1 from "@/assets/1.png";
import walk from "@/assets/walkIcon.png";
import cycle from "@/assets/cycleIcon.png";
import star from "@/assets/star.png";
import sort from "@/assets/sort.png";
import filter from "@/assets/filter.png";
import detailArrow from "@/assets/detail.png";

const SpContents = () => {
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

  //Opened配列を渡すと現在営業中ならtrue、そうでないならfalseを返す
  const isOpened = (timeTable: number[], time: number) => {
    //Listの時刻表の長さが2,4以外なら返す
    if (!(timeTable.length === 2 || timeTable.length === 4)) return false;

    if (timeTable.length === 2) {
      if (timeTable[0] < time && time < timeTable[1]) return true;
    } else {
      if (
        (timeTable[0] < time && time < timeTable[1]) ||
        (timeTable[2] < time && time < timeTable[3])
      )
        return true;
      return false;
    }
  };

  //-----------------------------------------------------------
  //チェック・ジャンル
  const [genre, setGenre] = useState(GENRE_COLLECTION);
  const handleChangeGenre = (e: { target: { value: string } }) => {
    const newGenres = genre.map((_genre) => {
      const newGenre = { ..._genre };
      if (newGenre.label === e.target.value) newGenre.checked = !_genre.checked;
      return newGenre;
    });
    setGenre(newGenres);
  };

  //チェック・予算
  const [price, setPrice] = useState(PRICE_COLLECTION);
  const handleChangePrice = (e: { target: { value: string } }) => {
    const newPrices = price.map((_price) => {
      const newPrice = { ..._price };
      if (newPrice.label === e.target.value) newPrice.checked = !_price.checked;
      return newPrice;
    });
    setPrice(newPrices);
  };

  //チェック・営業時間
  const [time, setTime] = useState(TIME_COLLECTION);
  const handleChangeTime = (e: { target: { value: string } }) => {
    const newTimes = time.map((_time) => {
      const newTime = { ..._time };
      if (newTime.label === e.target.value) newTime.checked = !_time.checked;
      return newTime;
    });
    setTime(newTimes);
  };

  //ソート
  const SORT_COLLECTION = [
    "営業終了時間が早い順　",
    "信大からの距離が近い順",
    "評価が高い順　　　　　",
  ];

  const sortList = () => {
    let copyList;

    if (select === "営業終了時間が早い順　")
      copyList = [...List].sort((a, b) => a.Cycle - b.Cycle);
    else if (select === "信大からの距離が近い順")
      copyList = [...List].sort((a, b) => a.Cycle - b.Cycle);
    else
      copyList = [...List].sort((a, b) => average(b.Score) - average(a.Score));

    return copyList;
  };

  const [select, setSelect] = useState("営業終了時間が早い順　");
  const onSelect = (e: { target: { value: React.SetStateAction<string> } }) =>
    setSelect(e.target.value);
  const clearSelect = () => setSelect("営業終了時間が早い順　");

  // ソートとチェックをクリアkk
  const clear = () => {
    setGenre(GENRE_COLLECTION);
    setPrice(PRICE_COLLECTION);
    setTime(TIME_COLLECTION);
    clearSelect();
  };

  const [filterDetail, setFilterDetail] = useState(false);
  const onFilterDetail = () => {
    setFilterDetail(!filterDetail);
  };

  // const [sortDetail, setSortDetail] = useState(false);
  // const onSortDetail = () => {
  //   setSortDetail(!sortDetail);
  // };

  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (
    <>
      {/* ページ右部のフィルタ&ソート */}
      <div className="text-black mx-8 my-8 px-6 py-4 rounded-md bg-green-200">
        {/* フィルタアイコン */}
        <div className="flex">
          <img src={filter} alt="" className="w-5 h-5 mt-0.5" />
          <p className="font-bold pl-1">フィルタ</p>
        </div>

        {/* フィルタ本体 */}
        <ul className="pt-3 pb-4">
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
                          onChange={handleChangeGenre}
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

          {filterDetail && (
            <div>
              {/* フィルタ内部：予算 */}
              <li className="flex pb-1 mb-6 border-b border-b-slate-600 items-center">
                <p className="w-2/5 text-center font-bold">予算</p>

                <div className="flex flex-col">
                  <div className="items-center">
                    {price.map((price) => {
                      return (
                        <div
                          className="flex items-center mx-auto mt-0.5"
                          key={price.label}
                        >
                          <div className="flex">
                            <input
                              id={price.label}
                              type="checkbox"
                              value={price.label}
                              checked={price.checked}
                              onChange={handleChangePrice}
                              className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                            />
                          </div>
                          <label
                            htmlFor={price.label}
                            className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                          >
                            {price.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              {/* フィルタ内部：営業時間 */}
              <li className="flex pb-1 mb-6 border-b border-b-slate-600 items-center">
                <p className="w-2/5 text-center font-bold">営業時間</p>

                <div className="flex flex-col">
                  <div className="items-center">
                    {time.map((time) => {
                      return (
                        <div
                          className="flex items-center mx-auto mt-0.5"
                          key={time.label}
                        >
                          <div className="flex">
                            <input
                              id={time.label}
                              type="checkbox"
                              value={time.label}
                              checked={time.checked}
                              onChange={handleChangeTime}
                              className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-green-500 hover:bg-green-200 checked:bg-no-repeat checked:bg-center checked:border-green-600 checked:bg-green-300"
                            />
                          </div>
                          <label
                            htmlFor={time.label}
                            className="text-sm cursor-pointer text-gray-600 hover:opacity-70"
                          >
                            {time.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>
            </div>
          )}
        </ul>

        <div className="flex justify-center mb-10">
          <motion.button
            className="pointer flex justify-center items-center w-3/4 py-1 px-6 font-bold borde border-black rounded-md"
            onClick={onFilterDetail}
          >
            <motion.img
              src={detailArrow}
              alt=""
              className="w-6 mr-2"
              animate={{ rotate: filterDetail ? 180 : 0 }}
            />
            詳細設定
          </motion.button>
        </div>

        {/* ソート */}
        <div className="flex items-center mb-">
          <img src={sort} alt="" className="w-5 h-6" />
          <p className="font-bold pl-1">ソート</p>

          {/* <div className="w-3/4 ml-auto">
            <motion.button className="flex w-5/6 items-center border border-black text-black text-sm text-left rounded-md py-1 pl-3 ml-auto">
              {select}
              <motion.img src={detailArrow} className="flex w-5 ml-auto mr-2" />
            </motion.button>

            <motion.button className="flex absolute w-5/6 items-center borde bg-green-300 border-black text-black text-sm text-left py-1 pl-3 ml-auto">
              {select}
            </motion.button>
          </div> */}
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
            className="font-bold w-4/5 py-1 rounded text-black border border-black"
            onClick={clear}
          >
            クリア
          </button>
        </div>
      </div>

      <div className="mx-8">
        {sortList()
          .filter((rest) => {
            let isGenre: boolean = false;
            for (let i = 0; i < rest.Genre.length; i++)
              if (genre[rest.Genre[i]].checked) {
                isGenre = true;
                break;
              }

            const isPrice: boolean =
              (price[0].checked && rest.Score[2] <= 3) ||
              (price[1].checked && rest.Score[2] >= 4);

            const d = new Date();
            const hour = d.getHours();
            const minute = d.getMinutes();
            const currentTime = hour * 100 + minute;

            const isTime =
              (time[0].checked && isOpened(rest.Opened, currentTime)) ||
              (time[1].checked && isOpened(rest.Opened, 1300)) ||
              (time[2].checked && isOpened(rest.Opened, 1900));

            return isGenre && isPrice && isTime;
          })
          .map((rest) => (
            <a key={rest.Id} href="/denden">
              <div className="mt-4 pt-4 pb-2 pl-4 border-b content-center">
                <div className="flex">
                  <h3 className="ml-2 mr-4 font-bold flex items-center text-2xl text-green-700">
                    {rest.Name}
                  </h3>

                  {/* 店舗名・評価 */}
                  <div className="flex items-center pt-2 pl-2 pb-2">
                    <p className="text-black mt-1 mr-1 font-bold text-lg">
                      {roundWithScale(average(rest.Score), 2)}
                    </p>

                    {/* 星 */}
                    {starList(
                      roundWithScale(Math.floor(average(rest.Score)), 2)
                    )}
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
                </div>

                <div className="flex bg-slate-00">
                  {/* 写真 */}
                  <img
                    src={img1}
                    alt=""
                    className="h-28 w-1/3 object-scale-down"
                  />

                  {/* 右部店舗情報 */}
                  <div className="pl-2 flex flex-col justify-center text-black text-sm">
                    {/* ジャンル */}
                    <p className="ml-6 p-0.5 text-left">
                      ジャンル：{genreArray(rest.Genre)}
                    </p>

                    {/* 距離 */}
                    <div className="flex p-0.5 ml-6">
                      <p>信大から：</p>

                      <img src={walk} alt="" className="w-5 h-5" />
                      <p>{rest.Cycle * 3}分</p>

                      <img src={cycle} alt="" className="w-5 h-5 ml-3" />
                      <p>{rest.Cycle}分</p>
                    </div>

                    {/* 営業時間 */}
                    <p className="ml-6 p-0.5 text-left">営業時間：〜21:00</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div>
    </>
  );
};

export default SpContents;

/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import {
  List,
  changeTime,
  GENRE_COLLECTION,
  PRICE_COLLECTION,
  TIME_COLLECTION,
} from "@/components/List.tsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import walk from "@/assets/walk.svg";
import cycle from "@/assets/cycle.svg";
import star from "@/assets/star.png";
import sort from "@/assets/sort.png";
import filter from "@/assets/filter.png";
import detailArrow from "@/assets/detail.png";
import oji from "@/assets/oji.png";

const SpContents = () => {
  //星をscoreの小数点切り捨て個出す
  const starList = (score: number) => {
    const list = [];
    for (let i = 0; i < Math.floor(score); i++) {
      list.push(<img src={star} key={i} />);
    }

    return (
      <li className="h-6 flex" style={{ width: score * 24 }}>
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
    if (select === "営業終了時間が早い順　" && e.target.value !== "currently") {
      alert(
        "現在営業中以外の飲食店を検索する時は「営業終了時間が早い順」以外を選択してください！"
      );
      return;
    }

    const newTimes = time.map((_time) => {
      const newTime = { ..._time };
      if (newTime.label === e.target.value) newTime.checked = !_time.checked;
      return newTime;
    });
    setTime(newTimes);
  };

  //ソート
  const SORT_COLLECTION = [
    "信大からの距離が近い順",
    "営業終了時間が早い順　",
    "評価が高い順　　　　　",
  ];

  const sortList = () => {
    let copyList;

    if (select === "営業終了時間が早い順　") {
      copyList = [...List].sort(
        (a, b) => closeTime(a.Opened) - closeTime(b.Opened)
      );
    } else if (select === "信大からの距離が近い順")
      copyList = [...List].sort((a, b) => a.Distance - b.Distance);
    else
      copyList = [...List].sort((a, b) => average(b.Score) - average(a.Score));

    return copyList;
  };

  const closeTime = (opened: number[]) => {
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const currentTime = hour * 100 + minute;

    if (opened.length === 2 || opened.length === 4) {
      if (opened[0] < currentTime && currentTime < opened[1]) return opened[1];
      else if (opened[2] < currentTime && currentTime < opened[3])
        return opened[3];
      else return 0;
    } else {
      return 0;
    }
  };

  const [select, setSelect] = useState("信大からの距離が近い順");
  const onSelect = (e: { target: { value: React.SetStateAction<string> } }) => {
    //現在営業中以外が選択されている状態で"営業終了時間が早い順"が選択されたら営業時間の選択をリセットする
    if (e.target.value === "営業終了時間が早い順　") setTime(TIME_COLLECTION);

    setSelect(e.target.value);
  };
  const clearSelect = () => setSelect("信大からの距離が近い順");

  // ソートとチェックをクリア
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

  //条件を満たす飲食店の数
  let count = 0;

  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (
    <>
      {/* ページ右部のフィルタ&ソート */}
      <div className="text-black m-6 px-6 py-4 rounded-md bg-green-200">
        {/* フィルタアイコン */}
        <div className="flex">
          <img src={filter} alt="" className="w-5 h-5 mt-0.5" />
          <p className="font-bold pl-1">フィルタ</p>
        </div>

        {/* フィルタ本体 */}

        {/* フィルタ内部：ジャンル */}
        <li className="flex pb-1 mb-4 border-b border-b-slate-600 items-center">
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
            <li className="flex pb-1 mb-4 border-b border-b-slate-600 items-center">
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
            <li className="flex pb-1 mb-4 border-b border-b-slate-600 items-center">
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

        <div className="flex justify-center mb-6">
          <motion.button
            className="pointer flex justify-center items-center w-3/4 py-1 px-6 font-bold borde border-black rounded-md"
            onClick={onFilterDetail}
          >
            <motion.img
              src={detailArrow}
              className="w-6 mr-2"
              animate={{ rotate: filterDetail ? 180 : 0 }}
            />
            詳細設定
          </motion.button>
        </div>

        {/* ソート */}
        <div className="flex items-center mb-">
          <img src={sort} className="w-5 h-6" />
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

      <div className="mx-4">
        {sortList()
          .filter((rest) => {
            let isGenre: boolean = false;
            for (let i = 0; i < rest.Genre.length; i++)
              if (genre[rest.Genre[i]].checked) {
                isGenre = true;
                break;
              }

            const isPrice: boolean =
              (price[0].checked && rest.Score[2] >= 3) ||
              (price[1].checked && rest.Score[2] <= 2);

            const d = new Date();
            const hour = d.getHours();
            const minute = d.getMinutes();
            const day = d.getDay();
            const currentTime = hour * 100 + minute;
            // const currentTime = 1930;

            const isTime =
              (time[0].checked && isOpened(rest.Opened, currentTime)) ||
              (time[1].checked && isOpened(rest.Opened, 1300)) ||
              (time[2].checked && isOpened(rest.Opened, 1900));

            const isDay: boolean =
              day === 0 ? rest.OpenedDay[6] : rest.OpenedDay[day - 1];

            const isShop =
              isGenre &&
              isPrice &&
              isTime &&
              (isDay || time[1].checked || time[2].checked);

            if (isShop) count++;
            // console.log(count);

            return isShop;
          })
          .map((rest) => (
            <Link key={rest.Id} to={"/detail/" + rest.Id}>
              <div className="mt-4 mb-8 pl-4 border-b content-center">
                <div className="flex">
                  <h3 className="mr-4 font-bold flex items-center text-xl text-green-700">
                    {rest.Name}
                  </h3>

                  {/* 店舗名・評価 */}
                  <div className="flex items-center pl-2">
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

                <div className="flex">
                  {/* 写真 */}
                  <img
                    src={"/compressed_photos/" + rest.Id + ".webp"}
                    className="w-1/3 my-3 object-scale-down"
                  />

                  {/* 右部店舗情報 */}
                  <div className="flex flex-col justify-center text-black text-sm">
                    {/* ジャンル */}
                    <p className="ml-4 p-0.5 text-left">
                      ジャンル:&nbsp;{genreArray(rest.Genre)}
                    </p>

                    {/* 距離 */}
                    <div className="flex p-0.5 ml-4">
                      <p>信大から:&nbsp;</p>

                      <img src={walk} alt="" className="w-5 h-5" />
                      <p>{roundWithScale(rest.Distance / 70, 0)}分</p>

                      <img src={cycle} alt="" className="w-5 h-5 ml-3" />
                      <p>{roundWithScale(rest.Distance / 250, 0)}分</p>
                    </div>

                    {/* 営業時間 */}
                    <p className="ml-4 p-0.5 text-left flex items-center">
                      営業時間:&nbsp;
                      <span className="text-xs">
                        {rest.Opened.length === 4
                          ? changeTime(rest.Opened[0]) +
                            "-" +
                            changeTime(rest.Opened[1]) +
                            "," +
                            changeTime(rest.Opened[2]) +
                            "-" +
                            changeTime(rest.Opened[3])
                          : changeTime(rest.Opened[0]) +
                            "-" +
                            changeTime(rest.Opened[1])}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        {count === 0 && (
          <div className="mt-8 py-4 pl-4 flex flex-col items-center text-xl text-black font-bold">
            <img src={oji} alt="おじさん" className="w-1/4" />
            <p>条件に合う飲食店がありません！</p>
            <p>フィルタの内容を見直してください！</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SpContents;

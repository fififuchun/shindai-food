/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import {
  List,
  GENRE_COLLECTION,
  PRICE_COLLECTION,
  TIME_COLLECTION,
} from "@/components/List.tsx";

import img1 from "@/assets/1.png";
import walk from "@/assets/walkIcon.png";
import cycle from "@/assets/cycleIcon.png";
import star from "@/assets/star.png";
// import sort from "@/assets/sort.png";
// import filter from "@/assets/filter.png";

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

  // let LIST_COPY = [...List];

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

  // ソートとチェックをクリア
  const clear = () => {
    setGenre(GENRE_COLLECTION);
    setPrice(PRICE_COLLECTION);
    setTime(TIME_COLLECTION);
    clearSelect();
  };

  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (
    <div className="flex">
      <div className="w-full px-10">
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
              <div className="mt-4 pt-4 pl-4 pb-4 border-b flex content-center bg-slate-00">
                {/* 写真 */}
                <div className="flex justify-center h-36 w-1/3">
                  <img src={img1} alt="" className="object-scale-down" />
                </div>

                {/* 右部店舗情報 */}
                <div className="pl-2">
                  <h3 className="ml-2 mr-4 font-bold text-2xl text-green-700">
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

                  {/* ジャンル */}
                  <p className="text-black ml-6 p-0.5 text-left">
                    ジャンル：{genreArray(rest.Genre)}
                  </p>

                  {/* 距離 */}
                  <div className="flex p-0.5 ml-6">
                    <p className="text-black">信大から：</p>

                    <img src={walk} alt="" className="w-6 h-6 mb-0" />
                    <p className="text-black">{rest.Cycle * 3}分</p>

                    <img src={cycle} alt="" className="w-6 h-6 ml-3 mb-0" />
                    <p className="text-black">{rest.Cycle}分</p>
                  </div>

                  {/* 営業時間 */}
                  <p className="text-black ml-6 p-0.5 text-left">
                    営業時間：〜21:00
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default SpContents;

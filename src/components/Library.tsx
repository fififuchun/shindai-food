/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import Data_matsumoto from "@/json/calendar_matsumoto.json";

// 時間
interface Time {
  hours: number;
  minutes: number;
}

function addTime(time1: Time, time2: Time): Time {
  const totalMinutes =
    time1.hours * 60 + time1.minutes + time2.hours * 60 + time2.minutes;
  return {
    hours: Math.floor(totalMinutes / 60),
    minutes: totalMinutes % 60,
  };
}

function parseTime(timeString: string): Time {
  // 文字列を ":" で分割して [hours, minutes] を取得
  const [hours, minutes] = timeString.split(":").map(Number);

  // Time オブジェクトを返す
  return {
    hours,
    minutes,
  };
}

function parseStr(time: Time): string {
  return `${time.hours}:${
    time.minutes < 10 ? `0${time.minutes}` : time.minutes.toString()
  }`;
}

function parseNum(time: Time): number {
  return time.hours * 100 + time.minutes;
}

const Library: React.FC = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const day: string = `${year}-${month}-${date}`;

  const getOpenTime = () => {
    for (let i = 0; i < Data_matsumoto.length; i++) {
      if (Data_matsumoto[i].Day == day) {
        return [Data_matsumoto[i].Start, Data_matsumoto[i].End];
      }
    }
  };
  // 開館時間のリスト
  const openTime = getOpenTime();
  // 10分マイナス
  const minusTenMin: Time = { hours: 0, minutes: -10 };
  // 閉館時間をTimeオブジェクトに変換
  const closeTime: Time = parseTime(openTime?.[1] || "");
  // 計測時間のリスト
  const timeList: Time[] = [
    { hours: 11, minutes: 30 },
    { hours: 15, minutes: 0 },
    { hours: 17, minutes: 30 },
    { hours: 19, minutes: 30 },
    {
      hours: addTime(closeTime, minusTenMin).hours,
      minutes: addTime(closeTime, minusTenMin).minutes,
    },
  ];

  // 読み込み中かを判別
  const [loading, setLoading] = useState(true);

  // iframe の onLoad で読み込み完了を検知
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col my-10 items-center">
        <div className="font-bold text-2xl text-green-600">
          <p>テストディレクトリ</p>
        </div>

        <p className="my-5 text-black">現在開発中の機能です</p>

        <div className="my-5 text-black flex flex-col items-center">
          <p>
            {day}の中央図書館の開館時間は{openTime?.join("-")}です
          </p>

          <div className="flex">
            本日の計測予定時間は
            {timeList
              .filter((time) => {
                return parseNum(time) < parseNum(closeTime);
              })
              .map((time) => (
                <span key={time.hours}>
                  {parseStr(time)}
                  {time.hours == 15 ? "(土日祝なら14:30)" : ""}
                  {time.hours !== 21 ? "," : ""}
                </span>
              ))}
            です
          </div>
        </div>

        <div className="w-80 h-60 my-5 flex justify-center items-center">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6bwX6f1tltiaviiSq1JAeTSy8_kqDj4LE-10ZSFfXXRR72jamrzaZ5FGTUEAxrzhZGZKbBnAQj22c/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            className="flex items-center w-full h-full"
            onLoad={handleLoad}
            style={{ display: loading ? "none" : "block" }}
          ></iframe>
          {loading && (
            <div className="text-black text-2xl font-bold">
              混雑状況を読み込み中...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Library;

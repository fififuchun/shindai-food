/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react";
import Data_matsumoto from "@/json/calendar_matsumoto.json";
// import lib1_0 from "@/assets/lib/lib_1_0.webp";
// import lib1_1 from "@/assets/lib/lib_1_1.webp";
// import lib2_0 from "@/assets/lib/lib_2_0.webp";
// import lib2_1 from "@/assets/lib/lib_2_1.webp";
// import lib3_0 from "@/assets/lib/lib_3_0.webp";
// import lib3_1 from "@/assets/lib/lib_3_1.webp";
// import lib3_2 from "@/assets/lib/lib_3_2.webp";
// import lib3_3 from "@/assets/lib/lib_3_3.webp";

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

  // 現在の横幅
  const [width, setWidth] = useState(
    window.innerWidth > 500 ? 500 : window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) setWidth(500);
      else setWidth(window.innerWidth);
    };

    // リスナーを追加
    window.addEventListener("resize", handleResize);
    // クリーンアップ関数
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                  {time.hours == 15 && time.minutes == 0
                    ? "(土日祝なら14:30)"
                    : ""}
                  {time.hours === timeList[timeList.length - 1].hours &&
                  time.minutes === timeList[timeList.length - 1].minutes
                    ? ""
                    : ","}
                </span>
              ))}
            です
          </div>
        </div>

        {/* ボーダー */}
        <div className="border border-b-0 w-lvw"></div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: `${width}px`, // 親要素の幅
            height: `${(width * 1700) / 460}px`, // 高さを適切に設定
            overflow: "hidden", // スクロールバーを隠す
            position: "relative", // 相対位置を指定
          }}
        >
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6bwX6f1tltiaviiSq1JAeTSy8_kqDj4LE-10ZSFfXXRR72jamrzaZ5FGTUEAxrzhZGZKbBnAQj22c/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            onLoad={handleLoad}
            style={{
              display: loading ? "none" : "block",
              width: `${46000 / width}%`,
              height: `${46000 / width}%`,
              transform: `scale(${width / 460})`,
              transformOrigin: "top left", // 縮小の基準点を左上に
              position: "absolute", // 親のdivを基準に絶対位置
              left: 10,
              top: 10,
            }}
          ></iframe>
          {loading && (
            <div
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "10 0 auto 0",
              }}
            >
              混雑状況を読み込み中...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Library;

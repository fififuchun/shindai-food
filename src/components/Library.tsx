/* eslint-disable react/react-in-jsx-scope */
// import React, { useEffect, useState, useRef } from "react";
import Data_matsumoto from "@/json/calendar_matsumoto.json";

import sample_lib from "@/assets/lib/sample_library.webp";
// import show_0_0 from "@/assets/lib/library_congestion_show_0_0.webp";
// import show_0_1 from "@/assets/lib/library_congestion_show_0_1.webp";
// import show_0_2 from "@/assets/lib/library_congestion_show_0_2.webp";

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
  // const [loading, setLoading] = useState(true);
  // // iframe の onLoad で読み込み完了を検知
  // const handleLoad = () => {
  //   setLoading(false);
  // };

  // const containerRef = useRef<HTMLDivElement>(null);
  // const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   const updateScale = () => {
  //     if (containerRef.current) {
  //       const parentWidth = containerRef.current.offsetWidth;
  //       setScale(parentWidth / 450); // 450は固定サイズ
  //     }
  //   };

  //   // 初回実行
  //   updateScale();

  //   // ResizeObserverで親要素のリサイズを監視
  //   const resizeObserver = new ResizeObserver(updateScale);
  //   if (containerRef.current) {
  //     resizeObserver.observe(containerRef.current);
  //   }

  //   return () => {
  //     resizeObserver.disconnect();
  //   };
  // }, []);

  return (
    <>
      <div className="flex flex-col my-10 items-center">
        <div className="font-bold text-2xl text-green-600">
          <p>テストディレクトリ</p>
        </div>

        <p className="mb-40 mt-5 text-black">現在開発中の機能です</p>

        <div className="px-6 md:flex w-full bg-slate-00">
          <p className="text-black content-center text-center font-bold text-5xl md:w-1/2">
            カレンダー
          </p>

          <div className="md:w-1/2 max-w-[450px] justify-center bg-slate-200">
            <img src={sample_lib} alt="サンプル画像" className="mt-5" />

            {/* ここから */}
            <div
              // ref={containerRef} // 親要素のリサイズを検知するためのref
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingBottom: "50%",
                margin: "20px 0 20px 0",
              }}
            >
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTslqizbdpWZRdB-tfxJdwsupzJYUk36kPvRySnqH8rSRER5Jc99x1bH0AuhmTBmuGBgQ9IqmIoBxlP/pubhtml?gid=1208272682&amp;single=true&amp;widget=true&amp;headers=false"
                style={{
                  position: "absolute",
                  // width: `${100 / scale}%`, // iframeの大きさを親要素の規定幅の逆数倍することで拡大
                  // height: `${100 / scale}%`, // 上と同様
                  // transform: `scale(${scale})`, // scaleを設定

                  width: "100%",
                  height: "220px",
                  transformOrigin: "top left",
                }}
              />
            </div>
            {/* ここまで */}

            {/* <p>{scale}</p> */}

            {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTslqizbdpWZRdB-tfxJdwsupzJYUk36kPvRySnqH8rSRER5Jc99x1bH0AuhmTBmuGBgQ9IqmIoBxlP/pubhtml?gid=1208272682&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}

            {/* <img src={show_0_0} alt="" className="mb-5" />
            <img src={show_0_1} alt="" className="my-5" />
            <img src={show_0_2} alt="" className="my-5" /> */}
          </div>
        </div>

        {/* <div className="bg-slate-200">
          <div>
            <iframe
              // className="w-full h-[210px] mb-5"
              style={{
                display: loading ? "none" : "block",
                width: `${46000 / width}%`,
                height: `${46000 / width}%`,
                transform: `scale(${width / 460})`,
                transformOrigin: "top left", // 縮小の基準点を左上に
                position: "absolute", // 親のdivを基準に絶対位置
                left: 0,
                top: 0,
              }}
              onLoad={handleLoad}
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTslqizbdpWZRdB-tfxJdwsupzJYUk36kPvRySnqH8rSRER5Jc99x1bH0AuhmTBmuGBgQ9IqmIoBxlP/pubhtml?gid=1208272682&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
        </div> */}

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
        {/* <div className="border border-b-0 w-lvw"></div> */}

        {/* <div
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
        </div> */}
      </div>
    </>
  );
};

export default Library;

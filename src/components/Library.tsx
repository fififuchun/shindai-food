/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react";

// Propsの型定義
interface LibraryOpenTimeProps {
  placeNum: number; // placeNumは必須の数値型
}

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

function formatTime(time: Time): string {
  return `${String(time.hours).padStart(2, "0")}:${String(
    time.minutes
  ).padStart(2, "0")}`;
}

function changeNumToTime(num: number): Time {
  return { hours: Math.floor(num / 100), minutes: num % 100 };
}

const Library: React.FC<LibraryOpenTimeProps> = ({ placeNum }) => {
  const [times, setTimes] = useState(null);

  const minusTenMin: Time = { hours: 0, minutes: -10 };
  const checkTimeList: number[] = times
    ? [
        1130,
        1500,
        1730,
        1930,
        addTime(changeNumToTime(times[1]), minusTenMin).hours * 100 +
          addTime(changeNumToTime(times[1]), minusTenMin).minutes,
      ]
    : [1130, 1500, 1730, 1930];

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:5000/library-time/${placeNum}`)
  //     .then((response) => response.json())
  //     .then((data) => setTimes(data))
  //     .catch((error) => console.error("データ取得エラー:", error));
  // }, [placeNum]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/library-time/${placeNum}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response:", data); // デバッグ用にAPIからのレスポンスを確認
        setTimes(data);
      })
      .catch((error) => console.error("データ取得エラー:", error));
  }, [placeNum]);

  return (
    <>
      <div className="flex flex-col my-10 text-black items-center">
        <div className="font-bold text-2xl">
          <p>テスト用</p>
        </div>

        <div className="justify-center">
          {times ? (
            <p>
              開館時間 {formatTime(changeNumToTime(times[0]))} - 開館時間{" "}
              {formatTime(changeNumToTime(times[1]))}
            </p>
          ) : (
            <p>読み込み中...</p>
          )}
        </div>

        <p>本日の計測予定時間: </p>
        {checkTimeList.map((checkTime) => (
          <div key={checkTime}>{formatTime(changeNumToTime(checkTime))}</div>
        ))}

        <div className="my-5">
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6bwX6f1tltiaviiSq1JAeTSy8_kqDj4LE-10ZSFfXXRR72jamrzaZ5FGTUEAxrzhZGZKbBnAQj22c/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
      </div>
    </>
  );
};

export default Library;

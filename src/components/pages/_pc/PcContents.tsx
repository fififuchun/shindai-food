import React from "react";
import PcHeader from "./PcHeader.tsx";
import img1 from "@/assets/1.png";

import walk from "@/assets/walkIcon.png";
import cycle from "@/assets/cycleIcon.png";
import star from "@/assets/star.png";
// import greyStar from "@/assets/star_grey.png";

const PcContents = () => {
  const score = 3.2;

  return (
    <>
      <PcHeader />

      <div className="ml-16 mt-8 p-4 w-3/5 border-b">
        <div className="flex content-center">
          <img src={img1} alt="" className="w-80 h-36" />

          <div className="">
            <div className="flex items-center">
              <h3 className="m-4 font-bold text-3xl text-green-700">
                でんでん
              </h3>

              <p className="text-black mt-1 mr-1 font-bold text-lg">{score}</p>

              {(function () {
                const list = [];
                for (let i = 0; i < Math.floor(score); i++) {
                  list.push(<img src={star} alt="" />);
                }
                return <li className="w-6 flex">{list}</li>;
              })()}
            </div>

            <p className="text-black ml-8 p-0.5">ジャンル：ご飯</p>

            <div className="flex p-0.5">
              <p className="text-black ml-8">信大から：</p>

              <img src={walk} alt="" className="w-6 h-6 ml-2 mb-0" />
              <p className="text-black mb-0">15分</p>

              <img src={cycle} alt="" className="w-6 h-6 ml-3 mb-0" />
              <p className="text-black mb-0">5分</p>
            </div>

            <p className="text-black ml-8 p-0.5">営業時間：〜21:00</p>
          </div>
        </div>
      </div>

      {/* <div className="ml-32 mt-8 p-4 w-1/2 h-50 border-b bg-slate-300"></div> */}
    </>
  );
};

export default PcContents;

import React from "react";
import List from "@/components/List.tsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AboutUsPage from "@/components/AboutUsPage";

import img1 from "@/assets/1.png";
import walk from "@/assets/walkIcon.png";
import cycle from "@/assets/cycleIcon.png";
import star from "@/assets/star.png";
import greyStar from "@/assets/star_grey.png";

const PcContents = () => {
  const score = 4;

  const style = {
    width: 24,
    marginLeft: 0,
    // objecit: cover,
  };

  return (
    <>
      <div className="flex">
        <div className="w-2/3 pl-12">
          {List.map((rest) => (
            <a key={rest.id} className="w-full" href="/denden">
              <div className="mt-8 p-4 border-b flex content-center">
                <img src={img1} alt="" className="w-80 h-36" />

                <div>
                  <div className="flex items-center p-2 ">
                    <h3 className="ml-2 mr-4 font-bold text-2xl text-green-700">
                      {rest.Name}
                    </h3>

                    <p className="text-black mt-1 mr-1 font-bold text-lg">
                      {score}
                    </p>

                    {(function () {
                      const list = [];
                      for (let i = 0; i < Math.floor(score); i++) {
                        list.push(<img src={star} alt="" key={i} />);
                      }
                      return <li className="w-6 flex">{list}</li>;
                    })()}

                    {/* <img src={greyStar} alt="" className="w-6 m-0 p-0" /> */}
                    <img src={greyStar} alt="" style={style} />
                  </div>

                  <p className="text-black ml-8 p-0.5 text-left">
                    ジャンル：{rest.Genre}
                  </p>

                  <div className="flex p-0.5">
                    <p className="text-black ml-8">信大から：</p>

                    <img src={walk} alt="" className="w-6 h-6 ml-2 mb-0" />
                    <p className="text-black mb-0">{rest.Cycle * 3}分</p>

                    <img src={cycle} alt="" className="w-6 h-6 ml-3 mb-0" />
                    <p className="text-black mb-0">{rest.Cycle}分</p>
                  </div>

                  <p className="text-black ml-8 p-0.5 text-left">
                    営業時間：〜21:00
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-black bg-slate-00 w-1/3 h-lvh m-12">
          <p className="">sample</p>

          <ul className=" w-1/4 flex justify-center border">
            <li>
              <button>フィルタ</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PcContents;

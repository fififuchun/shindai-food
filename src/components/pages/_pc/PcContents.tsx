import React from "react";
import PcHeader from "./PcHeader.tsx";
import "./PcContents.css";
import img1 from "@/assets/1.png";

import walk from "@/assets/walkIcon.png";
import Cycle from "@/assets/cycleIcon.png";

const PcContents = () => {
  return (
    <>
      <PcHeader />

      {/* <button id="btn">
        <div className="flex">
          <figure className="image">
            <img src={img1} alt=""></img>
          </figure>

          <div className="right">
            <div className="title">
              <p>でんでん</p>
            </div>
            <p className="text">総合評価 : </p>
          </div>
        </div>
      </button> */}

      <button id="btn">
        <div className="flex">
          <figure className="image">
            <img src={img1} alt=""></img>
          </figure>

          <div className="right">
            <ul>
              <li className="title">
                <p>でんでん</p>
              </li>

              <li className="distance">
                <img src={walk} alt="" />
                <p>@1 </p>
              </li>

              <li className="score">
                <p>3</p>
              </li>
            </ul>
          </div>
        </div>
      </button>
    </>
  );
};

export default PcContents;

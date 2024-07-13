import React from "react";
import "./TopPage.css";
import img1 from "@/assets/1.png";

const TopPage = () => {
  return (
    <>
      <button className="btn" id="btn">
        <ul>
          {/* <img src={img1} alt="" /> */}
          {/* <h3>shop1</h3> */}
          {/* <span>shop1</span> */}
        </ul>
      </button>

      <button className="btn" id="btn">
        <div className="flex">
          <figure className="image">
            <img src={img1} alt=""></img>
          </figure>

          <div className="right">
            <div className="title">
              <p>でんでん</p>
              <p className="text">総合評価 : </p>
            </div>
          </div>
        </div>
      </button>

      <button className="btn" id="btn">
        店3
      </button>
    </>
  );
};

export default TopPage;

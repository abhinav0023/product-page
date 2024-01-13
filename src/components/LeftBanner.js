import React from "react";
import "./styling/Leftbanner.css";
function LeftBanner() {
  return (
    <>
      <div className="leftBanner__">
        <div className="leftBanner_Headline">
          <p className="headline__p">YOUR FEET DESERVE THE BEST</p>
        </div>
        <div className="leftBanner__para">
            <p className="banner__p">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
        </div>
        <div className="leftBanner__btn">
            <button className="btn_1">SHOP NOW</button>
            <button className="btn_2">CATERGORY</button>
        </div>
      </div>
    </>
  );
}

export default LeftBanner;

import React from "react";
import ReactDOM from "react-dom";
import ZMosaic from "./z-mosaic";
const neko = "https://avatars0.githubusercontent.com/u/18083507?s=460&v=4";

ReactDOM.render(
  <div style={{ width: 200, height: 200 }}>
    <ZMosaic src={neko} width={80} height={50} top={35} left={100} />
  </div>,
  document.getElementById("app")
);

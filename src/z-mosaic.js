import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  width: PropTypes.number.isRequired, // mosaic block's width
  height: PropTypes.number.isRequired, // mosaic block's height
  src: PropTypes.string.isRequired, // target image source
  left: PropTypes.number, // mosaic block's position to left
  top: PropTypes.number, // mosaic block's position to top
  className: PropTypes.string // custom style's classname
};
const defaultProps = {
  width: 0,
  height: 0,
  src: "",
  left: 0,
  top: 0,
  className: ""
};

class ZMosaic extends Component {
  componentDidMount() {
    this.onLoadImage();
  }
  componentWillUpdate(prevProps) {
    const { src } = this.props;
    if (!prevProps.src && src !== prevProps.src) {
      this.onLoadImage();
    }
  }
  onLoadImage = () => {
    const { src } = this.props;
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let imgObj = new Image();
    imgObj.src = `${src}?${new Date().getTime()}`; // fix cross origin error
    imgObj.crossOrigin = ""; // fix cross origin error
    imgObj.onload = () => {
      this.drawRect(canvas, ctx, imgObj);
    };
  };
  drawRect = (canvas, ctx, imgObj) => {
    const { left, top, width, height } = this.props;
    canvas.width = this.mosaic.clientWidth;
    canvas.height = this.mosaic.clientHeight;
    ctx.drawImage(
      imgObj,
      0,
      0,
      this.mosaic.clientWidth,
      this.mosaic.clientHeight
    );

    let imgData = ctx.getImageData(left, top, width, height);
    const w = imgData.width;
    const h = imgData.height;
    const num = 10;
    const stepW = w / num;
    const stepH = h / num;
    for (var i = 0; i < stepH; i++) {
      for (var j = 0; j < stepW; j++) {
        //get a block's color
        var color = this.getXY(
          imgData,
          j * num + Math.floor(Math.random() * num),
          i * num + Math.floor(Math.random() * num)
        );
        for (var k = 0; k < num; k++) {
          for (var l = 0; l < num; l++) {
            //set block's color
            this.setXY(imgData, j * num + l, i * num + k, color);
          }
        }
      }
    }
    ctx.putImageData(imgData, left, top);
  };
  getXY = (obj, x, y) => {
    var w = obj.width;
    var color = [];
    color[0] = obj.data[4 * (y * w + x)];
    color[1] = obj.data[4 * (y * w + x) + 1];
    color[2] = obj.data[4 * (y * w + x) + 2];
    color[3] = obj.data[4 * (y * w + x) + 3];
    return color;
  };

  setXY = (obj, x, y, color) => {
    var w = obj.width;
    obj.data[4 * (y * w + x)] = color[0];
    obj.data[4 * (y * w + x) + 1] = color[1];
    obj.data[4 * (y * w + x) + 2] = color[2];
    obj.data[4 * (y * w + x) + 3] = color[3];
  };
  render() {
    const { className } = this.props;
    return (
      <div
        className={className}
        style={{ width: "100%", height: "100%", position: "relative" }}
        ref={mosaic => (this.mosaic = mosaic)}
      >
        <canvas id="canvas" style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }
}
ZMosaic.propTypes = propTypes;
ZMosaic.defaultProps = defaultProps;
export default ZMosaic;

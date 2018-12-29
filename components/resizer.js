import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import colors from "../colors"

export default class Resizer extends React.PureComponent {
  static propTypes = {
    onMove: PropTypes.func,
  };

  onMouseDown = event => {
    event.preventDefault()
    console.log("onMouseDown")
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = event => {
    this.props.onMove(event.clientX, event.clientY)
  }

  onMouseUp = event => {
    console.log("onMouseUp")
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  onTouchStart = event => {
    console.log("onTouchStart")
    document.addEventListener("touchmove", this.onTouchMove);
    //document.addEventListener("mousemove", this.onMouseMove);
  }

  onTouchMove = event => {
    console.log("onTouchMove")
    const touch = event.touches[0]
    this.props.onMove(touch.clientX, touch.clientY)
  }

  onTouchEnd = event => {
    console.log("onTouchEnd")
    document.removeEventListener("touchmove", this.onTouchMove);
  }

  render() {
    return (
      <div
        className="resizer"
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        <style jsx>{`
          .resizer {
            background-color: ${colors[14]};
            order: 2;
          }

          @media (orientation: portrait) {
            width: 100%;
            height: 4px;
            border-top: 2px solid ${colors[5]};
            border-bottom: 2px solid ${colors[5]};
          }

          @media (orientation: landscape) {
            width: 4px;
            height: 100%;
            border-left: 2px solid ${colors[5]};
            border-right: 2px solid ${colors[5]};
          }

        `}</style>

      </div>
    )
  }
}


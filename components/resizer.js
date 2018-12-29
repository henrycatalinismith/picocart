import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import colors from "../colors"

export default class Resizer extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
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
    const { width, height } = this.props
    console.log(width, height)
    return (
      <div
        className="resizer"
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >

        {(width && height) && ((width > height) ? (
          <svg className="resizer__handlebar" viewBox="0 -0.5 32 1">
            <path d="M1,0 L31,0" />
          </svg>
        ) : (
          <svg className="resizer__handlebar" viewBox="-0.5 0 1 32">
            <path d="M0,1 L0,31" />
          </svg>
        ))}

        <style jsx>{`
          .resizer {
            background-color: ${colors[14]};
            order: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .resizer__handlebar {
            stroke: ${colors[7]};
            stroke-linecap: round;
          }

          @media (orientation: portrait) {
            .resizer {
              width: 100%;
              height: 16px;
            }
          }

          @media (orientation: portrait) {
            .resizer__handlebar {
              width: 128px;
              height: 16px;
            }
          }

          @media (orientation: landscape) {
            .resizer {
              width: 16px;
              height: 100%;
            }
          }

          @media (orientation: landscape) {
            .resizer__handlebar {
              width: 8px;
              height: 128px;
            }
          }

        `}</style>

      </div>
    )
  }
}


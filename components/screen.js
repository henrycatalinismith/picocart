import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

class Screen extends React.PureComponent {
  static propTypes = {
    bg: PropTypes.string,
    onMount: PropTypes.func,
    size: PropTypes.number,
  }

  static defaultProps = {
    bg: colors[0],
    onMount: () => {},
  }

  setElement = element => {
    this.element = element
  };

  componentDidMount() {
    this.props.onMount(this.element)
  }

  render() {
    const { bg, size } = this.props;
    return (
      <div className="screen">
        <canvas
          ref={this.setElement}
          className="screen__canvas"
          width={128}
          height={128}
        />
        <style jsx>{`
          .screen {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .screen__canvas:after {
            content: "";
            background-color: red;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
            padding-top: 100%;
          }

          .screen__canvas {
            position: relative;
            background-color: ${bg};
            image-rendering: pixelated;
            transition: width 0.2s linear, height 0.4s linear;

            ${size ? (`
              height: ${size}px;
              width: ${size}px;
            `) : (`
              height: 100%;
              width: 100%;
            `)}

          }
        `}</style>
      </div>
    )
  }
}

export default Screen

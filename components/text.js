import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Character from "./character"

export default class Text extends React.PureComponent {
  static propTypes = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    children: PropTypes.any,
    raw: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
  };

  static defaultProps = {
    fontSize: 16,
    color: colors[0],
    children: "",
    raw: false,
    x: 0,
    y: 0,
  };

  render() {
    const { children, fontSize, color, raw, x, y } = this.props

    const string = typeof children === "string" ? children : children.toString()

    const viewbox = [
      -0.5,
      -0,
      (string.length * 3) + (Math.max(0, string.length - 1)),
      4
    ].join(" ")

    const pixelSize = fontSize / 5

    const fontWidth = fontSize * 0.6
    const fontHeight = fontSize

    const svgWidth = (
      (fontWidth * string.length)
      + (pixelSize * Math.max(0, string.length - 1))
    )
    const svgHeight = fontHeight

    const letters = string.split("").map((letter, i) => {
      return (
        <Character
          key={`${i}${letter}`}
          x={x + (i * 4)}
          y={y}
          color={color}
        >{letter}</Character>
      )
    })

    if (raw) {
      return letters
    }

    return (
      <svg width={svgWidth} height={svgHeight} viewBox={viewbox}>
        {letters}
      </svg>
    );

  }
}


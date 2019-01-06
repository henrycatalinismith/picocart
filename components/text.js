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
    borderColor: PropTypes.string,
    borderMultiplier: PropTypes.number,
  };

  static defaultProps = {
    fontSize: 16,
    color: colors[0],
    children: "",
    raw: false,
    x: 0,
    y: 0,
    borderColor: undefined,
    borderMultiplier: 2,
  };

  render() {
    const { children, fontSize, color, raw, x, y, borderColor, borderMultiplier } = this.props

    const string = typeof children === "string" ? children : children.toString()

    let viewbox = [
      -0.5,
      -0,
      (string.length * 3) + (Math.max(0, string.length - 1)),
      4
    ]

    if (borderColor) {
      viewbox[0] *= borderMultiplier/4
      viewbox[1] *= borderMultiplier
      viewbox[2] += borderMultiplier
      viewbox[3] += borderMultiplier
    }

    viewbox = viewbox.join("\n")

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
          borderColor={borderColor}
          borderMultiplier={borderMultiplier}
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


import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

const letterPaths = letter => {
  const letters = {

    "0": [
      "M0,0 L2,0 L2,4 L0,4 L0,1",
    ],

    "1": [
      "M0,0 L1,0 L1,3",
      "M0,4 L2,4",
    ],

    "2": [
      "M0,0 L2,0 L2,2 L0,2 L0,4 L2,4",
    ],

    "3": [
      "M0,0 L2,0 L2,4 L0,4",
      "M1,2 L1,2",
    ],

    "4": [
      "M0,0 L0,2 L1,2",
      "M2,0 L2,4",
    ],

    "5": [
      "M2,0 L0,0 L0,2 L2,2 L2,4 L0,4",
    ],

    "6": [
      "M0,0 L0,4 L2,4 L2,2 L1,2",
    ],

    "7": [
      "M0,0 L2,0 L2,4",
    ],

    "8": [
      "M0,0 L2,0 L2,4 L0,4 L0,1",
      "M1,2 L1,2",
    ],

    "9": [
      "M1,2 L0,2 L0,0 L2,0 L2,4",
    ],

    "!": [
      "M1,0 L1,2",
      "M1,4 L1,4",
    ],

    "@": [
      "M2,2 L2,1",
      "M1,0 L1,0",
      "M0,1 L0,3",
      "M1,4 L2,4",
    ],

    "\"": [
      "M0,0 L0,4",
      "M2,0 L2,4",
      "M1,1 L1,1",
      "M1,3 L1,3",
    ],

    "$": [
      "M3,0 L0,0 L0,1 L1,1 L1,2 L2,2 L2,3 L0,3",
      "M1,4 L1,4",
    ],

    "%": [
      "M0,0 L0,0",
      "M0,4 L0,3",
      "M2,0 L2,1",
      "M2,4 L2,4",
      "M1,2 L1,2",
    ],

    "&": [
      "M1,2 L1,0 L0,0 L0,4 L2,4 L2,3",
    ],

    "'": [
      "M1,0 L1,0",
      "M0,1 L0,1",
    ],

    "(": [
      "M1,0 L1,0",
      "M1,4 L1,4",
      "M0,1 L0,3",
    ],

    ")": [
      "M1,0 L1,0",
      "M1,4 L1,4",
      "M2,1 L2,3",
    ],

    "*": [
      "M1,1 L1,3",
      "M0,2 L2,2",
      "M0,0 L0,0",
      "M2,0 L2,0",
      "M0,4 L0,4",
      "M2,4 L2,4",
    ],

    "+": [
      "M1,1 L1,3",
      "M0,2 L2,2",
    ],

    "#": [
      "M0,0 L0,1",
      "M2,0 L2,1",
    ],

    "-": [
      "M0,2 L2,2",
    ],

    ",": [
      "M1,3 L1,3",
      "M0,4 L0,4",
    ],

    ".": [
      "M1,4 L1,4",
    ],

    "/": [
      "M0,4 L0,4",
      "M2,0 L2,0",
      "M1,1 L1,3",
    ],

    ":": [
      "M1,1 L1,1",
      "M1,3 L1,3",
    ],

    ";": [
      "M1,1 L1,1",
      "M1,3 L1,3",
      "M0,4 L0,4",
    ],

    "<": [
      "M2,0 L2,0",
      "M2,4 L2,4",
      "M1,1 L1,1",
      "M1,3 L1,3",
      "M0,2 L0,2",
    ],

    ">": [
      "M0,0 L0,0",
      "M0,4 L0,4",
      "M1,1 L1,1",
      "M1,3 L1,3",
      "M2,2 L2,2",
    ],

    "?": [
      "M0,0 L2,0 L2,2 L1,2",
      "M1,4 L1,4",
    ],

    "^": [
      "M0,1 L0,1",
      "M1,0 L1,0",
      "M2,1 L2,1",
    ],

    "_": [
      "M0,4 L2,4",
    ],

    "{": [
      "M2,0 L1,0 L1,4 L2,4",
      "M0,2 L0,2",
    ],

    "}": [
      "M0,0 L1,0 L1,4 L0,4",
      "M2,2 L2,2",
    ],

    "|": [
      "M1,0 L1,4",
    ],

    "~": [
      "M0,3 L0,2 L2,2 L2,1",
    ],

    "`": [
      "M1,0 L1,0",
      "M2,1 L2,1",
    ],

    "[": [
      "M1,0 L0,0 L0,4 L1,4",
    ],

    "]": [
      "M1,0 L2,0 L2,4 L1,4",
    ],

    "\\": [
      "M2,4 L2,4",
      "M0,0 L0,0",
      "M1,1 L1,3",
    ],

    "A": [
      "M0,4 L0,0 L2,0 L2,4",
      "M0,2 L2,2",
    ],

    "B": [
      "M2,1 L2,0 L0,0 L0,4 L2,4 L2,3",
      "M1,2 L1,2",
    ],

    "C": [
      "M1,0 L2,0",
      "M1,4 L2,4",
      "M0,1 L0,3",
    ],

    "D": [
      "M1,0 L0,0 L0,4 L1,4",
      "M2,1 L2,3",
    ],

    "E": [
      "M2,0 L0,0 L0,4 L2,4",
      "M0,2 L1,2",
    ],

    "F": [
      "M2,0 L0,0 L0,4",
      "M0,2 L1,2",
    ],

    "G": [
      "M1,0 L2,0",
      "M0,1 L0,4 L2,4 L2,3",
    ],

    "H": [
      "M0,0 L0,4",
      "M2,0 L2,4",
      "M1,2 L1,2",
    ],

    "I": [
      "M0,0 L2,0",
      "M0,4 L2,4",
      "M1,1 L1,3",
    ],

    "J": [
      "M0,0 L2,0",
      "M0,4 L1,4 L1,1",
    ],

    "K": [
      "M0,0 L0,4",
      "M1,2 L1,2",
      "M2,0 L2,1",
      "M2,3 L2,4",
    ],

    "L": [
      "M0,0 L0,4 L2,4",
    ],

    "M": [
      "M0,4 L0,0 L2,0 L2,4",
      "M1,1 L1,1",
    ],

    "N": [
      "M0,4 L0,0 L1,0",
      "M2,1 L2,4",
    ],

    "O": [
      "M0,1 L0,4 L1,4",
      "M1,0 L2,0 L2,3",
    ],

    "P": [
      "M0,4 L0,0 L2,0 L2,2 L1,2",
    ],

    "Q": [
      "M0,1 L0,3 L1,3 L1,4 L2,4",
      "M1,0 L1,0",
      "M2,1 L2,2",
    ],

    "R": [
      "M0,4 L0,0 L2,0 L2,1",
      "M1,2 L1,2",
      "M2,3 L2,4",
    ],

    "S": [
      "M1,0 L2,0",
      "M0,1 L0,2 L2,2 L2,3",
      "M0,4 L1,4",
    ],

    "T": [
      "M0,0 L2,0",
      "M1,1 L1,4",
    ],

    "U": [
      "M0,0 L0,3",
      "M1,4 L2,4 L2,0",
    ],

    "V": [
      "M0,0 L0,3 L2,3 L2,0",
      "M1,4 L1,4",
    ],

    "W": [
      "M0,0 L0,4 L2,4 L2,0",
      "M1,3 L1,3",
    ],

    "X": [
      "M0,0 L0,1",
      "M2,0 L2,1",
      "M1,2 L1,2",
      "M0,3 L0,4",
      "M2,3 L2,4",
    ],

    "Y": [
      "M2,0 L2,4 L0,4",
      "M0,0 L0,2 L1,2",
    ],

    "Z": [
      "M0,0 L2,0 L2,1",
      "M1,2 L1,2",
      "M2,4 L0,4 L0,3",
    ],

    "a": [
      "M0,4 L0,1 L2,1 L2,4",
      "M0,3 L2,3",
    ],

    "b": [
      "M0,1 L1,1 L1,2 L0,2 L0,4 L2,4 L2,3",
    ],

    "c": [
      "M2,1 L0,1 L0,4 L2,4",
    ],

    "d": [
      "M1,1 L0,1 L0,4 L1,4",
      "M2,2 L2,3",
    ],

    "e": [
      "M2,1 L0,1 L0,4 L2,4",
      "M1,2 L1,2",
    ],

    "f": [
      "M2,1 L0,1 L0,4",
      "M1,2 L1,2",
    ],

    "g": [
      "M2,1 L0,1 L0,4 L2,4 L2,3",
    ],

    "h": [
      "M0,1 L0,4",
      "M2,1 L2,4",
      "M1,3 L1,3",
    ],

    "i": [
      "M0,1 L2,1",
      "M0,4 L2,4",
      "M1,2 L1,3",
    ],

    "j": [
      "M0,1 L2,1",
      "M0,4 L1,4 L1,2",
    ],

    "j": [
      "M0,1 L2,1",
      "M0,4 L1,4 L1,2",
    ],

    "k": [
      "M0,1 L0,4",
      "M1,2 L1,2",
      "M2,1 L2,1",
      "M2,3 L2,4",
    ],

    "l": [
      "M0,1 L0,4 L2,4",
    ],

    "m": [
      "M0,4 L0,1 L2,1 L2,4",
      "M1,2 L1,2",
    ],

    "n": [
      "M0,4 L0,1 L1,1",
      "M2,2 L2,4",
    ],

    "o": [
      "M0,2 L0,4 L1,4",
      "M1,1 L2,1 L2,3",
    ],

    "p": [
      "M0,4 L0,1 L2,1 L2,3 L1,3",
    ],

    "q": [
      "M0,2 L0,3 L1,3 L1,4 L2,4",
      "M1,1 L1,1",
      "M2,2 L2,2",
    ],

    "r": [
      "M0,4 L0,1 L2,1 L2,2",
      "M1,3 L1,3",
      "M2,4 L2,4",
    ],

    "s": [
      "M1,1 L2,1",
      "M0,4 L1,4",
      "M0,2 L0,2",
      "M2,3 L2,3",
    ],

    "t": [
      "M0,1 L2,1",
      "M1,2 L1,4",
    ],

    "u": [
      "M0,1 L0,3",
      "M1,4 L2,4 L2,1",
    ],

    "v": [
      "M0,1 L0,3 L2,3 L2,1",
      "M1,4 L1,4",
    ],

    "w": [
      "M0,1 L0,4 L2,4 L2,1",
      "M1,3 L1,3",
    ],

    "x": [
      "M0,1 L0,1",
      "M2,1 L2,1",
      "M1,2 L1,2",
      "M0,3 L0,4",
      "M2,3 L2,4",
    ],

    "y": [
      "M2,1 L2,4 L0,4",
      "M0,1 L0,2 L1,2",
    ],

    "z": [
      "M0,1 L2,1 L2,2",
      "M2,4 L0,4 L0,3",
    ],

  }

  if (letters[letter]) {
    return letters[letter]
  } else {
    return []
  }
}

export default class Text extends React.PureComponent {
  static propTypes = {
    fontSize: PropTypes.number,
    stroke: PropTypes.string,
    children: PropTypes.any,
    raw: PropTypes.bool,
  };

  static defaultProps = {
    fontSize: 16,
    stroke: colors[0],
    children: "",
    raw: false,
  };

  render() {
    const { children, fontSize, stroke, raw } = this.props

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
      const paths = letterPaths(letter)
      const translate = `translate(${i * 4}, 0)`
      return (
        <g
          key={`${letter}${i}`}
          fill="none"
          stroke={stroke}
          strokeLinecap="square"
          transform={translate}
        >
          {paths.map((path, j) => (
            <path
              key={`${letter}${i}:${j}`}
              d={path}
            />
          ))}
        </g>
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


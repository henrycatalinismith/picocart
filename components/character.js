import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

export default class Character extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  };

  static defaultProps = {
    children: "",
    color: colors[0],
    x: 0,
    y: 0,
  };

  render() {
    const { children, color, x, y } = this.props

    const char = typeof children === "string" ? children : children.toString()

    const g = (...paths) => {
      return (
        <g
          fill="none"
          stroke={color}
          strokeLinecap="square"
        >{paths}</g>
      )
    }

    const path = (...points) => {
      return (
        <path
          d={`M${points.map(p => [
            p[0] + x,
            p[1] + y,
          ]).join(" L")}`}
        />
      )
    }

    switch (char) {
      case "0": return g(
        path([0,0], [2,0], [2,4], [0,4], [0,1])
      )

      case "1": return g(
        path([0,0], [1,0], [1,3]),
        path([0,4], [2,4])
      )

      case "2": return g(
        path([0,0], [2,0], [2,2], [0,2], [0,4], [2,4])
      )

      case "3": return g(
        path([0,0], [2,0], [2,4], [0,4]),
        path([1,2], [1,2])
      )

      case "4": return g(
        path([0,0], [0,2], [1,2]),
        path([2,0], [2,4])
      )

      case "5": return g(
        path([2,0], [0,0], [0,2], [2,2], [2,4], [0,4])
      )

      case "6": return g(
        path([0,0], [0,4], [2,4], [2,2], [1,2])
      )

      case "7": return g(
        path([0,0], [2,0], [2,4])
      )

      case "8": return g(
        path([0,0], [2,0], [2,4], [0,4], [0,1]),
        path([1,2], [1,2])
      )

      case "9": return g(
        path([1,2], [0,2], [0,0], [2,0], [2,4])
      )

      case "!": return g(
        path([1,0], [1,2]),
        path([1,4], [1,4])
      )

      case "@": return g(
        path([2,2], [2,1]),
        path([1,0], [1,0]),
        path([0,1], [0,3]),
        path([1,4], [2,4])
      )

      case "\"": return g(
        path([0,0], [0,4]),
        path([2,0], [2,4]),
        path([1,1], [1,1]),
        path([1,3], [1,3])
      )

      case "$": return g(
        path([3,0], [0,0], [0,1], [1,1], [1,2], [2,2], [2,3], [0,3]),
        path([1,4], [1,4])
      )

      case "%": return g(
        path([0,0], [0,0]),
        path([0,4], [0,3]),
        path([2,0], [2,1]),
        path([2,4], [2,4]),
        path([1,2], [1,2])
      )

      case "&": return g(
        path([1,2], [1,0], [0,0], [0,4], [2,4], [2,3]),
      )

      case "'": return g(
        path([1,0], [1,0]),
        path([0,1], [0,1])
      )

      case "(": return g(
        path([1,0], [1,0]),
        path([1,4], [1,4]),
        path([0,1], [0,3])
      )

      case ")": return g(
        path([1,0], [1,0]),
        path([1,4], [1,4]),
        path([2,1], [2,3])
      )

      case "*": return g(
        path([1,1], [1,3]),
        path([0,2], [2,2]),
        path([0,0], [0,0]),
        path([2,0], [2,0]),
        path([0,4], [0,4]),
        path([2,4], [2,4])
      )

      case "+": return g(
        path([1,1], [1,3]),
        path([0,2], [2,2])
      )

      case "#": return g(
        path([0,0], [0,1]),
        path([2,0], [2,1])
      )

      case "-": return g(
        path([0,2], [2,2])
      )

      case ",": return g(
        path([1,3], [1,3]),
        path([0,4], [0,4])
      )

      case ".": return g(
        path([1,4], [1,4])
      )

      case "/": return g(
        path([0,4], [0,4]),
        path([2,0], [2,0]),
        path([1,1], [1,3])
      )

      case ":": return g(
        path([1,1], [1,1]),
        path([1,3], [1,3])
      )

      case ";": return g(
        path([1,1], [1,1]),
        path([1,3], [1,3]),
        path([0,4], [0,4])
      )

      case "<": return g(
        path([2,0], [2,0]),
        path([2,4], [2,4]),
        path([1,1], [1,1]),
        path([1,3], [1,3]),
        path([0,2], [0,2])
      )

      case ">": return g(
        path([0,0], [0,0]),
        path([0,4], [0,4]),
        path([1,1], [1,1]),
        path([1,3], [1,3]),
        path([2,2], [2,2])
      )

      case "?": return g(
        path([0,0], [2,0], [2,2], [1,2]),
        path([1,4], [1,4])
      )

      case "^": return g(
        path([0,1], [0,1]),
        path([1,0], [1,0]),
        path([2,1], [2,1])
      )

      case "_": return g(
        path([0,4], [2,4])
      )

      case "{": return g(
        path([2,0], [1,0], [1,4], [2,4]),
        path([0,2], [0,2])
      )

      case "}": return g(
        path([0,0], [1,0], [1,4], [0,4]),
        path([2,2], [2,2])
      )

      case "|": return g(
        path([1,0], [1,4])
      )

      case "~": return g(
        path([0,3], [0,2], [2,2], [2,1])
      )

      case "`": return g(
        path([1,0], [1,0]),
        path([2,1], [2,1])
      )

      case "[": return g(
        path([1,0], [0,0], [0,4], [1,4])
      )

      case "]": return g(
        path([1,0], [2,0], [2,4], [1,4])
      )

      case "\\": return g(
        path([2,4], [2,4]),
        path([0,0], [0,0]),
        path([1,1], [1,3])
      )

      case "A": return g(
        path([0,4], [0,0], [2,0], [2,4]),
        path([0,2], [2,2])
      )

      case "B": return g(
        path([2,1], [2,0], [0,0], [0,4], [2,4], [2,3]),
        path([1,2], [1,2])
      )

      case "C": return g(
        path([1,0], [2,0]),
        path([1,4], [2,4]),
        path([0,1], [0,3])
      )

      case "D": return g(
        path([1,0], [0,0], [0,4], [1,4]),
        path([2,1], [2,3])
      )

      case "E": return g(
        path([2,0], [0,0], [0,4], [2,4]),
        path([0,2], [1,2])
      )

      case "F": return g(
        path([2,0], [0,0], [0,4]),
        path([0,2], [1,2])
      )

      case "G": return g(
        path([1,0], [2,0]),
        path([0,1], [0,4], [2,4], [2,3])
      )

      case "H": return g(
        path([0,0], [0,4]),
        path([2,0], [2,4]),
        path([1,2], [1,2])
      )

      case "I": return g(
        path([0,0], [2,0]),
        path([0,4], [2,4]),
        path([1,1], [1,3])
      )

      case "J": return g(
        path([0,0], [2,0]),
        path([0,4], [1,4], [1,1])
      )

      case "K": return g(
        path([0,0], [0,4]),
        path([1,2], [1,2]),
        path([2,0], [2,1]),
        path([2,3], [2,4])
      )

      case "L": return g(
        path([0,0], [0,4], [2,4])
      )

      case "M": return g(
        path([0,4], [0,0], [2,0], [2,4]),
        path([1,1], [1,1])
      )

      case "N": return g(
        path([0,4], [0,0], [1,0]),
        path([2,1], [2,4])
      )

      case "O": return g(
        path([0,1], [0,4], [1,4]),
        path([1,0], [2,0], [2,3])
      )

      case "P": return g(
        path([0,4], [0,0], [2,0], [2,2], [1,2])
      )

      case "Q": return g(
        path([0,1], [0,3], [1,3], [1,4], [2,4]),
        path([1,0], [1,0]),
        path([2,1], [2,2])
      )

      case "R": return g(
        path([0,4], [0,0], [2,0], [2,1]),
        path([1,2], [1,2]),
        path([2,3], [2,4])
      )

      case "S": return g(
        path([1,0], [2,0]),
        path([0,1], [0,2], [2,2], [2,3]),
        path([0,4], [1,4])
      )

      case "T": return g(
        path([0,0], [2,0]),
        path([1,1], [1,4])
      )

      case "U": return g(
        path([0,0], [0,3]),
        path([1,4], [2,4], [2,0])
      )

      case "V": return g(
        path([0,0], [0,3], [2,3], [2,0]),
        path([1,4], [1,4])
      )

      case "W": return g(
        path([0,0], [0,4], [2,4], [2,0]),
        path([1,3], [1,3])
      )

      case "X": return g(
        path([0,0], [0,1]),
        path([2,0], [2,1]),
        path([1,2], [1,2]),
        path([0,3], [0,4]),
        path([2,3], [2,4])
      )

      case "Y": return g(
        path([2,0], [2,4], [0,4]),
        path([0,0], [0,2], [1,2])
      )

      case "Z": return g(
        path([0,0], [2,0], [2,1]),
        path([1,2], [1,2]),
        path([2,4], [0,4], [0,3])
      )

      case "a": return g(
        path([0,4], [0,1], [2,1], [2,4]),
        path([0,3], [2,3])
      )

      case "b": return g(
        path([0,1], [1,1], [1,2], [0,2], [0,4], [2,4], [2,3])
      )

      case "c": return g(
        path([2,1], [0,1], [0,4], [2,4])
      )

      case "d": return g(
        path([1,1], [0,1], [0,4], [1,4]),
        path([2,2], [2,3])
      )

      case "e": return g(
        path([2,1], [0,1], [0,4], [2,4]),
        path([1,2], [1,2])
      )

      case "f": return g(
        path([2,1], [0,1], [0,4]),
        path([1,2], [1,2])
      )

      case "g": return g(
        path([2,1], [0,1], [0,4], [2,4], [2,3])
      )

      case "h": return g(
        path([0,1], [0,4]),
        path([2,1], [2,4]),
        path([1,3], [1,3])
      )

      case "i": return g(
        path([0,1], [2,1]),
        path([0,4], [2,4]),
        path([1,2], [1,3])
      )

      case "j": return g(
        path([0,1], [2,1]),
        path([0,4], [1,4], [1,2])
      )

      case "j": return g(
        path([0,1], [2,1]),
        path([0,4], [1,4], [1,2])
      )

      case "k": return g(
        path([0,1], [0,4]),
        path([1,2], [1,2]),
        path([2,1], [2,1]),
        path([2,3], [2,4])
      )

      case "l": return g(
        path([0,1], [0,4], [2,4])
      )

      case "m": return g(
        path([0,4], [0,1], [2,1], [2,4]),
        path([1,2], [1,2])
      )

      case "n": return g(
        path([0,4], [0,1], [1,1]),
        path([2,2], [2,4])
      )

      case "o": return g(
        path([0,2], [0,4], [1,4]),
        path([1,1], [2,1], [2,3])
      )

      case "p": return g(
        path([0,4], [0,1], [2,1], [2,3], [1,3])
      )

      case "q": return g(
        path([0,2], [0,3], [1,3], [1,4], [2,4]),
        path([1,1], [1,1]),
        path([2,2], [2,2])
      )

      case "r": return g(
        path([0,4], [0,1], [2,1], [2,2]),
        path([1,3], [1,3]),
        path([2,4], [2,4])
      )

      case "s": return g(
        path([1,1], [2,1]),
        path([0,4], [1,4]),
        path([0,2], [0,2]),
        path([2,3], [2,3])
      )

      case "t": return g(
        path([0,1], [2,1]),
        path([1,2], [1,4])
      )

      case "u": return g(
        path([0,1], [0,3]),
        path([1,4], [2,4], [2,1])
      )

      case "v": return g(
        path([0,1], [0,3], [2,3], [2,1]),
        path([1,4], [1,4])
      )

      case "w": return g(
        path([0,1], [0,4], [2,4], [2,1]),
        path([1,3], [1,3])
      )

      case "x": return g(
        path([0,1], [0,1]),
        path([2,1], [2,1]),
        path([1,2], [1,2]),
        path([0,3], [0,4]),
        path([2,3], [2,4])
      )

      case "y": return g(
        path([2,1], [2,4], [0,4]),
        path([0,1], [0,2], [1,2])
      )

      case "z": return g(
        path([0,1], [2,1], [2,2]),
        path([2,4], [0,4], [0,3])
      )

      default: return g()
    }
  }
}


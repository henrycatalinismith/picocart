import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Character from "./character"

class Button extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
    bg: PropTypes.string,
    shadow: PropTypes.string,
  }

  static defaultProps = {
    onClick: () => {},
    children: "",
    bg: colors[8],
    shadow: colors[6],
  }

  onClick = event => {
    this.props.onClick()
    this.setState({ pushed: true })
    this.timeout = setTimeout(() => this.setState({ pushed: false }), 100)
  }

  onMouseDown = event => {
    event.preventDefault()
    this.setState({ pushed: true })
    document.addEventListener("mouseup", this.onMouseUp)
  }

  onMouseUp = event => {
    event.preventDefault()
    this.setState({ pushed: false })
    document.removeEventListener("mouseup", this.onMouseUp)
  }

  onTouchStart = event => {
    this.setState({ pushed: true })
    document.addEventListener("touchmove", this.onTouchMove);
  }

  onTouchEnd = event => {
    document.removeEventListener("touchmove", this.onTouchMove);
  }

  constructor(props) {
    super(props)
    this.state = {
      pushed: false,
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    document.removeEventListener("mouseup", this.onMouseUp)
    document.removeEventListener("touchmove", this.onTouchMove);
  }

  render() {
    const { children, bg, shadow } = this.props
    const { pushed } = this.state

    const label = typeof children === "string" ? children : children.toString()

    const n = label.length

    const offset = {
      x: 6,
      y: 4,
    }

    switch (n) {
      case 1:
        offset.x = 15
        break

      case 2:
        offset.x = 13
        break

      case 3:
        offset.x = 11
        break

      case 4:
        offset.x = 9
        break

      case 5:
        offset.x = 7
        break

      case 6:
        offset.x = 5
        break

      case 7:
        offset.x = 3.5
        break
    }

    const sw = 4

    const viewBox = [
      0,
      0,
      32.5,
      13,
    ].join(" ")

    const yo = pushed ? 1 : 0

    const border = ([x1,y1], [x2,y2]) => (
      <path
        d={`M${x1},${y1 + yo} L${x2},${y2 + yo}`}
        stroke={colors[0]}
        strokeWidth={1.9}
      />
    )
    const letters = label.split("").map((letter, i) => {
      const x = offset.x + (i * 4)
      const y = 4 + yo
      return [

        <Character
          key={`${i}${letter}bg`}
          x={x}
          y={y}
          color={colors[0]}
          scale={1}
          strokeMultiplier={3.3}
        >{letter}</Character>,

        <Character
          key={`${i}${letter}fg`}
          x={x}
          y={y}
          color={colors[7]}
          scale={1}
        >{letter}</Character>,

      ]
    })


    return (
      <button
        aria-label={label}
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
      >
        <svg viewBox={viewBox} focusable="false">

          <g className="border">
            {border([1, 1], [31.5, 1])}
            {border([1, 12], [31.5, 12])}
            {border([0, 1], [0, 11])}
            {border([32.5, 1], [32.5, 11])}
          </g>

          <rect fill={bg} x={1} y={1 + yo} width={30.5} height={10} />

          <g className="label">
            {letters}
          </g>

          {!pushed && (
            <g className="shadow">
              <path d="M0,11 L0,12" stroke={shadow} strokeWidth={2} />
              <path d="M32.5,11 L32.5,12" stroke={shadow} strokeWidth={2} />
              <path d="M1,13 L31.5,13" stroke={shadow} strokeWidth={2} />
            </g>
          )}

        </svg>
        <style jsx>{`
          button {
            background: none;
            border: 0;
            margin: 0;
            padding: 0;
            height: 32px;
            width: 80px;
            cursor: pointer;
          }

          button:focus {
            outline: none;
          }
        `}</style>
      </button>
    )
  }
}

export default Button


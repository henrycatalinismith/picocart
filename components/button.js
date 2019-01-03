import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Character from "./character"

class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    bg: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static defaultProps = {
    children: "",
    bg: colors[8],
    width: 96,
    height: 32,
  }

  render() {
    const {
      children,
      bg,
      width,
      height
    } = this.props

    const label = typeof children === "string" ? children : children.toString()

    const letters = label.split("").map((letter, i) => {
      const x = 6 + (i * 4)
      const y = 4
      return [

        <Character
          key={`${i}${letter}bg`}
          x={x}
          y={y}
          color={colors[0]}
          scale={2.3}
          strokeMultiplier={3.3}
        >{letter}</Character>,

        <Character
          key={`${i}${letter}fg`}
          x={x}
          y={y}
          color={colors[7]}
          scale={2.3}
        >{letter}</Character>,

      ]
    })

    /*
            <!--
            <path d={`M3,${height-4} L${width-6},${height-4}`} stroke={colors[0]} strokeWidth={4}/>
            <path d={`M2,2 L2,${height-2}`} stroke={colors[0]} strokeWidth={4}/>
            <path d={`M${width-4},2 L${width-4},${height-2}`} stroke={colors[0]} strokeWidth={4}/>
            -->
    */

    const sw = 4

    return (
      <button>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}>
          <g strokeLinejoin="round">
            <path d={`M${sw},${sw/2} L${width-sw},${sw/2}`} stroke={colors[0]} strokeWidth={sw}/>
            <path d={`M${sw},${height-sw*1.5} L${width-sw},${height-sw*1.5}`} stroke={colors[0]} strokeWidth={sw}/>
            <path d={`M${sw/2},${sw} L${sw/2},${height-sw*2}`} stroke={colors[0]} strokeWidth={sw}/>
            <path d={`M${width-sw/2},${sw} L${width-sw/2},${height-sw*2}`} stroke={colors[0]} strokeWidth={sw}/>

            <path d={`M${sw},${height-sw/2} L${width-sw},${height-sw/2}`} stroke={colors[6]} strokeWidth={sw}/>
          </g>
          {letters}
        </svg>
        <style jsx>{`
          button {
            background: none;
            border: 0;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </button>
    )
  }
}

export default Button


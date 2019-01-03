import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

/*
        <Corner key={1} top left path="M2,6 L2,2 L6,2" />
        <Corner key={1} bottom left path="M2,2 L2,6 L6,6" />
        <Corner key={1} top right path="M2,2 L6,2 L6,6" />
        <Corner key={1} bottom right path="M2,6 L6,6 L6,2" />
const Corner = ({ path, key, top, left }) => (
  <svg
    key={key}
    className="corner"
    width={32}
    height={32}
    viewBox="0 0 8 8"
    style={{
      position: "absolute",
      [top?"top":"bottom"]: 0,
      [left?"left":"right"]: 0,
    }}
  >
    <path
      d={path}
      stroke={colors[9]}
      strokeWidth={0.3}
      fill="none"
    />
  </svg>
)
*/

const BorderHack = () => (
  <div style={{
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    border: `1px solid ${colors[9]}`,
    borderWidth: "0 0 1px 0",
    borderTop: `2px solid ${colors[9]}`,
    borderBottom: `1px solid rgba(171, 82, 54, 0.1);`,
    zIndex: 0,
  }}/>
)

class Toolbar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    bg: PropTypes.string,
  }

  static defaultProps = {
    children: undefined,
    width: undefined,
    height: 48,
    bg: colors[15],
  }

  render() {
    const {
      bg,
      children,
      width,
      height,
    } = this.props

    let ckey = 0

    return (
      <div className="toolbar">
        <BorderHack />
        {children}

        <style jsx>{`
          .toolbar {
            background-color: ${bg};
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 0px;
            position: relative;
            justify-content: space-evenly;
            height: ${height}px;
            width: calc(${width
              ? `${width}px`
              : "100%"
            } - 0px);
            z-index: 2;
          }
        `}</style>
      </div>
    )
  }
}

export default Toolbar

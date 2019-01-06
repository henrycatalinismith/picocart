import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

const shadow = {
  [colors[13]]: colors[2],
  [colors[15]]: colors[9],
}

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
            box-sizing: border-box;
            border-top: 2px solid ${shadow[bg]};
            border-left: 2px solid ${shadow[bg]};
          }
        `}</style>
      </div>
    )
  }
}

export default Toolbar

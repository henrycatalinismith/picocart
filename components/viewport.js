import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

export default class Viewport extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static defaultProps = {
    width: undefined,
    height: undefined,
  }

  render() {
    const {
      children,
      height,
      width,
    } = this.props

    return (
      <div className="viewport">
        {children}
        <style jsx>{`
          .viewport {
            width: ${width ? `${width}px` : "100vw"};
            height: ${height ? `${height}px` : "100vh"};
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}


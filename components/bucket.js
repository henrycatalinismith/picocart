import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

class Bucket extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    thickness: PropTypes.number,
  }

  static defaultProps = {
    width: undefined,
    height: undefined,
    thickness: 4,
  }

  render() {
    const {
      children,
      height,
      thickness,
      width,
    } = this.props

    return (
      <div className="bucket">
        {children}
        <style jsx>{`
          .bucket {
            border-color: ${colors[14]};
            border-style: solid;
            border-right-width: ${thickness}px;
            border-bottom-width: ${thickness}px;
            border-left-width: ${thickness}px;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}

export default Bucket

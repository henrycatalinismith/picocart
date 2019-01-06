import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

class Bucket extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    flexDirection: PropTypes.string,
    smallThickness: PropTypes.number,
  }

  static defaultProps = {
    children: undefined,
    flexDirection: "column",
    smallThickness: 4,
  }

  render() {
    const {
      children,
      flexDirection,
      smallThickness,
    } = this.props

    return (
      <div className="bucket">
        {children}
        <style jsx>{`
          .bucket {
            border-color: ${colors[14]};
            border-style: solid;
            border-right-width: ${smallThickness}px;
            border-bottom-width: ${smallThickness}px;
            border-left-width: ${smallThickness}px;
            border-top-width: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: ${flexDirection};
            flex: 32;
          }

          @media (min-width: 1000px) {
            .bucket {
              border-right-width: 16px;
              border-bottom-width: 16px;
              border-left-width: 16px;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default Bucket

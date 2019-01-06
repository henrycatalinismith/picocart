import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

export default class Content extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }

  static defaultProps = {
    children: undefined,
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <div className="content">
        {children}
        <style jsx>{`
          .content {
            display: flex;
            height: 100%;
            width: 100%;
            overflow: auto;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}


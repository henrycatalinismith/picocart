import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

class Screen extends React.PureComponent {
  static propTypes = {
    bg: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onMount: PropTypes.func,
  }

  static defaultProps = {
    bg: colors[0],
    onMount: () => {},
  }

  setElement = element => {
    this.element = element
  };

  componentDidMount() {
    this.props.onMount(this.element)
  }

  render() {
    const { bg, width, height } = this.props;
    return (
      <>
        <canvas
          ref={this.setElement}s
          className="screen"
          width={width}
          height={height}
        />
        <style jsx>{`
          .screen {
            background-color: ${bg};
          }
        `}</style>
      </>
    )
  }
}

export default Screen

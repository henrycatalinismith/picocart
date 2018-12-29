import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

class Screen extends React.PureComponent {
  static propTypes = {
    bg: PropTypes.string,
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
      <div className="screen">
        <canvas
          ref={this.setElement}
          className="screen__canvas"
          width={128}
          height={128}
        />
        <style jsx>{`
          .screen {
            height: 100%;
            width: 100%;
          }

          .screen__canvas {
            background-color: ${bg};
            height: 100%;
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default Screen

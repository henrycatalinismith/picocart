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
      <>
        <canvas
          ref={this.setElement}s
          className="screen"
          width={128}
          height={128}
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

import React from "react"
import PropTypes from "prop-types"
import ContentEditable from "react-contenteditable"
import colors from "../colors"

const FocusOutline = () => (
  <div className="input__focusOutline">
    <style jsx>{`
      .input__focusOutline {
        border: 2px solid ${colors[12]};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
      }
    `}</style>
  </div>
)

class Input extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    flex: PropTypes.number,
    focusOnMount: PropTypes.bool,
  }

  static defaultProps = {
    value: "",
    flex: undefined,
    focusOnMount: false,
  }

  onBlur = () => {
    this.setState({ focus: false })
  }

  onChange = event => {
    this.setState({ value: event.target.value })
  }

  onFocus = () => {
    this.setState({ focus: true })
  }

  constructor(props) {
    super(props)
    this.div = React.createRef();
    this.state = {
      value: props.value || "",
      focus: false,
    }
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.input.focus()
    }
  }

  render() {
    const { flex } = this.props
    const { focus, value } = this.state

    return (
      <div className="input" style={{ flex }}>

        {focus && <FocusOutline />}

        <input
          className="input__text"
          type="text"
          value={value}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          ref={input => { this.input = input }}
        />

        <style jsx>{`
          .input {
            box-sizing: border-box;
            height: 32px;
            border: 2.5px solid ${colors[0]};
            background-color: ${colors[7]};
            position: relative;
            display: flex;
          }

          .input__text {
            background-color: transparent;
            border: 0;
            font-family: PICO-8, Monaco, monospace;
            height: calc(100% - 10px);
            padding: 6px 4px 4px 4px;
            z-index: 2;
          }

          .input__text:focus {
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Input

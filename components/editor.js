import React from "react"
import PropTypes from "prop-types"
import ContentEditable from "react-contenteditable"
import colors from "../colors"

export class Editor extends React.PureComponent {
  static propTypes = {
    server: PropTypes.bool,
    orientation: PropTypes.string,
    height: PropTypes.number,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props)
    this.state = {
      code: "<p>-- code goes here ↓</p>",
    }
  }

  onChange = event => {
    const code = event.target.value
    this.setState({ code })
    this.props.onChange(code)
  }

  render() {
    const { server, orientation, height } = this.props

    return (
      <>
        <ContentEditable
          className="code"
          html={this.state.code}
          onChange={this.onChange}
        />
        <style jsx>{`
          .code {
            font-family: Monaco, Courier, monospace;
            font-size: 18px;
            font-weight: bold;
            background-color: ${colors[7]};
            overflow: scroll;
            height: 100%;

            ${height ? (`
              max-height: ${height}px;
            `) : (`
              max-height: 100%;
            `)}
          }

          .code:focus {
            outline: none;
          }

          .code p {
            margin: 0;
          }
        `}</style>
      </>
    )
  }
}

export default Editor

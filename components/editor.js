import React from "react"
import PropTypes from "prop-types"
import ContentEditable from "react-contenteditable"
import colors from "../colors"

export class Editor extends React.PureComponent {
  static propTypes = {
    server: PropTypes.bool,
    orientation: PropTypes.string,
  };

  constructor(props) {
    super(props)
    this.state = {
      code: "<p>-- code goes here ↓</p>",
    }
  }

  onChange = event => {
    console.log("onChange", event)
    this.setState({ code: event.target.value });
  }

  render() {
    const { server, orientation } = this.props

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
            background-color: white;
            overflow: scroll;
            max-height: 100%;
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

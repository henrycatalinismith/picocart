import React from "react"
import PropTypes from "prop-types"

let CodeMirror

export class Editor extends React.PureComponent {
  static propTypes = {
    server: PropTypes.bool,
  };

  constructor(props) {
    super(props)
    this.state = {
      code: "",
    }
  }

  componentDidMount() {
    // lol
    CodeMirror = require("react-codemirror2").Controlled
  }

  render() {
    const { server } = this.props

    if (server || !CodeMirror) {
      return <textarea></textarea>
    }

    const props = {
      options: {
        autofocus: false,
        cursorBlinkRate: 500,
        mode: "lua",
        indentUnit: 1,
        indentWithTabs: false,
      },
      value: this.state.code,
      onBeforeChange: (editor, data, value) => {
        this.setState({ code: value });
      },
    }

    return (
      <CodeMirror {...props} />
    )
  }
}

export default Editor

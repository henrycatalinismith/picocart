import React from "react"
import PropTypes from "prop-types"
import ContentEditable from "react-contenteditable"
import colors from "../colors"

export class Editor extends React.PureComponent {
  static propTypes = {
    server: PropTypes.bool,
  };

  constructor(props) {
    super(props)
    this.contentEditable = React.createRef();
    this.state = {
      code: "<p>hello</p>",
    }
  }

  onChange = event => {
    console.log("onChange", event)
    this.setState({ code: event.target.value });
  }

  render() {
    const { server } = this.props

    return (
      <div className="editor" onChange={this.onChange}>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.code}
          onChange={this.onChange}
        />
        <style jsx>{`
          .editor {
            margin: 18px;
            border: 4px solid ${colors[15]};
          }
        `}</style>
      </div>
    )
  }
}

export default Editor

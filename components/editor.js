import React from "react"
import PropTypes from "prop-types"
import ContentEditable from "react-contenteditable"
import colors from "../colors"

export class Editor extends React.PureComponent {
  static propTypes = {
    orientation: PropTypes.string,
    height: PropTypes.number,
    onChange: PropTypes.func,
    code: PropTypes.string,
  };

  constructor(props) {
    super(props)
    this.div = React.createRef();
    this.state = {
      code: undefined
    }
  }

  onBlur = event => {
    setTimeout(() => window.scrollTo(0, 0), 50)
  }

  onChange = event => {
    const html = event.target.value
    const ascii = event.nativeEvent.target.innerText
    this.setState({ code: html })
    this.props.onChange(ascii)
  }

  render() {
    const { orientation, height } = this.props

    const html = this.state.code
    const ascii = this.props.code
    const code = html || ascii.split("\n").join("<br>")

    return (
      <>
        <ContentEditable
          className="code"
          innerRef={this.div}
          html={code}
          onBlur={this.onBlur}
          onChange={this.onChange}
          autoCapitalize="none"
          autoCorrect="none"
          autoComplete="none"
          spellCheck={false}
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

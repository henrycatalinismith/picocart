import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Text from "./text"
import Button from "./button"
import Rotate from "./rotate"
import Wordmark from "./wordmark"
import Pulse from "./pulse"

const buttonText = os => {
  switch (os.name) {
    case "Android": return "Install"
    case "iOS": return "Install"
    default: return "Start"
  }
}

const buttonHref = os => {
  switch (os.name) {
    case "Android": return "/install"
    case "iOS": return "/install"
    default: return "/studio"
  }
}

export default class Landing extends React.PureComponent {
  static propTypes = {
    os: PropTypes.object,
  }

  static defaultProps = {
    os: {},
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { os } = this.props
    // const { } = this.state

    return (
      <div className="landing-page">

        <Wordmark width={256} height={128} />

        <div style={{
          transform: "translateX(92px) translateY(-10px)",
          opacity: 0.8,
        }}>
          <Pulse duration={500}>
            <Rotate angle={-10}>
              <Text
                fontSize={16}
                color={colors[10]}
                borderColor={colors[0]}
                borderMultiplier={1.5}
              >ALPHA!</Text>
            </Rotate>
          </Pulse>
        </div>

        <br />
        <br />

        <div>
          <Text
            fontSize={32}
            color={colors[8]}
            borderColor={colors[0]}
            borderMultiplier={2}
          >Universal</Text>
        </div>

        <div>
          <Text
            fontSize={32}
            color={colors[12]}
            borderColor={colors[0]}
            borderMultiplier={2}
          >Fantasy</Text>
        </div>

        <div>
          <Text
            fontSize={32}
            color={colors[11]}
            borderColor={colors[0]}
            borderMultiplier={2}
          >Console</Text>
        </div>

        <br />
        <br />

        <div style={{ transform: "scale(1.4)" }}>
          <Button bg={colors[14]} shadow={colors[13]} onClick={() => {
            window.location.href = buttonHref(os)
          }}>{buttonText(os)}</Button>
        </div>

        <style jsx>{`
          .landing-page {
            background-color: ${colors[1]};
            border-top: 2px solid ${colors[4]};
            border-left: 2px solid ${colors[4]};
            padding: 16px;
            height: 100%;
            width: 100%;
            overflow-y: auto;
            box-sizing: border-box;
            padding-top: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}


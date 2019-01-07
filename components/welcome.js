import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Text from "./text"
import Button from "./button"
import Rotate from "./rotate"
import Wordmark from "./wordmark"
import Pulse from "./pulse"

class Welcome extends React.PureComponent {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    // const { } = this.props
    // const { } = this.state
    //
    // re

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
            window.location.href = "/library"
          }}>Try It!</Button>
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

    /*
    return (
      <div className="welcome">

        <Text
          fontSize={32}
          color={colors[7]}
          borderColor={colors[5]}
        >HELLO!!
        </Text>

        <br />
        <Text
          fontSize={16}
          color={colors[7]}
          borderColor={colors[5]}
        >picocart isn't ready yet!
        </Text>

        <br />
        <Text
          fontSize={64}
          color={colors[14]}
          borderColor={colors[2]}
        >   lol
        </Text>

        <br />
        <br />
        <Text
          fontSize={32}
          color={colors[7]}
          borderColor={colors[0]}
        >PICO-8!
        </Text>

        <br />
        <Text
          fontSize={32}
          color={colors[7]}
          borderColor={colors[0]}
        >ON UR PHONE!
        </Text>

        <br />
        <Text
          fontSize={50}
          color={colors[14]}
          borderColor={colors[2]}
        > lol
        </Text>

        <br />
        <br />
        <br />
        <Button shadow={colors[13]} onClick={() => {
          window.location.href = "/library"
        }}>
          Launch
        </Button>

        <style jsx>{`
          .welcome {
            background-color: ${colors[1]};
            border-top: 2px solid ${colors[4]};
            border-left: 2px solid ${colors[4]};
            padding: 16px;
            height: 100%;
            width: 100%;
            overflow-y: auto;
            box-sizing: border-box;
            padding-top: 16px;
          }

        `}</style>
      </div>
    )
  }
}
    */

export default Welcome

import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Text from "./text"
import Button from "./button"

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

export default Welcome

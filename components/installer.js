import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Text from "./text"
import Button from "./button"

const StepTitle = ({ children }) => (
  <div>
    <Text
      fontSize={24}
      color={colors[6]}
      borderColor={colors[0]}
      borderMultiplier={2}
    >{children}</Text>
  </div>
)

const StepText = ({ children }) => (
  <p className="installer__stepText">
    {children}
    <style jsx>{`
      .installer__stepText {
        font-family: PICO-8;
        color: ${colors[7]};
        max-width: 20rem;
        text-align: center;
        line-height: 2rem;
        font-size: 16px;
      }
    `}</style>
  </p>
)

const buttonText = os => {
  switch (os.name) {
    case "Android": return "Install"
    case "iOS": return "Install"
    default: return "Start"
  }
}

const buttonHref = os => {
  switch (os.name) {
    case "Android": return "/install/android"
    case "iOS": return "/install/ios"
    default: return "/library"
  }
}

export default class Installer extends React.PureComponent {
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
      <div className="installer">

        {os.name === "Android" && (
          <>
            <StepTitle>
              Hi Android Peeps
            </StepTitle>

            <StepText>
              Sorry the Android install doesn't work yet.
              There's so much else to do and I don't have
              an Android device to test it on yet.
            </StepText>
          </>
        )}

        {os.name === "iOS" && (

          <>

            <StepTitle>
              Step 1
            </StepTitle>
            <StepText>
              Tap the share button
            </StepText>

            <StepTitle>
              Step 2
            </StepTitle>
            <StepText>
              Tap "Add to Home Screen"
            </StepText>

            <StepTitle>
              Step 3
            </StepTitle>
            <StepText>
              Tap "Add"
            </StepText>

          </>

        )}

        <style jsx>{`
          .installer{
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


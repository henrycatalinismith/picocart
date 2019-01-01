import React from "react"
import PropTypes from "prop-types"

let keymaster
if (typeof window !== "undefined") {
  keymaster = require("keymaster")
}

export class Run extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  handleShortcut = () => {
    this.props.onClick()
    return false
  }

  componentDidMount () {
    keymaster('⌘+r', this.handleShortcut)
  }

  render() {
    const { onClick } = this.props

    return (
      <button onClick={onClick}>
        <svg viewBox="0 0 23 13">
          <rect id="Rectangle-1" fill="#FE0039"  x="1" y="1" width="21" height="9"></rect>
          <g id="Border" transform="translate(-1.000000, -1.000000)" strokeLinecap="square">
              <path d="M1.5,11.5 L23.5,11.5" id="Line" stroke="#C2C3C7"></path>
              <path d="M2.5,1.5 L22.5,1.5" id="Line" stroke="#000000"></path>
              <path d="M2.5,11.5 L22.5,11.5" id="Line" stroke="#000000"></path>
              <path d="M23.5,2.5 L23.5,10.5" id="Line" stroke="#000000"></path>
              <path d="M1.5,2.5 L1.5,10.5" id="Line" stroke="#000000"></path>
              <path d="M2.5,12.5 L22.5,12.5" id="Line" stroke="#C2C3C7"></path>
          </g>
          <g id="Shadow" transform="translate(2.000000, 1.000000)">
              <path d="M1.5,2.5 L1.5,7.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <path d="M5.5,1.5 L5.5,6.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <path d="M5.5,1.5 L2.5,1.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <path d="M2.5,1.5 L2.5,2.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <path d="M5.5,6.5 L3.5,6.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <path d="M3.5,7.5 L2.5,7.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <path d="M3.5,3.5 L3.5,4.5" id="Line" stroke="#000000" strokeLinecap="square"></path>
              <rect id="Rectangle-2" fill="#000000" x="11" y="1" width="7" height="7"></rect>
              <rect id="Rectangle-2" fill="#000000" x="5" y="5" width="6" height="3"></rect>
              <rect id="Rectangle-2" fill="#000000" x="6" y="1" width="2" height="4"></rect>
              <rect id="Rectangle-2" fill="#000000" x="9" y="2" width="2" height="3"></rect>
          </g>
          <g id="Y" transform="translate(15.000000, 3.000000)" stroke="#FFF1E7" strokeLinecap="square">
              <path d="M1.5,2.5 L1.5,0.5" id="Line"></path>
              <path d="M3.5,4.5 L3.5,0.5" id="Line"></path>
              <path d="M2.5,4.5 L1.5,4.5" id="Line"></path>
              <path d="M3.5,2.5 L2.5,2.5" id="Line"></path>
          </g>
          <g id="A" transform="translate(11.000000, 2.000000)" stroke="#FFF1E7" strokeLinecap="square">
              <path d="M1.5,5.5 L1.5,2.5" id="Line"></path>
              <path d="M3.5,5.5 L3.5,1.5" id="Line"></path>
              <path d="M3.5,1.5 L2.5,1.5" id="Line"></path>
              <path d="M3.5,4.5 L2.5,4.5" id="Line"></path>
          </g>
          <g id="L" transform="translate(7.000000, 3.000000)" stroke="#FFF1E7" strokeLinecap="square">
              <path d="M1.5,4.5 L1.5,0.5" id="Line"></path>
              <path d="M1.5,4.5 L3.5,4.5" id="Line"></path>
          </g>
          <g id="P" transform="translate(3.000000, 2.000000)" stroke="#FFF1E7" strokeLinecap="square">
              <path d="M1.5,5.5 L1.5,2.5" id="Line"></path>
              <path d="M3.5,4.5 L3.5,1.5" id="Line"></path>
              <path d="M2.5,1.5 L3.5,1.5" id="Line"></path>
              <path d="M2.5,4.5 L3.5,4.5" id="Line"></path>
          </g>
        </svg>

        <style jsx>{`
          button {
            height: 46px;
            background: none;
            border: 0;
          }

          button:focus {
            outline: none;
          }

          svg {
            height: 32px;
            margin: 8px 8px;
          }
        `}</style>
      </button>
    )
  }
}

export default Run

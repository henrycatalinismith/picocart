import React from "react"
import PropTypes from "prop-types"

let keymaster
if (typeof window !== "undefined") {
  keymaster = require("keymaster")
}

export class Run extends React.Component {
  handleShortcut = () => {
    alert("lol")
    return false
  }

  componentDidMount () {
    keymaster('⌘+r', this.handleShortcut)
  }

  render() {
    console.log(this.context)
    return (
      <div>
        <button>▶️</button>
        <style jsx>{`
          button {
            font-size:30px;
          }
        `}</style>
      </div>
    )
  }
}

export default Run

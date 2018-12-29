import React from "react"
import colors from "../colors"

export default class Resizer extends React.PureComponent {
  render() {
    return (
      <div className="resizer">
        <style jsx>{`
          .resizer {
            background-color: ${colors[14]};
            order: 2;
          }

          @media (orientation: portrait) {
            width: 100%;
            height: 4px;
            border-top: 2px solid ${colors[5]};
            border-bottom: 2px solid ${colors[5]};
          }

          @media (orientation: landscape) {
            width: 4px;
            height: 100%;
            border-left: 2px solid ${colors[5]};
            border-right: 2px solid ${colors[5]};
          }

        `}</style>

      </div>
    )
  }
}


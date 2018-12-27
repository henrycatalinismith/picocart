import Flop from "./flop"
import Wordmark from "./wordmark"
import colors from "../colors"

export default () => (
  <div className="header">
    <Flop />
    <Wordmark />

    <style jsx>{`
      .header {
        background-color: ${colors[14]};
        height: 32px;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
)


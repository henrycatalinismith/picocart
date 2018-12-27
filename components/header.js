import Flippy from "./flippy"
import Wordmark from "./wordmark"
import colors from "../colors"

export default ({ bg = colors[14], height = 32 }) => (
  <div className="header">
    <Flippy />
    <Wordmark />

    <style jsx>{`
      .header {
        background-color: ${bg};
        height: ${height}px;
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `}</style>
  </div>
)


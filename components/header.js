import Flippy from "./flippy"
import Wordmark from "./wordmark"
import colors from "../colors"

export default ({ bg = colors[14] }) => (
  <div className="header">
    <Flippy />
    <Wordmark />

    <style jsx>{`
      .header {
        background-color: ${bg};
        height: 32px;
        display: flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
      }

      @media (min-width: 1000px) {
        .header {
          height: 48px;
          justify-content: left;
          align-items: center;
          padding-left: 16px;
        }
      }
    `}</style>
  </div>
)


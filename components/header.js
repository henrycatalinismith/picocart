import Logo from "./logo"
import colors from "../colors"

export default () => (
  <div className="header">
    <Logo />

    <style jsx>{`
      .header {
        background-color: ${colors[14]};
        height: 32px;
      }
    `}</style>
  </div>
)


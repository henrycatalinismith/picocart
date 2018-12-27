import Floppy from "./floppy"
import Logo from "./logo"
import colors from "../colors"

export default () => (
  <div className="header">
    <Floppy />
    <Logo />

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


import { connect } from "react-redux"
import Document from "../components/document"
import Header from "../components/header"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Toolshed from "../components/toolshed"
import colors from "../colors"

class Cart extends React.Component {
  render() {
    return (
      <Document title="cart editor">
        <Header />
        <Stage height={256}>
          <Screen />
        </Stage>
        <Toolshed height={256} />
      </Document>
    )
  }
}


export default connect()(Cart)


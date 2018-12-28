import { connect } from "react-redux"
import Document from "../components/document"
import Header from "../components/header"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Toolbox from "../components/toolbox"
import actions from "../actions"
import colors from "../colors"

class Cart extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(actions.appMode())
    return {}
  }

  static mapStateToProps = state => ({
    stageHeight: state.layout.stageHeight,
    toolboxHeight: state.layout.toolboxHeight,
  })

  render() {
    const {
      stageHeight,
      toolboxHeight,
    } = this.props

    console.log(stageHeight, toolboxHeight)

    return (
      <Document title="cart editor">
        <Header />
        <Stage height={stageHeight}>
          <Screen />
        </Stage>
        <Toolbox height={toolboxHeight} />
      </Document>
    )
  }
}


export default connect(Cart.mapStateToProps)(Cart)


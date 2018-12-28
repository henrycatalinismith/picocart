import { connect } from "react-redux"
import Document from "../components/document"
import Header from "../components/header"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Toolshed from "../components/toolshed"
import actions from "../actions"
import colors from "../colors"

class Cart extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(actions.appMode())
    return {}
  }

  static mapStateToProps = state => ({
    stageHeight: state.layout.stageHeight,
    toolshedHeight: state.layout.toolshedHeight,
  })

  render() {
    const {
      stageHeight,
      toolshedHeight,
    } = this.props

    console.log(stageHeight, toolshedHeight)

    return (
      <Document title="cart editor">
        <Header />
        <Stage height={stageHeight}>
          <Screen />
        </Stage>
        <Toolshed height={toolshedHeight} />
      </Document>
    )
  }
}


export default connect(Cart.mapStateToProps)(Cart)


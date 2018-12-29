import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import Document from "../components/document"
import Header from "../components/header"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Resizer from "../components/resizer"
import Toolbox from "../components/toolbox"
import actions from "../actions"
import colors from "../colors"

const placeholder = canvas => {
  const ctx = canvas.getContext('2d');
  for (let x = 0; x < 128; x++ ) {
    for (let y = 0; y < 128; y++ ) {
      ctx.fillStyle = colors[((x + y) % colors.length)]
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

class Cart extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(actions.appMode())
    return {}
  }

  static mapStateToProps = state => ({
    headerHeight: state.layout.headerHeight,
    screenSize: state.layout.screenSize,
    resizerWidth: state.layout.resizerWidth,
    resizerHeight: state.layout.resizerHeight,
    stageWidth: state.layout.stageWidth,
    stageHeight: state.layout.stageHeight,
    toolboxWidth: state.layout.toolboxWidth,
    toolboxHeight: state.layout.toolboxHeight,
  })

  static mapDispatchToProps = (dispatch, props) => ({
    moveResizer: (x, y) => dispatch(actions.moveResizer(x, y)),
  });

  static propTypes = {
    headerHeight: PropTypes.number,
    screenSize: PropTypes.number,
    resizerWidth: PropTypes.number,
    resizerHeight: PropTypes.number,
    stageWidth: PropTypes.number,
    stageHeight: PropTypes.number,
    toolboxWidth: PropTypes.number,
    toolboxHeight: PropTypes.number,
    moveResizer: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener("touchmove", e => e.preventDefault())
  }

  render() {
    const {
      headerHeight,
      screenSize,
      resizerWidth,
      resizerHeight,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
      moveResizer,
    } = this.props

    return (
      <Document title="cart editor">
        <Header />

        <div className="cart-maker">
          <Stage width={stageWidth} height={stageHeight}>
            <Screen size={screenSize} onMount={placeholder} />
          </Stage>
          <Resizer
            onMove={_.debounce(moveResizer, 50)}
            width={resizerWidth}
            height={resizerHeight}
          />
          <Toolbox width={toolboxWidth} height={toolboxHeight} />
        </div>

        <style global jsx>{`
          body {
            height: 100vh;
            overflow: hidden;
            -webkit-overflow-scrolling: auto;
          }
        `}</style>

        <style jsx>{`
          .cart-maker {
            display: flex;
            height: calc(100vh - ${headerHeight}px);
          }

          @media (orientation: landscape) {
            flex-direction: row;
          }

          @media (orientation: portrait) {
            flex-direction: column;
          }
        `}</style>
      </Document>
    )
  }
}


export default connect(
  Cart.mapStateToProps,
  Cart.mapDispatchToProps
)(Cart)


import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import Document from "../components/document"
import Header from "../components/header"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Resizer from "../components/resizer"
import Toolbox from "../components/toolbox"
import Run from "../components/run"
import actions from "../actions"
import colors from "../colors"

const placeholder = canvas => {
  const ctx = canvas.getContext('2d');
  //let n = 0
  //setInterval(() => {
    for (let x = 0; x < 128; x++ ) {
      for (let y = 0; y < 128; y++ ) {
        ctx.fillStyle = colors[((x + y) % colors.length)]
        ctx.fillRect(x, y, 1, 1);
      }
      //n++
      //n++
      //n++
      //n++
      //n++
      //n++
      //n++
    }
    //n++
    //n = n % 10000
  //}, 10)
}

const ViewportHack = () => (
  <div>
  <style global jsx>{`
    @media (orientation: landscape) {
      .cart-maker { flex-direction: row !important; }
      .resizer {
        height: 100% !important;
        width: 16px !important;
      }
      .stage {
        order: 3 !important;
        flex: 4 !important;
      }
      .toolbox {
        order: 1 !important;
        flex: 4 !important;
      }
    }
  `}</style>
  </div>
)

class Cart extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(actions.appMode())
    return {}
  }

  static mapStateToProps = state => ({
    orientation: state.layout.orientation,
    headerHeight: state.layout.headerHeight,
    screenSize: state.layout.screenSize,
    resizerWidth: state.layout.resizerWidth,
    resizerHeight: state.layout.resizerHeight,
    stageWidth: state.layout.stageWidth,
    stageHeight: state.layout.stageHeight,
    toolboxWidth: state.layout.toolboxWidth,
    toolboxHeight: state.layout.toolboxHeight,
    viewportWidth: state.layout.viewportWidth,
    viewportHeight: state.layout.viewportHeight,
  })

  static mapDispatchToProps = (dispatch, props) => ({
    moveResizer: (x, y) => dispatch(actions.moveResizer(x, y)),
  });

  static propTypes = {
    orientation: PropTypes.string,
    headerHeight: PropTypes.number,
    screenSize: PropTypes.number,
    resizerWidth: PropTypes.number,
    resizerHeight: PropTypes.number,
    stageWidth: PropTypes.number,
    stageHeight: PropTypes.number,
    toolboxWidth: PropTypes.number,
    toolboxHeight: PropTypes.number,
    viewportWidth: PropTypes.number,
    viewportHeight: PropTypes.number,
    moveResizer: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener("touchmove", e => e.preventDefault())
  }

  render() {
    const {
      orientation,
      headerHeight,
      screenSize,
      resizerWidth,
      resizerHeight,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
      viewportWidth,
      viewportHeight,
      moveResizer,
    } = this.props

    return (
      <Document title="cart editor">
        <Header />

        <div className="cart-maker">
          <Stage
            width={stageWidth}
            height={stageHeight}
            orientation={orientation}
          >
            <Screen size={screenSize} onMount={placeholder} />
          </Stage>
          <Resizer
            onMove={_.throttle(moveResizer, 200)}
            width={resizerWidth}
            height={resizerHeight}
            orientation={orientation}
          />
          <Toolbox
            width={toolboxWidth}
            height={toolboxHeight}
            orientation={orientation}
          >
            <Run />
          </Toolbox>
        </div>

        <style global jsx>{`
          body {
            height: 100vh;
            overflow: hidden;
            -webkit-overflow-scrolling: auto;
          }
        `}</style>

        <ViewportHack />

        <style jsx>{`
          .cart-maker {
            display: flex;
            height: calc(100vh - ${headerHeight}px);

            ${(orientation == "portrait") ? (`
              flex-direction: column;
            `) : (`
              flex-direction: row;
            `)}
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


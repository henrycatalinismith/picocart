import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import Head from "next/head"
import Document from "../components/document"
import Header from "../components/header"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Resizer from "../components/resizer"
import Toolbox from "../components/toolbox"
import Run from "../components/run"
import Editor from "../components/editor"
import actions from "../actions"
import colors from "../colors"
import thunks from "../thunks"

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

const EditorWrapper = ({ children }) => (
  <div className="editor-wrapper">
    {children}
    <style jsx>{`
      .editor-wrapper {
        background-color: ${colors[7]};
        flex: 4;
      }
    `}</style>
  </div>
)

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
        flex: 2 !important;
        border-right-width: 0px !important;
      }
    }
  `}</style>
  </div>
)

class Cart extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  static mapStateToProps = state => ({
    orientation: state.layout.orientation,
    headerHeight: state.layout.headerHeight,
    editorHeight: state.layout.editorHeight,
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
    changeCode: code => dispatch(actions.changeCode(code)),
    moveResizer: (x, y) => dispatch(thunks.moveResizer(x, y)),
    startEmulator: () => dispatch(thunks.startEmulator()),
  });

  static propTypes = {
    orientation: PropTypes.string,
    headerHeight: PropTypes.number,
    editorHeight: PropTypes.number,
    screenSize: PropTypes.number,
    resizerWidth: PropTypes.number,
    resizerHeight: PropTypes.number,
    stageWidth: PropTypes.number,
    stageHeight: PropTypes.number,
    toolboxWidth: PropTypes.number,
    toolboxHeight: PropTypes.number,
    viewportWidth: PropTypes.number,
    viewportHeight: PropTypes.number,
    changeCode: PropTypes.func,
    moveResizer: PropTypes.func,
    startEmulator: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener("touchmove", e => e.preventDefault())
  }

  render() {
    const {
      orientation,
      headerHeight,
      editorHeight,
      screenSize,
      resizerWidth,
      resizerHeight,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
      viewportWidth,
      viewportHeight,
      changeCode,
      moveResizer,
      startEmulator,
    } = this.props

    const server = !viewportWidth && !viewportHeight

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
            <Run onClick={startEmulator} />
            <EditorWrapper>
              <Editor
                orientation={orientation}
                height={editorHeight}
                server={server}
                onChange={changeCode}
              />
            </EditorWrapper>
          </Toolbox>
        </div>

        <style global jsx>{`
          body {
            height: 100vh;
            overflow: hidden;
            -webkit-overflow-scrolling: auto;
          }
        `}</style>

       {(!viewportWidth && !viewportHeight) && <ViewportHack />}

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



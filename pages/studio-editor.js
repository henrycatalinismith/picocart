import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import Head from "next/head"
import Document from "../components/document"
import Stage from "../components/stage"
import Screen from "../components/screen"
import Resizer from "../components/resizer"
import Toolbox from "../components/toolbox"
import Toolbar from "../components/toolbar"
import Button from "../components/button"
import Editor from "../components/editor"
import actions from "../actions"
import colors from "../colors"
import thunks from "../thunks"

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
        flex: 4 !important;
        border-right-width: 0px !important;
      }
    }
  `}</style>
  </div>
)

class StudioEditor extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(actions.editCart(query.id))
    return { id: query.id }
  }

  static mapStateToProps = state => ({
    cart: state.carts[state.editor.cartId],
    editor: state.editor,
    layout: state.layout,
  })

  static mapDispatchToProps = (dispatch, props) => ({
    changeCode: code => dispatch(thunks.changeCode(code)),
    moveResizer: (x, y) => dispatch(thunks.moveResizer(x, y)),
    startEmulator: () => dispatch(thunks.startEmulator()),
    exitEditor: () => dispatch(thunks.exitEditor()),
  });

  static propTypes = {
    cart: PropTypes.object,
    editor: PropTypes.object,
    layout: PropTypes.object,
    changeCode: PropTypes.func,
    moveResizer: PropTypes.func,
    startEmulator: PropTypes.func,
    exitEditor: PropTypes.func,
  }

  render() {
    const {
      cart,
      editor,
      layout,
      changeCode,
      moveResizer,
      startEmulator,
      exitEditor,
    } = this.props

    const server = !layout.viewportWidth && !layout.viewportHeight

    return (
      <Document title="cart editor">

        <div className="cart-maker">
          <Stage
            width={layout.stageWidth}
            height={layout.stageHeight}
            orientation={layout.orientation}
          >
            <Screen size={layout.screenSize} />
          </Stage>
          <Resizer
            onMove={_.throttle(moveResizer, 200)}
            width={layout.resizerWidth}
            height={layout.resizerHeight}
            orientation={layout.orientation}
          />
          <Toolbox
            width={layout.toolboxWidth}
            height={layout.toolboxHeight}
            orientation={layout.orientation}
          >
            <Toolbar bg={colors[15]}>
              <Button bg={colors[8]} onClick={startEmulator}>
                PLAY
              </Button>
              <Button bg={colors[12]} onClick={exitEditor}>
                EXIT
              </Button>
            </Toolbar>
            <EditorWrapper>
              <Editor
                orientation={layout.orientation}
                height={layout.editorHeight}
                server={server}
                onChange={changeCode}
                code={cart && cart.lua}
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

       {(!layout.viewportWidth && !layout.viewportHeight) && <ViewportHack />}

        <style jsx>{`
          .cart-maker {
            display: flex;
            height: 100%;
            width: 100%;

            ${(layout.orientation == "portrait") ? (`
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
  StudioEditor.mapStateToProps,
  StudioEditor.mapDispatchToProps
)(StudioEditor)


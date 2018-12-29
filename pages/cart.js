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
  let time = 0;

  const draw = () => {
    time += 0.1;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < canvas.width;) {
      const height = (
        (canvas.height/2) + (
          Math.sin(
            ((i * 100000) + time)
          ) * 100
        )
      );
      ctx.lineTo(i, height);
      i++;
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  };

  draw()
  setInterval(draw, 100)
}

class Cart extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(actions.appMode())
    return {}
  }

  static mapStateToProps = state => ({
    headerHeight: state.layout.headerHeight,
    stageWidth: state.layout.stageWidth,
    stageHeight: state.layout.stageHeight,
    toolboxWidth: state.layout.toolboxWidth,
    toolboxHeight: state.layout.toolboxHeight,
  })

  render() {
    const {
      headerHeight,
      stageHeight,
      stageWidth,
      toolboxWidth,
      toolboxHeight,
    } = this.props

    return (
      <Document title="cart editor">
        <Header />

        <div className="cart-maker">
          <Stage width={stageWidth} height={stageHeight}>
            <Screen onMount={placeholder} />
          </Stage>
          <Resizer />
          <Toolbox width={toolboxWidth} height={toolboxHeight} />
        </div>

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


export default connect(Cart.mapStateToProps)(Cart)


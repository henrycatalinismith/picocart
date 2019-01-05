import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import Link from "next/link"
import Document from "../components/document"
import Bucket from "../components/bucket"
import Input from "../components/input"
import Grid from "../components/grid"
import Cart from "../components/cart"
import Toolbar from "../components/toolbar"
import Button from "../components/button"
import Header from "../components/header"
import actions from "../actions"
import colors from "../colors"

class Index extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  static mapStateToProps = state => ({
    carts: state.carts,
    layout: state.layout,
  })

  static mapDispatchToProps = (dispatch, props) => ({
  });

  static propTypes = {
    carts: PropTypes.object,
    layout: PropTypes.object,
  }

  onNewClick = () => {
    this.setState({ toolbarMode: "new cart" })
  }

  onOkClick = () => {
    this.setState({ toolbarMode: "default" })
  }

  constructor(props) {
    super(props)
    this.state = {
      toolbarMode: "default",
    }
  }

  render() {
    const { carts, layout } = this.props
    const { toolbarMode } = this.state

    return (
      <Document title="picocart">
        <Header />
        <Bucket
          width={layout.bucketWidth}
          height={layout.bucketHeight}
          thickness={layout.bucketThickness}
        >

         <Toolbar bg={colors[13]}>
           {({
             "default": (
               <Button bg={colors[12]} onClick={this.onNewClick}>
                 NEW
               </Button>
             ),
             "new cart": (
               <div className="name-picker" style={{ display: "flex", maxWidth: "320px" }}>
                 <Input value="name" flex={4} focusOnMount />
                 <div style={{ minWidth: "4px" }} />
                 <Button bg={colors[12]} onClick={this.onOkClick}>
                   OK
                 </Button>
               </div>
             )
           })[toolbarMode]}
         </Toolbar>

          <div className="library">
            <Grid n={4} w={96}>
              {_.keys(carts).map((e, i) => (
                <Cart
                  key={carts[e].id}
                  bg={colors[5]}
                  cart={carts[e]}
                  size={96}
                />
              ))}
            </Grid>
          </div>
        </Bucket>

        <style jsx>{`
          .library {
            height: calc(100vh - 32px - 8px - 8px);
            padding: 8px;
          }
        `}</style>

      </Document>
    )
  }
}

export default connect(
  Index.mapStateToProps,
  Index.mapDispatchToProps
)(Index)

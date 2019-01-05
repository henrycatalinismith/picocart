import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import Link from "next/link"
import uuid from "uuid"
import Document from "../components/document"
import Bucket from "../components/bucket"
import Input from "../components/input"
import Grid from "../components/grid"
import Cart from "../components/cart"
import Text from "../components/text"
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
    createCart: (id, name) => dispatch(actions.createCart({ id, name })),
    updateCart: (id, name) => dispatch(actions.updateCart({ id, name })),
    deleteCart: id => dispatch(actions.deleteCart(id)),
  });

  static propTypes = {
    carts: PropTypes.object,
    layout: PropTypes.object,
    createCart: PropTypes.func,
    updateCart: PropTypes.func,
    deleteCart: PropTypes.func,
  }

  onClickNew = () => {
    const id = uuid()
    const name = "untitled"
    this.setState({
      toolbarMode: "rename-cart",
      id,
      name,
    })
    this.props.createCart(id, name)
  }

  onChangeName = name => {
    this.props.updateCart(this.state.id, name)
  }

  onClickOkay = () => this.setState({
    toolbarMode: "default",
    id: undefined,
    name: undefined,
  })

  onCancelDelete = () => this.setState({
    toolbarMode: "default",
    id: undefined,
    name: undefined,
  })

  onCancelRename = () => this.setState({
    toolbarMode: "default",
  })

  onClickDelete = () => this.setState({
    toolbarMode: "delete-picker",
  })

  onClickRename = () => this.setState({
    toolbarMode: "rename-picker",
  })

  onConfirmDelete = () => {
    this.props.deleteCart(this.state.id)
    this.setState({
      toolbarMode: "default",
      id: undefined,
      name: undefined,
    })
  }

  onTargetDelete = cart => this.setState({
    toolbarMode: "delete-cart",
    id: cart.id,
    name: cart.name,
  })

  onTargetRename = cart => this.setState({
    toolbarMode: "rename-cart",
    id: cart.id,
    name: cart.name,
  })

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
               <>
                 <Button bg={colors[12]} onClick={this.onClickNew}>
                   NEW
                 </Button>
                 <Button bg={colors[11]} onClick={this.onClickRename}>
                   RENAME
                 </Button>
                 <Button bg={colors[8]} onClick={this.onClickDelete}>
                   DELETE
                 </Button>
               </>
             ),

             "rename-cart": (
               <div className="name-picker" style={{ display: "flex", maxWidth: "320px" }}>
                 <Input
                   value={this.state.name}
                   flex={4}
                   focusOnMount
                   onChange={this.onChangeName}
                 />
                 <div style={{ minWidth: "4px" }} />
                 <Button bg={colors[12]} onClick={this.onClickOkay}>
                   OK
                 </Button>
               </div>
             ),

             "rename-picker": (
               <div className="rename-picker" style={{ display: "flex", maxWidth: "320px", alignItems: "center" }}>
                 <Text color={colors[7]}>
                   RENAME WHAT?
                 </Text>
                 <div style={{ minWidth: "16px" }} />
                 <Button bg={colors[8]} onClick={this.onCancelRename}>
                   CANCEL
                 </Button>
               </div>
             ),

             "delete-picker": (
               <div className="delete-picker" style={{ display: "flex", maxWidth: "320px", alignItems: "center" }}>
                 <Text color={colors[7]}>
                  DELETE WHAT?
                 </Text>
                 <div style={{ minWidth: "16px" }} />
                 <Button bg={colors[8]} onClick={this.onCancelDelete}>
                   CANCEL
                 </Button>
               </div>
             ),

             "delete-cart": (
               <div className="delete-cart" style={{ display: "flex", maxWidth: "320px", alignItems: "center" }}>
                 <Text color={colors[7]}>
                  DELETE?
                 </Text>
                 <div style={{ minWidth: "16px" }} />
                 <Button bg={colors[8]} onClick={this.onConfirmDelete}>
                   YES
                 </Button>
                 <div style={{ minWidth: "16px" }} />
                 <Button bg={colors[6]} onClick={this.onCancelDelete}>
                   NO
                 </Button>
               </div>
             ),

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
                  buzz={(
                    ["rename-picker", "delete-picker"].includes(toolbarMode)
                     || (
                       toolbarMode === "delete-cart"
                       && carts[e].id == this.state.id
                     )
                  )}
                  red={(
                    toolbarMode === "delete-cart"
                    && carts[e].id == this.state.id
                  )}
                  onClick={({
                    "default": undefined,
                    "rename-picker": this.onTargetRename,
                    "delete-picker": this.onTargetDelete,
                  })[toolbarMode]}
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

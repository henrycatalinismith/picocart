import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import uuid from "uuid"
import Document from "../components/document"
import Input from "../components/input"
import Grid from "../components/grid"
import Cart from "../components/cart"
import Text from "../components/text"
import Toolbar from "../components/toolbar"
import Button from "../components/button"
import actions from "../actions"
import colors from "../colors"

class Index extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  static mapStateToProps = state => ({
    carts: state.carts,
    content: state.content,
  })

  static mapDispatchToProps = (dispatch, props) => ({
    createCart: (id, name) => dispatch(actions.createCart({ id, name })),
    updateCart: (id, name) => dispatch(actions.updateCart({ id, name })),
    deleteCart: id => dispatch(actions.deleteCart(id)),
  });

  static propTypes = {
    carts: PropTypes.object,
    content: PropTypes.object,
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
    const { carts, content } = this.props
    const { toolbarMode } = this.state

    let columnCount = 2
    if (content.width) {
      if (content.width > 300) {
        columnCount = 4
      }
      if (content.width > 500) {
        columnCount = 5
      }
      if (content.width > 600) {
        columnCount = 6
      }
      if (content.width > 700) {
        columnCount = 7
      }
      if (content.width > 800) {
        columnCount = 8
      }
    }

    const columnWidth = (
      content.width - 4 - 4
      - (16 * columnCount)
    ) / columnCount

    return (
      <Document title="picocart">
        <div className="library-page">
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
            <Grid n={columnCount} w={columnWidth} gap={16}>
              {_.keys(carts).map((e, i) => (
                <Cart
                  key={carts[e].id}
                  bg={colors[5]}
                  cart={carts[e]}
                  size={columnWidth}
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

        <style jsx>{`
          .library-page {
            flex-direction: column;
            display: flex;
            height: 100%;
            width: 100%;
          }

          .library {
            box-sizing: border-box;
            height: 100%;
            padding: 8px;
            overflow-y: auto;
          }
        `}</style>

        </div>
      </Document>
    )
  }
}

export default connect(
  Index.mapStateToProps,
  Index.mapDispatchToProps
)(Index)

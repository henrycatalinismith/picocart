import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import NextHead from "next/head"
import Bucket from "../components/bucket"
import Viewport from "../components/viewport"
import Welcome from "../components/welcome"
import Document from "../components/document"
import actions from "../actions"
import colors from "../colors"

class Index extends React.Component {
  render() {
    const { layout } = this.props

    return (
      <Document title="test">
        lol
      </Document>
    )
  }
}

export default connect(
  Index.mapStateToProps,
  Index.mapDispatchToProps
)(Index)

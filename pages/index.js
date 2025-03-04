import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import uuid from "uuid"
import Document from "../components/document"
import Bucket from "../components/bucket"
import Landing from "../components/landing"
import Header from "../components/header"
import actions from "../actions"
import colors from "../colors"

class Index extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  static mapStateToProps = state => ({
    layout: state.layout,
    os: state.os,
  })

  static mapDispatchToProps = (dispatch, props) => ({
  });

  static propTypes = {
    layout: PropTypes.object,
    os: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { layout, os } = this.props

    return (
      <Document title="picocart">
        <Landing os={os} />
      </Document>
    )
  }
}

export default connect(
  Index.mapStateToProps,
  Index.mapDispatchToProps
)(Index)

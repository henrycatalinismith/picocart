import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import uuid from "uuid"
import Document from "../components/document"
import Bucket from "../components/bucket"
import Installer from "../components/installer"
import Header from "../components/header"
import actions from "../actions"
import colors from "../colors"

class Install extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  static mapStateToProps = state => ({
    os: state.os,
  })

  static mapDispatchToProps = (dispatch, props) => ({
  });

  static propTypes = {
    os: PropTypes.object,
    query: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { os, query } = this.props
    console.log(this.props)

    return (
      <Document title="picocart">
        <Installer os={os} />
      </Document>
    )
  }
}

export default connect(
  Install.mapStateToProps,
  Install.mapDispatchToProps
)(Install)

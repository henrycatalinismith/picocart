import PropTypes from "prop-types"
import _ from "lodash"
import { connect } from "react-redux"
import uuid from "uuid"
import Document from "../components/document"
import Bucket from "../components/bucket"
import Welcome from "../components/welcome"
import Header from "../components/header"
import actions from "../actions"
import colors from "../colors"

class Index extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  static mapStateToProps = state => ({
    layout: state.layout,
  })

  static mapDispatchToProps = (dispatch, props) => ({
  });

  static propTypes = {
    layout: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { layout } = this.props

    return (
      <Document title="picocart">
        <Welcome />
      </Document>
    )
  }
}

export default connect(
  Index.mapStateToProps,
  Index.mapDispatchToProps
)(Index)

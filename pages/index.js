import { connect } from "react-redux"
import Link from "next/link"
import Document from "../components/document"
import Header from "../components/header"
import actions from "../actions"
import colors from "../colors"

class Index extends React.Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return {}
  }

  render() {
    return (
      <Document>
        <Header />
        <p>
          <Link href="/cart">
            <a>Edit</a>
          </Link>
        </p>
      </Document>
    )
  }
}


export default connect()(Index)

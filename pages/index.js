import { connect } from "react-redux"
import Link from "next/link"
import Document from "../components/document"
import Header from "../components/header"
import colors from "../colors"

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    console.log(isServer)
    return {}
  }

  componentDidMount () {
    console.log("componentDidMount!")
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

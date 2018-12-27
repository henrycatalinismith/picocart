import { connect } from "react-redux"
import Link from "next/link"
import Document from "../components/document"
import Header from "../components/header"
import colors from "../colors"

class Index extends React.Component {
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

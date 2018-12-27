import { connect } from "react-redux"
import Document from "../components/document"
import Header from "../components/header"
import Toolshed from "../components/toolshed"
import colors from "../colors"

class Cart extends React.Component {
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
      <Document title="cart editor">
        <Header />
        <Toolshed height={256} />
      </Document>
    )
  }
}


export default connect()(Cart)


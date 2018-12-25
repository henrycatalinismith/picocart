import { connect } from "react-redux"
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
        <p>index</p>
        <p>{process.env.LOL}</p>
        <style jsx>{`
          p {
            color: ${colors[0]};
            font-weight: 900;
          }
        `}</style>
      </Document>
    )
  }
}


export default connect()(Index)

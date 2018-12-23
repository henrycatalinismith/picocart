import Document from "../components/document"
import Header from "../components/header"
import colors from "../colors"

export default () => (
  <Document>
    <Header />
    <p>index</p>
    <style jsx>{`
      p {
        color: ${colors[0]};
        font-weight: 900;
      }
    `}</style>
  </Document>
)


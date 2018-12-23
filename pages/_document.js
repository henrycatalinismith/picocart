import NextDocument from "next/document"
import { Head, Main, NextScript } from "next/document"
import Document from "../components/document"

export default class _Document extends NextDocument {
  render() {
    return (
      <Document>
	<Main />
	<NextScript />
      </Document>
    )
  }
}

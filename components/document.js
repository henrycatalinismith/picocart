import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import NextHead from "next/head"
import Viewport from "../components/viewport"
import Header from "../components/header"
import Bucket from "../components/bucket"
import Content from "../components/content"
import colors from "../colors"

const Font = () => (
  <style key="style" global jsx>{`
    @font-face {
      font-family: "PICO-8";
      src: url("/pico8.woff2") format("woff2"),
           url("/pico8.woff")   format("woff");
      font-weight: normal;
      font-style: normal;
    }
  `}</style>
)


export class Document extends React.PureComponent {
  static mapStateToProps = state => ({
    viewport: state.viewport,
  })

  static propTypes = {
    children: PropTypes.any,
    viewport: PropTypes.object,
  };

  render() {
    const { children, title, viewport } = this.props
    return (
      <>
        <NextHead key="head">
          <link
            rel="manifest"
            href="/manifest.webmanifest"
          />
          <meta name="theme-color" content="#ee74a7" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <title>{title}</title>
        </NextHead>
        <style key="style" global jsx>{`
          body {
            font-family: sans-serif;
            margin: 0;
            background-color: ${colors[7]};
          }
        `}</style>
        <Font />
        <Viewport {...viewport}>
          <Header />
          <Bucket>
            <Content>
              {children}
            </Content>
          </Bucket>
        </Viewport>
      </>
    )
  }
}

export default connect(Document.mapStateToProps)(Document)

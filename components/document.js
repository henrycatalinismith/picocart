import React from "react"
import PropTypes from "prop-types"
import NextHead from "next/head"
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


export default class Document extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
  };

  render() {
    const { children, title } = this.props
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
        {children}
      </>
    )
  }
}


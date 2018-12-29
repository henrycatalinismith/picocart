import React from "react"
import PropTypes from "prop-types"
import NextHead from "next/head"
import colors from "../colors"

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
          <meta
            name="viewport"
            content="initial-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="#ee74a7" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
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
        {children}
      </>
    )
  }
}


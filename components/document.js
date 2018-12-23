import NextHead from "next/head"
import colors from "../colors"

export default ({ children }) => [
  children,
  <NextHead>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
  </NextHead>,
  <style global jsx>{`
    body {
      font-family: sans-serif;
      margin: 0;
      background-color: ${colors[13]};
    }
  `}</style>
]


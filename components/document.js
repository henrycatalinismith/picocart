import NextHead from "next/head"
import colors from "../colors"

export default ({ children }) => (
  <>
    <NextHead key="head">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
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


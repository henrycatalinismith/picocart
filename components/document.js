import NextHead from "next/head"
import colors from "../colors"

export default ({ children, title = "picocart" }) => (
  <>
    <NextHead key="head">
      <link
        rel="manifest"
        href="/manifest.webmanifest"
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


require("dotenv").config()

const path = require("path")
const Dotenv = require("dotenv-webpack")
const withOffline = require("next-offline")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const nextConfig = {
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  },
  webpack (config) {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ]

    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin([{
        from: path.join(__dirname, "node_modules/codemirror/lib/codemirror.css"),
        to: path.join(__dirname, "static/codemirror.css"),
      }])
    ]

    return config
  }
}

module.exports = withOffline(withBundleAnalyzer(nextConfig))

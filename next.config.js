require("dotenv").config()

const path = require("path")
const Dotenv = require("dotenv-webpack")
const compose = require("next-compose")
const withOffline = require("next-offline")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

module.exports = compose([

  [withBundleAnalyzer, {
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
  }],

  [withOffline, {
    workboxOpts: {
      runtimeCaching: [
        {
          urlPattern: /studio/,
          handler: "networkFirst",
        },
      ]
    }
  }],

  {
    webpack(config, options) {
      config.plugins = config.plugins || []

      config.module.rules.push({
        test: /\.(pegjs|raw\.js)/,
        use: "raw-loader",
      });

      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ]

      return config
    }
  }
])

/*
const nextConfig = {

  webpack (config) {
  }
}

module.exports = withOffline(withBundleAnalyzer(nextConfig))
*/

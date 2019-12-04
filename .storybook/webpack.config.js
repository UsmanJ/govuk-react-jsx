const path = require('path')

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules = config.module.rules.filter(
    rule => !rule.test.test('.scss')
  )

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.(png|jpg|gif|woff|svg|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  })

  return config
}

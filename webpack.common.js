const path = require('path')
const faviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: {
    metronome: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'pickupMusicMetronome',
      type: "umd"
    },
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new faviconsWebpackPlugin()
  ]
};
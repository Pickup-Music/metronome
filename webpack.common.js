const path = require('path');

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
};
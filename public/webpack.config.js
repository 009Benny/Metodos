var webpack = require("./node_modules/webpack"); 

var config = {
  mode: 'development',
  entry: {
    main: "./js/main.js"
  },
  output: {
    path: __dirname,
    filename: "../[name]bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        /*query: {
          presets: ['react', 'env']
        }*/
      },
      {
        test: /vendor\/.+\.(jsx|js)$/,
        loader: "imports?jQuery=jquery,$=jquery,this=>window"
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js'],
    alias: {
      jQuery: "jquery/src/jquery"
    }
  },

  node: {
    fs: "empty"
  }
}

module.exports = {
  config,
};

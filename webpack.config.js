module.exports = {
  context: __dirname + "/src",

  entry: {
    client: "./components/main.js"
    // Uncomment to recompile the admin page w/ graphiql interface
    // admin: "./admin/admin.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/src/public",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};




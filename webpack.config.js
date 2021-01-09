const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    mode,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.(jpg|png)$/,
          use: [{ loader: "url-loader", options: { limit: 5000 } }],
        },
        {
          test: /\.s(a|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
    ],
    output: {
      filename: 'bundle.js',
    }
  };
};

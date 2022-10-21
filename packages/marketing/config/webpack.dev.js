const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

const dev = {
	mode: 'development',
	entry: "./src/index.ts",
	devServer: {
		port: 8082,
		historyApiFallback: {
			index: 'index.html'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};

module.exports = merge(common, dev);

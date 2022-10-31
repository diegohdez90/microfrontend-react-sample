const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [{
			test: /\.(js|mjs|jsx|ts|tsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'ts-loader',
				//options: {
				//	presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
				//	plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
				//}
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}
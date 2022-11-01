const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [{
			test: /\.(ts|tsx)?$/,
			use: [{
					loader: 'babel-loader',
					options: {
							presets: ["@babel/preset-typescript", "@babel/preset-react"]
					}
			}],
			exclude: /[\\/]node_modules[\\/]/
	}, {
			test: /\.(js|jsx|tsx|ts)$/,
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
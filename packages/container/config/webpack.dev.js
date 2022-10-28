const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require('./webpack.common');
const path = require('path');

const dev = {
	mode: 'development',
	devtool: "eval-source-map",
	entry: "./src/index.ts",
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	devServer: {
		port: 8083,
		historyApiFallback:{ index: "/", disableDotRule: true },
    static: path.join(__dirname, "dist"),
	},
	module: {
		rules: [{
			test: /\.(scss)$/,
			use: [{
				loader: 'style-loader', // inject CSS to page
			}, {
				loader: 'css-loader', // translates CSS into CommonJS modules
			}, {
				loader: 'postcss-loader', // Run post css actions
				options: {
					postcssOptions: {
						plugins: function () { // post css plugins, can be exported to postcss.config.js
							return [
								require('autoprefixer')
							];
						}
					}
				}
			}, {
				loader: 'sass-loader' // compiles Sass to CSS
			}]
		}, {
			test: /\.svg$/i,
			type: 'asset',
			resourceQuery: /url/, // *.svg?url
		}, {
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
			use: ['@svgr/webpack'],
		}]
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketing: 'marketing@http://localhost:8082/remoteEntry.js'
			}
		})
	]
};

module.exports = merge(common, dev);

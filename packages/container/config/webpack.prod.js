const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require('./webpack.common');
const packages = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prod = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/'
	},
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
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
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
			},
			shared: packages.dependencies
		})
	]
}

module.exports = merge(common, prod);

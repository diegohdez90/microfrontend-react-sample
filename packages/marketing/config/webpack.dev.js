const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require('./webpack.common');
const { dependencies } = require('../package.json');

console.log(dependencies);

const dev = {
	mode: 'development',
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	devtool: 'eval-source-map',
	devServer: {
		port: 8082,
		historyApiFallback: {
			index: "index.html"
		}
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
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./Marketing': './src/index'
			},
			shared: {
				...dependencies,
				react: { singleton: true, eager: true, requiredVersion: dependencies.react },
				"react-dom": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies["react-dom"],
				},
				"react-router-dom": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies["react-router-dom"],
				},
				"bootstrap": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies.bootstrap,
				},
				"react-bootstrap": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies['react-bootstrap'],
				}
			}
		})
	]
};

module.exports = merge(common, dev);
//module.exports = dev

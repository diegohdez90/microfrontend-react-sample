const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require('./webpack.common');
const path = require('path');
const packages = require('../package.json');

const dev = {
	mode: 'development',
	devtool: "eval-source-map",
	entry: "./src/index.ts",
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	devServer: {
		port: 8083,
		historyApiFallback: { index: "index.html" }
	},
	optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
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
				marketing: 'marketing@http://localhost:8082/remoteEntry.js'
			},
			shared: {
				...packages.dependencies,
				react: { singleton: true, eager: true, requiredVersion: packages.dependencies.react },
				"react-dom": {
					singleton: true,
					eager: true,
					requiredVersion: packages.dependencies["react-dom"],
				},
				"react-router-dom": {
					singleton: true,
					eager: true,
					requiredVersion: packages.dependencies["react-router-dom"],
				}
			}
		})
	]
};

module.exports = merge(common, dev);

const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
	output: {
		publicPath: '/dist/',
		filename: 'js/[name].min.js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		new Webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				],
			},
			{ 
				test: /\.(woff|woff2|eot|ttf)$/, 
				loader: 'url-loader?limit=100000&name=fonts/[name].[ext]' 
			},
			{
				test: /\.(png|svg)$/,
				loader: 'url-loader?limit=100000&name=img/[name].ext'
			}
		],
	},

}
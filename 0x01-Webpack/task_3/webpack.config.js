const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		all: [
			'./modules/header/header.js',
			'./modules/body/body.js',
			'./modules/footer/footer.js'
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
		clean: true,
	},

	optimization: {
		runtimeChunk: 'single',
	},

	plugins:
		[
			new HtmlWebpackPlugin(),
			new CleanWebpackPlugin(),
		],


	devtool: "inline-source-map",

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},

			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	mode: "development",

	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},

	devServer: {
		contentBase: './public',
		port: 8564,
	},
};

const { resolve } = require('path');

module.exports = {
	entry: "./js/dashboard_main.js",
	output: {
		path: resolve(__dirname, "public"),
		filename: "bundle.js",
	},
	mode: "production",
	performance: {
		maxAssetSize: 100000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
};

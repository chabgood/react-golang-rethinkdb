const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		filename: './dist/bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},

	plugins: [new UglifyJSPlugin()]
};

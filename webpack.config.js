const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename:
			process.env.NODE_ENV === 'development'
				? '[name].js'
				: '[name]-[hash:8].js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: 'file-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},

	plugins: [
		new HtmlPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		}),
	],

	devServer: {
		historyApiFallback: true,
		port: 5000,
	},
};

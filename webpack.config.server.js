const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const WebpackBar = require('webpackbar');

const root = process.cwd();

module.exports = {
	entry: path.resolve(root, 'server', 'src', 'server.ts'),
	output: {
		filename: 'server.js',
		path: path.resolve(root, 'dist', 'server'),
		libraryTarget: 'commonjs',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			src: path.resolve(root, 'src'),
			assets: path.resolve(root, 'assets'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(png|jpe?g|gif|ttf|woff|woff2|eot|svg)$/i,
				use: 'file-loader',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new LoadablePlugin(),
		new WebpackBar({ name: 'server', color: 'orange' }),
	],
	target: 'node',
	externals: [nodeExternals()], // a way to exclude any dependencies
	// we wish to not be included in the output bundle
	// This library creates an external function that excludes all node_modules dependencies
	node: {
		__dirname: false, // Setting __dirname to false will ensure that dirname behaves normally in a node environment
	},
};

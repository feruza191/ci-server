const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
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
		alias: {
			src: path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'assets'),
		},
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
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
						options: {
							publicPath: '',
						},
					},
					{
						loader: 'css-loader',
					},
				],
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
		host: '0.0.0.0',
		historyApiFallback: true,
		port: 5000,
	},
};

const serverConfig = {
	entry: '../server/src/app.tsx',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'assets'),
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
						loader: 'css-loader/locals',
					},
				],
			},
		],
	},
	target: 'node',
	externals: [nodeExternals()], // a way to exclude any dependencies
	// we wish to not be included in the output bundle
	// This library creates an external function that excludes all node_modules dependencies
	node: {
		__dirname: false, // Setting __dirname to false will ensure that dirname behaves normally in a node environment
	},
};

module.exports = [serverConfig, clientConfig];

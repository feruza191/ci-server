const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const dotenv = require('dotenv');

const root = process.cwd();

dotenv.config({ path: path.resolve(root, '.env.local') });
dotenv.config({ path: path.resolve(root, '.env') });

module.exports = {
	entry: path.resolve(root, 'src', 'index.tsx'),
	output: {
		path: path.resolve(root, 'dist', 'client'),
		publicPath: '/',
		filename:
			process.env.NODE_ENV === 'development'
				? '[name].js'
				: '[name]-[hash:8].js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			src: path.resolve(root, 'src'),
			assets: path.resolve(root, 'assets'),
		},
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
				include: path.resolve(root, 'src'),
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		}),
		new LoadablePlugin(),
		new WebpackBar({ name: 'client', color: 'green' }),
	],

	devServer: {
		host: '0.0.0.0',
		historyApiFallback: true,
		port: 5000,
	},
};

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: ['./src/js/main.bundle.js', './src/style/main.scss'],
	output: {
		path: `${__dirname}/public/js`,
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(sa|sc)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: { importLoaders: 2 },
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../style/style.css',
		}),
	],
}

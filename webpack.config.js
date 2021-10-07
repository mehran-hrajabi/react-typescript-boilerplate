const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

//To get a visual and interactive treemap of the bundle size,
//uncomment the above line and its initialization in plugins
//And enter this command in the root directory of the project
//webpack --profile --json | Out-file 'stats.json'

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    devServer: {
        //by setting it to 0.0.0.0 the server will be accessible externally
		host: '0.0.0.0',
        //port number to serve app at localhost:3000
        port: 3000,
        //hot reloading
        hot: true,
        //enable gzip compression
        compress: true,
        //serve index.html in place of any 404
        historyApiFallback: true,
        client: {
			//only show errors on the screen
			overlay: {
				errors: true,
				warnings: false,
			},
		},
    },
    //enabling source maps to get a source mapping url in the final minified file
    devtool: 'source-map',
    module: {
        rules: [
            //js jsx ts tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: '/node_modules',
                loader: 'babel-loader'
            },
            //css and sass files
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            //png jpg git images using asset modules
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            //font files using asset modules
            {
				test: /\.(woff|woff2|eot|ttf)$/,
				type: 'asset',
			},
            //svg images using asset modules and a custom generator
			{
				test: /\.svg$/i,
				type: 'asset/inline',
				generator: {
					dataUrl(content) {
						content = content.toString();
						return svgToMiniDataURI(content);
					},
				},
			},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        //new BundleAnalyzerPlugin() //Generate stats.json file: webpack --profile --json | Out-file 'stats.json'
    ]
}
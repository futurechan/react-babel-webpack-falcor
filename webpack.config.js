
module.exports = {
	context: __dirname + '/src',
	entry : "./index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"		
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "babel" }
		]
	}
}
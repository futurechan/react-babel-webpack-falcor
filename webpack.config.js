
module.exports = {
	context: __dirname + "/app",
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
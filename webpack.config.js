//https://escuelavue.es/vue-screencasts/vue-webpack-configuracion-paso-a-paso/
//let webpack = require("webpack");  //importamos webpack //módulo de nodejs
let path = require("path"); //otro módulo de nodejs


//rules
const SASS = {
	test: /\.s[ac]ss$/i,
	use: [
	  // Creates `style` nodes from JS strings
	  "style-loader",
	  // Translates CSS into CommonJS
	  "css-loader",
	  // Compiles Sass to CSS
	  "sass-loader",
	]
}

module.exports = { //module.exports es un objeto que el módulo actual devuelve cuando es «requerido» en otro programa o módulo.
    entry: './src/app.js', //resolvemos ruta relativa
    output: { //objeto con notación literal 
        path: path.resolve(__dirname,'./dist'),//resolvemos ruta absoluta
        publicPath: "/dist",  //directorio //"publicPath" es utilizado por muchos complementos de Webpack para actualizar los valores de URL integrados en archivos css y html en modo de producción.
        filename: 'build.js'
    },
	module:{
		rules:[
			//https://webpack.js.org/loaders/sass-loader/
			SASS
		]
	}

}
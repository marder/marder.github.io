const { resolve } = require("path");

module.exports = {

   entry: "./app/App.ts",

   output: {
      path: resolve("./dist"),
      filename: "bundle.js"
   },

   devtool: "source-map",

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
         }
      ]
   },

   resolve: {
      extensions: [".ts", ".js"],
      alias: {
         "@rammbulanz": resolve("./node_modules/@rammbulanz")
      }
   }

}
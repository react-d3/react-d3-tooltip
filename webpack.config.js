'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin');
var js_dist_min = path.join(__dirname, './example/dist/min');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'chartComponent',
  devtool: ENV ? "source-map": '',
  entry: {
    tooltip_line: js_root + '/tooltip_line.jsx',
    tooltip_line_multi: js_root + '/tooltip_line_multi.jsx',
    tooltip_scatter: js_root + '/tooltip_scatter.jsx',
    tooltip_area_stack: js_root + '/tooltip_area_stack.jsx',
    tooltip_bar: js_root + '/tooltip_bar.jsx',
    tooltip_bar_stack: js_root + '/tooltip_bar_stack.jsx',
    tooltip_bar_group: js_root + '/tooltip_bar_group.jsx',
    tooltip_pie: js_root + '/tooltip_pie.jsx'
  },

  output: {
    path: ENV ? js_dist_min  : js_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["react-hot", "babel-loader?stage=0"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];

'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin')


module.exports = [{
  name: 'chartComponent',
  entry: {
    tooltip_line: js_root + '/tooltip_line.jsx',
    tooltip_line_multi: js_root + '/tooltip_line_multi.jsx',
    tooltip_scatter: js_root + '/tooltip_scatter.jsx',
    tooltip_area_stack: js_root + '/tooltip_area_stack.jsx',
    tooltip_area_stack_negative: js_root + '/tooltip_area_stack_negative.jsx',
    tooltip_bar: js_root + '/tooltip_bar.jsx',
    tooltip_bar_stack: js_root + '/tooltip_bar_stack.jsx',
    tooltip_bar_group: js_root + '/tooltip_bar_group.jsx',
    tooltip_pie: js_root + '/tooltip_pie.jsx'
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}];

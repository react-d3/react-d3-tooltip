// ENV = 1 stands for production, ENV = 0 stands for development
var ENV = !!(+process.env.NODE_ENV || 0);

var tooltip_charts = [
  "line",
  "line_multi",
  "scatter",
  "area_stack"
]

var prod_tooltip_link = tooltip_charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_tooltip_link = tooltip_charts.map(function(d) {
  return 'origin/' + d
})

module.exports = [{
  "layout": "./gallery.hbs",
  "filename": "./example/tooltip_gallery.html",
  "data": {
    "charts": tooltip_charts,
    "link": ENV? prod_tooltip_link: dev_tooltip_link,
    "mode": ENV
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/tooltip_line.html",
  "data": {
    "title": "Tooltip Line Chart",
    "type": "tooltip_line",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/tooltip_line_multi.html",
  "data": {
    "title": "Tooltip Multipule Line Chart",
    "type": "tooltip_line_multi",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/tooltip_scatter.html",
  "data": {
    "title": "Tooltip Scatter Chart",
    "type": "tooltip_scatter",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/tooltip_area_stack.html",
  "data": {
    "title": "Tooltip Area Stack Chart",
    "type": "tooltip_area_stack",
    "prefix": ENV? 'min': 'origin'
  }
}]

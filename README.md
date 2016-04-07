# react-d3-tooltip

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-tooltip.svg)](https://gemnasium.com/react-d3/react-d3-tooltip)

`react-d3` tooltip implementation.

## Quick example

#### With webpack build tool

- line chart

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('react-d3-tooltip').LineTooltip;

(function() {

  var generalChartData = require('json!./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.index;
    }

  ReactDOM.render(
      <LineTooltip
        width= {600}
        height= {300}
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
      />
    , document.getElementById('data_tooltip_line')
  )
})()
```

#### In html (without build tools)

Clone code `react-d3-tooltip.js` or minify js `react-d3-tooltip.min.js` and include the script in your HTML.

You'll also need `react`, `react-dom`, `d3`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Line Chart example
    </title>
  </head>
  <body>
    <div id="data_tooltip_line"></div>
    <script src="https://fb.me/react-0.14.2.js"></script>
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
    <script src="../react-d3-tooltip.min.js"></script>
    <script type="text/babel">
      var LineTooltip = ReactD3Tooltip.LineTooltip;

      var data = [
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ];

      var chartSeries = [
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ],
        x = function(d) {
          return d.index;
        }

      ReactDOM.render(
        <LineTooltip width= {600} height= {500} data= {data} chartSeries= {chartSeries} x= {x} />
      , document.getElementById('data_tooltip_line')
      )
    </script>
  </body>
</html>
```

### Customization

Choose one of the components in [tooltip folder](https://github.com/react-d3/react-d3-tooltip/tree/master/src/tooltip).

Then require it in your project, take `simple` as example.

After you require it, render the tooltip as children. Like below example.

```js
var SimpleTooltipStyle = require('react-d3-tooltip').SimpleTooltip;


ReactDOM.render(
    <LineTooltip
      data= {generalChartData}
      chartSeries = {chartSeries}
      interpolate = {interpolate}
      x= {x}
      xScale= {xScale}
    >
      <Simple/>  //<---------
    </LineTooltip>

, document.getElementById('data_tooltip_line_multi')
)

```

Then you can change tooltip style!

## Install

```
npm install --save react-d3-tooltip
```

## Support Tooltip Component

- Line Chart: export as `LineTooltip`
- Area Stack Chart: export as `AreaStackTooltip`
- Scatter Plot: export as `ScatterTooltip`
- Bar Chart: export as `BarTooltip`
- Bar Stack: export as `BarStackTooltip` (you can now pass in onClick handler via props)
- Bar Group: export as `BarGroupTooltip`
- Pie Chart: export as `PieTooltip`

## Gallery

![img](http://www.reactd3.org/img/tooltip/cover.png)

## License

Apache 2.0

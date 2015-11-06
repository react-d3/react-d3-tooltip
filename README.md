# react-d3-tooltip

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-tooltip.svg)](https://gemnasium.com/react-d3/react-d3-tooltip)

`react-d3` tooltip implementation.

## Quick example

- line chart

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('../../lib').LineTooltip;

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

## Install

```
npm install --save react-d3-tooltip
```

## Support Tooltip Component

- Line Chart: export as `LineTooltip`
- Area Stack Chart: export as `AreaStackTooltip`
- Scatter Plot: export as `ScatterTooltip`
- Bar Chart: export as `BarTooltip`
- Bar Stack: export as `BarStackTooltip`
- Bar Group: export as `BarGroupTooltip`
- Pie Chart: export as `PieTooltip`

## Gallery

![img](http://www.reactd3.org/img/tooltip/cover.png)

## License

Apache 2.0

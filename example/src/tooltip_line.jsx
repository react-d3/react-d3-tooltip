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

"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('../../lib').LineTooltip;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')
  var parseDate = d3.time.format("%Y%m%d").parse;

  var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e'
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff'
      }
    ],
    interpolate = 'monotone',
    x = function(d) {
      return parseDate(d.date);
    },
    xScale = 'time';

  ReactDOM.render(
      <LineTooltip
        data= {generalChartData}
        chartSeries = {chartSeries}
        interpolate = {interpolate}
        x= {x}
        xScale= {xScale}
      />

  , document.getElementById('data_tooltip_line_multi')
  )
})()

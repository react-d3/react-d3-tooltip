"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('../../lib').LineTooltip;
var SimpleTooltipStyle = require('../../lib/tooltip/simple');
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
      >
        <SimpleTooltipStyle/>
      </LineTooltip>
    , document.getElementById('data_tooltip_line')
  )

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
      >
      </LineTooltip>

  , document.getElementById('data_tooltip_line_multi')
  )
})()

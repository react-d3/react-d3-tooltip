"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ScatterTooltip = require('../../src').ScatterTooltip;
var SimpleTooltipStyle = require('../../src/tooltip/simple');

var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')

var chartSeries = [
    {
      field: 'New York',
      name: 'New York Temp',
      color: '#ff7f0e',
      symbol: "cross"
    },
    {
      field: 'San Francisco',
      name: 'San Francisco Temp',
      color: '#2ca02c',
      symbol: 'diamond'
    },
    {
      field: 'Austin',
      name: 'Austin Temp',
      color: '#7777ff',
      symbol: 'triangle'
    }
  ],
  x = function(d) {
    var parseDate = d3.time.format("%Y%m%d").parse;
    return parseDate(d.date);
  },
  xScale = 'time';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      width: 600,
      height: 400,
      series: chartSeries
    }
  },
  onClick: function() {
    this.setState({
      width: this.state.width === 600? 400: 600,
      height: this.state.width === 600? 600: 400,
      series: this.state.width === 600? [{
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: "cross"
      }]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <ScatterTooltip
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
        >
        </ScatterTooltip>
      </div>
    )
  }
})

"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('../../src').LineTooltip;
var SimpleTooltipStyle = require('../../src/tooltip/simple');

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
      series: this.state.width === 600? [
        {
          field: 'New York',
          name: 'New York Temp',
          color: '#ff7f0e'
        },
        {
          field: 'San Francisco',
          name: 'San Francisco Temp',
          color: '#2ca02c'
        }
      ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <LineTooltip
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          interpolate = {interpolate}
          x= {x}
          xScale= {xScale}
        >
        </LineTooltip>
      </div>
    )
  }
})

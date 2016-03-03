"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var AreaStackTooltip = require('../../src').AreaStackTooltip;
var SimpleTooltipStyle = require('../../src').SimpleTooltip;

var generalChartData = require('dsv?delimiter=\t!./data/browser.tsv')
var formatPercent = d3.format(".0%");

var chartSeries = [
    {
      field: 'IE',
      name: 'IE browser'
    },
    {
      field: 'Chrome',
      name: 'Chrome browser'
    },
    {
      field: 'Firefox'
    },
    {
      field: 'Safari',
      name: 'Safari browser'
    },
    {
      field: 'Opera',
      name: 'Opera browser'
    }
  ],
  x = function(d) {
    var parseDate = d3.time.format("%y-%b-%d").parse;
    return parseDate(d.date);
  },
  xScale = 'time',
  y = function(d) {
    return d / 100;
  };

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
          field: 'IE',
          name: 'IE browser'
        },
        {
          field: 'Chrome',
          name: 'Chrome browser'
        }
      ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <AreaStackTooltip
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
          y= {y}
          yTickFormat= {formatPercent}
        >
          <SimpleTooltipStyle/>
        </AreaStackTooltip>
      </div>
    )
  }
})

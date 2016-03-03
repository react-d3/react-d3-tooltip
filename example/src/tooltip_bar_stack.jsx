"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarStackTooltip = require('../../src').BarStackTooltip;
var SimpleTooltipStyle = require('../../src/tooltip/simple');

var generalChartData = require('dsv?delimiter=,!./data/age.csv')

var chartSeries = [
    {
      field: 'Under 5 Years',
      name: 'Under 5 Years'
    },
    {
      field: '5 to 13 Years',
      name: '5 to 13 Years'
    },
    {
      field: '14 to 17 Years',
      name: '14 to 17 Years'
    },
    {
      field: '18 to 24 Years',
      name: '18 to 24 Years'
    },
    {
      field: '25 to 44 Years',
      name: '25 to 44 Years'
    },
    {
      field: '45 to 64 Years',
      name: '45 to 64 Years'
    },
    {
      field: '65 Years and Over',
      name: '65 Years and Over'
    },

  ],
  x = function(d) {
    return d.State;
  },
  xScale = 'ordinal',
  yTickFormat = d3.format(".2s");

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
          field: '45 to 64 Years',
          name: '45 to 64 Years'
        },
        {
          field: '65 Years and Over',
          name: '65 Years and Over'
        }
      ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <BarStackTooltip
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
          yTickFormat= {yTickFormat}
        >
          <SimpleTooltipStyle/>
        </BarStackTooltip>
      </div>
    )
  }
})
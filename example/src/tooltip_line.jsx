"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('../../src').LineTooltip;
var SimpleTooltipStyle = require('../../src/tooltip/simple');

var generalChartData = require('./data/user.json');

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
          field: 'age',
          name: 'Age',
          color: 'blue'
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
          chartSeries= {this.state.series}
          x= {x}
        >
          <SimpleTooltipStyle/>
        </LineTooltip>
      </div>
    )
  }
})

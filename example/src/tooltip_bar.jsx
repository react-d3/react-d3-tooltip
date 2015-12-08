"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarTooltip = require('../../lib').BarTooltip;
var SimpleTooltipStyle = require('../../lib/tooltip/simple');

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

  var chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    yTicks = [10, "%"];

  var Container = React.createClass({
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
            field: 'frequency',
            name: 'Frequency'
          }
        ]: chartSeries
      })
    },
    render: function() {

      return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <BarTooltip
            width= {this.state.width}
            height= {this.state.height}
            data= {generalChartData}
            chartSeries = {this.state.series}
            x= {x}
            xScale= {xScale}
            yTicks= {yTicks}
          >
            <SimpleTooltipStyle/>
          </BarTooltip>
        </div>
      )
    }
  })

  ReactDOM.render(
    <Container/>
    , document.getElementById('data_tooltip_bar')
  )
})()

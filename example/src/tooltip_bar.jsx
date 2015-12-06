"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarTooltip = require('../../lib').BarTooltip;
var SimpleTooltipStyle = require('../../lib/tooltip/Simple');

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

  ReactDOM.render(
    <BarTooltip
      width= {600}
      height= {400}
      data= {generalChartData}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
      yTicks= {yTicks}
    >
      <SimpleTooltipStyle/>
    </BarTooltip>
    , document.getElementById('data_tooltip_bar')
  )
})()

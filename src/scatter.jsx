"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
} from 'react-d3-core';

import {
  ScatterPlot as ScatterPlot,
  series as series
} from 'react-d3-basics';

import {
  default as TooltipSet
} from './inherit/index';

import {
  default as Tooltip
} from './utils/tooltip';

import {
  default as Voronoi
} from './utils/voronoi';

export default class ScatterTooltip extends TooltipSet {

  render() {

    var chartSeriesData = series(this.props)

    var voronoi = <Voronoi dataset={chartSeriesData} {...this.props} {...this.state} focus={true} onMouseOver= {this.voronoiMouseOver.bind(this)} onMouseOut= {this.voronoiMouseOut.bind(this)}/>
    var tooltip = <Tooltip {...this.props} {...this.state}/>


    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <ScatterPlot {...this.props} {...this.state}/>
          {voronoi}
        </Chart>
      </div>
    )
  }
}

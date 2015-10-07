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
  LineChart as LineChart,
  series as series
} from 'react-d3-basic';

import {
  default as TooltipSet
} from './inherit/index';

import {
  default as Tooltip
} from './utils/tooltip';

import {
  default as Voronoi
} from './utils/voronoi';

export default class LineTooltip extends TooltipSet {

  render() {

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    var voronoi = (<Voronoi
      {...this.props}
      {...this.state}
      xScaleSet= {xScaleSet}
      yScaleSet= {yScaleSet}
      dataset= {chartSeriesData}
      focus={true}
      onMouseOver= {this.voronoiMouseOver.bind(this)}
      onMouseOut= {this.voronoiMouseOut.bind(this)}
      />)

    var tooltip = (<Tooltip
      {...this.props}
      {...this.state}
      xScaleSet= {xScaleSet}
      yScaleSet= {yScaleSet}
      dataset= {chartSeriesData}
      />);


    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <LineChart {...this.props}/>
          {voronoi}
        </Chart>
      </div>
    )
  }
}

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

import {
  default as CommonProps,
} from './commonProps';

export default class ScatterTooltip extends TooltipSet {
  constructor(props) {
    super(props);

    this.mkXDomain();
    this.mkYDomain();
    this.mkXScale(this.setXDomain);
    this.mkYScale(this.setYDomain);
    this.mkSeries();
  }

  static defaultProps = CommonProps

  render() {

    const xScaleSet = this.setXScale;
    const yScaleSet = this.setYScale;
    const chartSeriesData = this.setSeries;

    var voronoi = (<Voronoi
      {...this.props}
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
          <ScatterPlot {...this.props}/>
          {voronoi}
        </Chart>
      </div>
    )
  }
}

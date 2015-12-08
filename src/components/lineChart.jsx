"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as TooltipSet
} from '../inherit/index';

import {
  series as series,
  LineChart as LineChart
} from 'react-d3-basic';

import {
  default as Voronoi
} from '../utils/voronoi';

import {
  isTooltipUpdate
} from '../utils/tooltipUpdate';


export default class LineChartContainer extends TooltipSet {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  render() {
    const {
      margins,
      width,
      height,
      onMouseOut,
      onMouseOver
    } = this.props;

    this.xRange = this.props.xRange || [0, width - margins.left - margins.right],
    this.yRange = this.props.yRange || [height - margins.top - margins.bottom, 0],
    this.xRangeRoundBands = this.props.xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1},

    this.mkXDomain();
    this.mkYDomain();
    this.mkXScale(this.setXDomain);
    this.mkYScale(this.setYDomain);
    this.mkSeries();

    const xScaleSet = this.setXScale;
    const yScaleSet = this.setYScale;
    const chartSeriesData = this.setSeries;

    var voronoi = (<Voronoi
      {...this.props}
      xScaleSet= {xScaleSet}
      yScaleSet= {yScaleSet}
      dataset= {chartSeriesData}
      focus={true}
      onMouseOver= {onMouseOver}
      onMouseOut= {onMouseOut}
      />)

    return (
      <g>
        <LineChart
          {...this.props}
          xRange= {this.xRange}
          yRange= {this.yRange}
          />
        {voronoi}
      </g>
    )
  }
}

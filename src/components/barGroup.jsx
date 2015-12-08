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
  Chart as Chart,
} from 'react-d3-core';

import {
  series as series,
  BarGroupChart as BarGroupChart
} from 'react-d3-basic';

import {
  isTooltipUpdate
} from '../utils/tooltipUpdate';

export default class BarGroupContainer extends TooltipSet {

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

    this.mkSeries();

    const chartSeriesData = this.setSeries;

    return (
      <Chart {...this.props}>
        <BarGroupChart
          {...this.props}
          xRange= {this.xRange}
          yRange= {this.yRange}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          />
      </Chart>
    )
  }
}

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
  BarChart as BarChart
} from 'react-d3-basic';

import {
  isTooltipUpdate
} from '../utils/tooltipUpdate';

export default class BarContainer extends TooltipSet {

  constructor(props) {
    super(props);
    const {
      margins,
      width,
      height
    } = this.props;

    this.state = {
      xRange: this.props.xRange || [0, width - margins.left - margins.right],
      yRange: this.props.yRange || [height - margins.top - margins.bottom, 0],
      xRangeRoundBands: this.props.xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1}
    }

    this.mkSeries();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  render() {
    const {
      onMouseOut,
      onMouseOver
    } = this.props;

    const chartSeriesData = this.setSeries;

    return (
      <Chart {...this.props}>
        <BarChart {...this.props} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
      </Chart>
    )
  }
}

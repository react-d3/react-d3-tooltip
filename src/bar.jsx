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
  BarChart as BarChart,
  series as series
} from 'react-d3-basic';

import {
  default as TooltipSet
} from './inherit/index';

import {
  default as Tooltip
} from './utils/tooltip';

import {
  default as CommonProps,
} from './commonProps';

export default class BarTooltip extends TooltipSet {

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
      xRangeRoundBands: this.props.xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1},
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    }

    this.mkSeries();
  }

  static defaultProps = CommonProps

  _mouseOver(d, i) {
    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }

  _mouseOut() {
    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  render() {
    const chartSeriesData = this.setSeries;

    var tooltip = (<Tooltip
      {...this.props}
      {...this.state}
      dataset= {chartSeriesData}
      />);

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <BarChart {...this.props} {...this.state} onMouseOver={this._mouseOver.bind(this)} onMouseOut={this._mouseOut.bind(this)}/>
        </Chart>
      </div>
    )
  }
}

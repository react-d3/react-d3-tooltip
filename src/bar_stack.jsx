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
  BarStackChart as BarStackChart,
  series as series
} from 'react-d3-basics';

import {
  default as TooltipSet
} from './inherit/index';

import {
  default as Tooltip
} from './utils/tooltip';

export default class BarStackTooltip extends TooltipSet {

  _mouseOver(d, dom) {

    d3.select(dom)
      .style("fill-opacity", 1);

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }

  _mouseOut(d, dom, opacity) {
    d3.select(dom)
      .style("fill-opacity", opacity);

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  render() {

    var chartSeriesData = series(this.props)

    var tooltip = <Tooltip {...this.props} {...this.state}/>

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <BarStackChart {...this.props} {...this.state} onMouseOver={this._mouseOver.bind(this)} onMouseOut={this._mouseOut.bind(this)}/>
        </Chart>
      </div>
    )
  }
}

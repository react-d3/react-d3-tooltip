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
  PieChart as PieChart,
} from 'react-d3-basic';

import {
  default as TooltipSet
} from './inherit/index';

import {
  default as Tooltip
} from './utils/tooltip';

export default class PieTooltip extends TooltipSet {


  _mouseOver(d, dom, arc) {

    d3.select(dom)
      .style("fill-opacity", 1);

    d3.select(dom)
      .transition()
      .duration(1000)
      .attr('d', arc);

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d.data
    })
  }

  _mouseOut(d, dom, opacity, arc) {
    d3.select(dom)
      .style("fill-opacity", opacity);

    d3.select(dom)
      .transition()
      .duration(1000)
      .attr('d', arc);

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  render() {

    var tooltip = <Tooltip {...this.props} {...this.state}/>


    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <PieChart {...this.props} {...this.state} onMouseOver={this._mouseOver.bind(this)} onMouseOut={this._mouseOut.bind(this)}/>
        </Chart>
      </div>
    )
  }
}

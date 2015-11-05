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

import {
  pieProps,
} from './commonProps';

export default class PieTooltip extends TooltipSet {
  constructor(props) {
    super(props);

    const {
      width,
      height
    } = this.props;

    const radius = this.props.radius || Math.min(width, height - 120) / 2;

    this.state = {
      radius: radius,
      outerRadius: radius - 10,
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    }
  }

  static defaultProps = pieProps

  _mouseOver(d, i) {
    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d.data
    })
  }

  _mouseOut(d) {
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

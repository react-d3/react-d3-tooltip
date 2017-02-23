"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  ChartPie,
  Pie
} from 'react-d3-shape';

import {Legend} from 'react-d3-core';
import Tooltip from './utils/tooltip';
import BarEvt from './inherit/barEvt';
import pieProps from './commonProps';

export default class PieTooltip extends BarEvt {
  constructor(props) {
    super(props);

  }

  static defaultProps = pieProps

  render() {

    const {
      width,
      height
    } = this.props;

    const radius = this.props.radius || Math.min(width - 120, height - 120) / 2;
    const outerRadius = radius - 10;

    return (
      <div>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        <Legend
          {...this.props}
        />
        <ChartPie
          {...this.props}
          >
          <Pie
            {...this.props}
            radius= {radius}
            outerRadius= {outerRadius}
            onMouseOver={this.mouseOver.bind(this)}
            onMouseOut={this.mouseOut.bind(this)}
            />
        </ChartPie>
      </div>
    )
  }
}

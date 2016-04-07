"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import { Legend } from 'react-d3-core';
import { Chart } from 'react-d3-shape';

import BarStackContainer from './charts/barStack';
import Tooltip from './utils/tooltip';
import Focus from './utils/focus';
import BarEvt from './inherit/barEvt';
import CommonProps from './commonProps';

export default class BarGroupTooltip extends BarEvt {

  constructor(props) {
    super(props);
  }

  static defaultProps = CommonProps

  render() {

    const {
      width,
      height
    } = this.props;

    return (
      <div>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        <Legend
          {...this.props}
        />
        <Chart
          {...this.props}
          {...this.state}
          stack= {true}
          >
          <BarStackContainer
            {...this.props}
            {...this.state}
            onClick= {this.props.onClick}
            onMouseOver= {this.mouseOver.bind(this)}
            onMouseOut= {this.mouseOut.bind(this)}
          />
        </Chart>
      </div>
    )
  }
}

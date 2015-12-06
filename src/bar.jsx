"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as Tooltip
} from './utils/tooltip';

import {
  default as Focus
} from './utils/focus';

import {
  default as BarContainer
} from './components/bar'

import {
  default as BarEvt
} from './inherit/barEvt'

import {
  default as CommonProps,
} from './commonProps';


export default class BarTooltip extends BarEvt {

  constructor(props) {
    super(props);
  }

  static defaultProps = CommonProps

  render() {
    const mouseOut = this.mouseOut.bind(this);
    const mouseOver = this.mouseOver.bind(this);
    
    return (
      <div>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        <BarContainer
          {...this.props}
          {...this.state}
          onMouseOut= {mouseOut}
          onMouseOver= {mouseOver}
        />
      </div>
    )
  }
}

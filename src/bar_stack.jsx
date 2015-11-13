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
  default as BarStackContainer
} from './components/barStack'

import {
  default as BarEvt
} from './inherit/barEvt'

import {
  default as CommonProps,
} from './commonProps';


export default class BarStackTooltip extends BarEvt {

  constructor(props) {
    super(props);
  }

  static defaultProps = CommonProps

  render() {
    const mouseOut = this.mouseOut.bind(this);
    const mouseOver = this.mouseOver.bind(this);

    var tooltip = (<Tooltip
      {...this.props}
      {...this.state}
      />);

    return (
      <div>
        {tooltip}
        <BarStackContainer
          {...this.props}
          {...this.state}
          onMouseOut= {mouseOut}
          onMouseOver= {mouseOver}
        />
      </div>
    )
  }
}

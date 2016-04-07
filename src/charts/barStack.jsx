"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid
} from 'react-d3-core';

import { BarStack } from 'react-d3-shape';
import CommonProps from '../commonProps';
import { isTooltipUpdate } from '../utils/tooltipUpdate';

export default class BarStackContainer extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  static defaultProps = CommonProps

  render() {

    const {
      onMouseOver,
      onMouseOut,
      onClick,
      showXGrid,
      showYGrid
    } = this.props;

    var xgrid, ygrid;

    if (showXGrid) xgrid = <Xgrid {...this.props}/>
    if (showYGrid) ygrid = <Ygrid {...this.props}/>

    return (
      <g>
        {xgrid}
        {ygrid}
        <Xaxis {...this.props}/>
        <Yaxis {...this.props}/>
        <BarStack
          {...this.props}
          onClick= {onClick}
          onMouseOver= {onMouseOver}
          onMouseOut= {onMouseOut}
        />
      </g>
    )
  }
}

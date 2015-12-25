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

import {Line} from 'react-d3-shape';
import Voronoi from '../utils/voronoi';
import CommonProps from '../commonProps';
import {isTooltipUpdate} from '../utils/tooltipUpdate';

export default class LineVoronoi extends Component {

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
      showXGrid,
      showYGrid
    } = this.props;


    var xgrid, ygrid;

    if(showXGrid) xgrid = <Xgrid {...this.props}/>
    if(showYGrid) ygrid = <Ygrid {...this.props}/>

    var voronoi = (
      <Voronoi
        {...this.props}
        onMouseOver= {onMouseOver}
        onMouseOut= {onMouseOut}
        />
    )

    return (
      <g>
        {xgrid}
        {ygrid}
        <Xaxis {...this.props}/>
        <Yaxis {...this.props}/>
        <Line {...this.props}/>
        {voronoi}
      </g>
    )
  }
}

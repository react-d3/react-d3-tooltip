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
  Chart as Chart,
} from 'react-d3-core';

import {
  default as Focus
} from './utils/focus';

import {
  default as LineChartVoronoi
} from './components/lineChart'

import {
  default as VoronoiEvt
} from './inherit/voronoiEvt'

import {
  default as CommonProps,
} from './commonProps';

export default class LineTooltip extends VoronoiEvt {

  constructor(props) {
    super(props);
  }

  static defaultProps = CommonProps

  render() {

    const {
      focus
    } = this.props;
    var focusDom;

    var tooltip = (<Tooltip
      {...this.props}
      {...this.state}
      />);

    var LineChart = (
      <LineChartVoronoi
        {...this.props}
        {...this.state}
        onMouseOver= {this.voronoiMouseOver.bind(this)}
        onMouseOut= {this.voronoiMouseOut.bind(this)}
        />
    )

    if(focus) {
      focusDom = <Focus {...this.props} {...this.state}/>
    }

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          {LineChart}
          {focusDom}
        </Chart>
      </div>
    )
  }
}

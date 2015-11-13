"use strict"

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  scale,
  xDomainCount,
  yDomainCount,
} from 'react-d3-core';

import {
  series as series
} from 'react-d3-basic';


export default class TooltipSet extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.func,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.string,
    xRangeRoundBands: PropTypes.object,
    y: PropTypes.func,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string
  }

  mkXDomain() {
    return this.setXDomain = xDomainCount(this.props);
  }

  mkYDomain(stack) {
    return this.setYDomain = yDomainCount(this.props, stack);
  }

  mkXScale(xDomain) {
    const {
      data,
      xScale,
    } = this.props;

    const {
      xRange,
      xRangeRoundBands
    } = this.state;

    var newXScale = {
      scale: xScale,
      range: xRange,
      domain: xDomain,
      rangeRoundBands: xRangeRoundBands
    };

    return this.setXScale = scale(newXScale);
  }

  mkYScale(yDomain) {
    const {
      data,
      yScale
    } = this.props;

    const {
      yRange,
      yRangeRoundBands
    } = this.state;

    var newYScale = {
      scale: yScale,
      range: yRange,
      domain: yDomain,
      rangeRoundBands: yRangeRoundBands
    }

    return this.setYScale = scale(newYScale);
  }

  mkSeries() {
    return this.setSeries = series(this.props);
  }

}

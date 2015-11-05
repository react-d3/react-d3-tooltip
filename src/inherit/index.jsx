"use sctrict"

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

  voronoiMouseOut(d, i, focus) {
    if(focus)
      focus.attr("transform", "translate(-100,-100)");

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  voronoiMouseOver(d, i, xScaleSet, yScaleSet, focus, stack) {
    var newY = stack? yScaleSet(d.y + d.y0): yScaleSet(d.y);

    if(focus) {
      var fDom = d3.select('.react-d3-basics__voronoi_utils__focus');

      fDom.attr("transform", "translate(" + xScaleSet(d.x) + "," + newY + ")");

      fDom.select(".focus__inner_circle")
        .style('fill', d.color)

      fDom.select(".focus__line")
        .style('stroke', "#CCC")

      fDom.select(".focus__outer_circle")
        .style('fill', 'none')
        .style('stroke', "#CCC")
        .style('stroke-width', 3)
    }

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }

}

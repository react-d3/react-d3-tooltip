"use sctrict"

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  scale as scale
} from 'react-d3-core';

import {
  series as series
} from 'react-d3-basic';

export default class TooltipSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    }
  }

  mkXScale() {
    const {
      data,
      xScale,
      xRange,
      xDomain,
      xRangeRoundBands,
    } = this.props;

    var newXScale = {
      scale: xScale,
      range: xRange,
      domain: xDomain,
      rangeRoundBands: xRangeRoundBands
    };

    return scale(newXScale);
  }

  mkYScale() {
    const {
      data,
      yScale,
      yRange,
      yDomain,
      yRangeRoundBands,
    } = this.props;

    var newYScale = {
      scale: yScale,
      range: yRange,
      domain: yDomain,
      rangeRoundBands: yRangeRoundBands
    }

    return scale(newYScale);
  }

  mkSeries() {
    return series(this.props);
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

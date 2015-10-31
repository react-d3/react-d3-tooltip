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

  voronoiMouseOut(e, focus) {
    if(focus){
      var focusDom = d3.select(".react-d3-basics__voronoi_utils__focus");

      focusDom.attr("transform", "translate(-100,-100)");
    }

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  voronoiMouseOver(e, focus, stack) {
    var d = JSON.parse(e.target.getAttribute('data-react-d3-tooltip'));
    var d_origin = JSON.parse(e.target.getAttribute('data-react-d3-tooltip-origin'));
    var newY = stack? (d.y1): (d.y);

    if(focus) {
      var focusDom = d3.select(".react-d3-basics__voronoi_utils__focus")

      focusDom.attr("transform", "translate(" + d.x + "," + newY + ")");

      focusDom.select(".focus__inner_circle")
        .style('fill', d.color)

      focusDom.select(".focus__line")
        .style('stroke', '#CCC')

      focusDom.select(".focus__outer_circle")
        .style('fill', 'none')
        .style('stroke', '#CCC')
        .style('stroke-width', 3)
    }

    this.setState({
      xTooltip: e.clientX,
      yTooltip: e.clientY,
      contentTooltip: d_origin
    })
  }

}

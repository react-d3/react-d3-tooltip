"use sctrict"

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  scale as scale
} from 'react-d3-core';

export default class TooltipSet extends Component {
  constructor(props) {
    super(props);

    var xScale = {
      scale: props.xScale,
      range: props.xRange,
      domain: props.xDomain,
      rangeRoundBands: props.xRangeRoundBands
    }

    var yScale = {
      scale: props.yScale,
      range: props.yRange,
      domain: props.yDomain,
      rangeRoundBands: props.yRangeRoundBands
    }

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null,
      xScaleSet: scale(xScale),
      yScaleSet: scale(yScale)
    }
  }

  voronoiMouseOut(d, focus) {
    if(focus)
      focus.attr("transform", "translate(-100,-100)");

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  voronoiMouseOver(d, focus, stack) {
    const {
      xScaleSet,
      yScaleSet
    } = this.state;

    var newY = stack? yScaleSet(d.y + d.y0): yScaleSet(d.y);

    if(focus) {
      focus.attr("transform", "translate(" + xScaleSet(d.x) + "," + newY + ")");

      focus.select(".focus__inner_circle")
        .style('fill', d.color)

      focus.select(".focus__line")
        .style('stroke', d.color)

      focus.select(".focus__outer_circle")
        .style('fill', 'none')
        .style('stroke', d.color)
        .style('stroke-width', 3)
    }

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }

}

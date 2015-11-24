"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react'

import d3 from 'd3';

export default class VoronoiEvt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusX: -100,
      focusY: -100,
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
  }

  voronoiMouseOut(d, i) {

    this.setState({
      focusX: -100,
      focusY: -100,
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  voronoiMouseOver(d, i, xScaleSet, yScaleSet, stack) {
    var newY = stack? yScaleSet(d.y + d.y0): yScaleSet(d.y);

    this.setState({
      focusX: xScaleSet(d.x),
      focusY: newY,
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }
}

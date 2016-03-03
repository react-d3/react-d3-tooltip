"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react'

export default class VoronoiEvt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusX: -10000,
      focusY: -10000,
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
  }

  voronoiMouseOut(e, d) {
    this.setState({
      focusX: -10000,
      focusY: -10000,
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  voronoiMouseOver(e, d, xScaleSet, yScaleSet, stack) {
    var newY = stack? yScaleSet(d.y + d.y0): yScaleSet(d.y);
    const contentTooltip = {title: d.x.toString(), fieldTitle: d.name.toString(), value: d.y.toString(), color: d.color};

    this.setState({
      focusX: xScaleSet(d.x),
      focusY: newY,
      xTooltip: e.clientX,
      yTooltip: e.clientY,
      contentTooltip: contentTooltip
    })
  }
}

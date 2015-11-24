"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react'

import d3 from 'd3';

export default class BarEvt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
  }

  mouseOut(d, i) {

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  mouseOver(d, i) {
    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }
}

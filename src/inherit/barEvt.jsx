"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react'

export default class BarEvt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
  }

  mouseOut(e, d) {

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  mouseOver(e, d) {
    const customContentToolTip = this.props.contentTooltip
    const contentTooltip = customContentToolTip? customContentToolTip(d): {title: d.name, value:d.y, fieldTitle: d.x, color: d.color};
    this.setState({
      xTooltip: e.clientX,
      yTooltip: e.clientY,
      contentTooltip: contentTooltip
    })
  }
}

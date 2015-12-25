"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

export default class Focus extends Component {
  constructor (props) {
    super(props);
  }

  _mkFocus(dom) {
    const {
      height,
      focusX,
      focusY,
      contentTooltip
    } = this.props;

    var focusDom = d3.select(dom)
      .append("g")
        .attr("transform", `translate(${focusX},${focusY})`)
        .attr("class", "react-d3-basics__voronoi_utils__focus");

    focusDom.append("circle")
      .attr("class", "focus__inner_circle")
      .attr("r", 3)
      .style('fill', () => {return contentTooltip? contentTooltip.color: '#CCC'});

    focusDom.append("circle")
      .attr("class", "focus__outer_circle")
      .attr("r", 7)
      .style('fill', 'none')
      .style('stroke', "#CCC")
      .style('stroke-width', 3);

    focusDom.append("line")
      .attr("class", "focus__line")
      .attr("x1", 0)
      .attr("y1", -height)
      .attr("x2", 0)
      .attr("y2", height)
      .style('stroke', "#CCC")
      .style("stroke-width", 2)
      .style("stroke-opacity", 0.5)

    return focusDom;
  }

  render() {
    var focusDom = ReactFauxDOM.createElement('g');
    focusDom.setAttribute("class", "react-d3-basics__voronoi_utils__focus")

    var focus = this._mkFocus(focusDom);

    return focus.node().toReact();
  }
}

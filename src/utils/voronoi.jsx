"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as d3
} from 'd3';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class Voronoi extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    initVoronoi: d3.geom.voronoi,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  _mkVoronoi(dom) {
    const {
      x,
      y,
      xScaleSet,
      yScaleSet,
      onMouseOver,
      onMouseOut,
      focus,
      stack,
      height
    } = this.props;

    // because d3.geom.voronoi does not handle coincident points (and this data from the government comes pre-rounded to a tenth of a degree), d3.nest is used to collapse coincident points before constructing the Voronoi.
    // see example: http://bl.ocks.org/mbostock/8033015

    if(stack) {
      const _setStack = this._setStack();
      var dataset = _setStack(this.props.dataset);
    }else {
      var dataset =  this.props.dataset;
    }

    var nestData = d3.nest()
      .key((d) => { return d.x + "," + d.y + "," + d.y0; })
      .rollup((v) => { return v[0]; })
      .entries(d3.merge(dataset.map((d) => { return d.data; })))
      .map((d) => { return d.values; })

    var voronoiPolygon = this._setGeomVoronoi().call(this, nestData);

    if(focus)
      var focusDom = this._mkFocus(dom);

    // make voronoi
    var voronoiChart = d3.select(dom);

    var voronoiPath = voronoiChart.selectAll('path')
      .data(voronoiPolygon)
    .enter().append("path")
      .attr("d", (d) => { return "M" + d.join("L") + "Z"; })
      .datum((d) => { return d.point; })
      .style('fill', 'none')
      .style('pointer-events', 'all');

    voronoiPath.each(function(p) {
      var evtObj = {
        data: p,
        xScaleSet: xScaleSet,
        yScaleSet: yScaleSet,
        focus: focus,
        stack: stack
      }

      this.addEventListener('mouseover', (e, d) => {
        return focus?
          onMouseOver(e, d.data, d.xScaleSet, d.yScaleSet, d.focus, d.stack):
          onMouseOver(e, d.data, d.xScaleSet, d.yScaleSet)
        }, evtObj)
      this.addEventListener('mouseout', (e, d) => {
        return focus?
          onMouseOut(e, d.data, d.xScaleSet, d.yScaleSet, d.focus, d.stack):
          onMouseOut(e, d.data, d.xScaleSet, d.yScaleSet)
        }, evtObj)
    })

    return voronoiChart;
  }

  _setStack () {
    return d3.layout.stack()
      .values((d) => { return d.data; });
  }

  _mkFocus(dom) {
    const {
      height
    } = this.props;

    var focusDom = d3.select(dom)
      .append("g")
        .attr("transform", "translate(-100,-100)")
        .attr("class", "react-d3-basics__voronoi_utils__focus");

    focusDom.append("circle")
      .attr("class", "focus__inner_circle")
      .attr("r", 3);

    focusDom.append("circle")
      .attr("class", "focus__outer_circle")
      .attr("r", 7);

    focusDom.append("line")
      .attr("class", "focus__line")
      .attr("x1", 0)
      .attr("y1", -height)
      .attr("x2", 0)
      .attr("y2", height)
      .style("stroke-width", 2)
      .style("stroke-opacity", 0.5)
  }

  _setGeomVoronoi () {
    const {
      width,
      height,
      margins,
      initVoronoi,
      x,
      xScaleSet,
      y,
      yScaleSet,
      stack
    } = this.props;

    var voronoi = initVoronoi()
      .x((d) => { return xScaleSet(d.x); })
      .y((d) => { return stack ? yScaleSet(d.y + d.y0): yScaleSet(d.y); })
      .clipExtent([
        [-margins.left, -margins.top],
        [width + margins.right, height + margins.bottom]
      ]);

    return voronoi;
  }

  render() {

    var voronoiPath = ReactFauxDOM.createElement('g');
    voronoiPath.setAttribute("class", "react-d3-basics__voronoi_utils")
    var voronoi = this._mkVoronoi(voronoiPath);

    return voronoi.node().toReact();
  }
}

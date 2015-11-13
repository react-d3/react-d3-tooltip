"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

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

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _mkVoronoi(dom) {
    const {
      x,
      y,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver,
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

    // make voronoi
    var voronoiChart = d3.select(dom);

    var voronoiPath = voronoiChart.selectAll('path')
      .data(voronoiPolygon)
    .enter().append("path")
      .attr("d", (d) => { return "M" + d.join("L") + "Z"; })
      .on("mouseover", (d, i) => {
        onMouseOver(d, i, xScaleSet, yScaleSet, stack)
      })
      .on("mouseout", (d, i) => {
        onMouseOut(d, i, stack)
      })
      .datum((d) => {return d.point; })
      .style('fill', 'none')
      .style('pointer-events', 'all');

    return voronoiChart;
  }

  _setStack () {
    return d3.layout.stack()
      .values((d) => { return d.data; });
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

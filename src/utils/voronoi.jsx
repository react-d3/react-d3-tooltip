"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';
import D3Voronoi from 'd3-voronoi'
import D3Selection from 'd3-selection'
import D3Collection from 'd3-collection'
import D3Array from 'd3-array'
import ReactFauxDOM from 'react-faux-dom';
import {series} from 'react-d3-shape';

export default class Voronoi extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  triggerOut(d, e) {
    this.props.onMouseOut(e, d)
  }

  triggerOver(d, e) {
    const {
      xScaleSet,
      yScaleSet,
      stack
    } = this.props

    this.props.onMouseOver(e, d, xScaleSet, yScaleSet, stack)
  }

  _mkVoronoi() {
    const {
      x,
      y,
      stack,
      height
    } = this.props;

    // because d3.geom.voronoi does not handle coincident points (and this data from the government comes pre-rounded to a tenth of a degree), d3.nest is used to collapse coincident points before constructing the Voronoi.
    // see example: http://bl.ocks.org/mbostock/8033015
    var mkSeries = series(this.props);

    if(stack) {
      const _setStack = this._setStack();
      var dataset = _setStack(mkSeries);
    }else {
      var dataset = mkSeries;
    }

    var nestData = d3.nest()
      .key((d) => { return d.x + "," + d.y + "," + d.y0; })
      .rollup((v) => { return v[0]; })
      .entries(d3.merge(dataset.map((d) => { return d.data; })))
      .map((d) => { return d.values; })

    var voronoiPolygon = this._setGeomVoronoi().call(this, nestData);

    return (
      <g>
        {
          voronoiPolygon.map((area) => {
            return (
              <path
                d={"M" + area.join("L") + "Z"}
                onMouseOut={this.triggerOut.bind(this, area.point)}
                onMouseOver={this.triggerOver.bind(this, area.point)}
                style={{fill: 'none', pointerEvents: 'all'}}
                />
            )
          })
        }
      </g>
    )
  }

  _setStack () {
    const{
      chartSeries
    } = this.props;

    var buildOut = function(len) {
      // baseline for positive and negative bars respectively.
      var currentXOffsets = [];
      var currentXIndex = 0;

      return function(d, y0, y){

        if(currentXIndex++ % len === 0){
          currentXOffsets = [0, 0];
        }

        if(y >= 0) {
          d.y0 = currentXOffsets[1];
          d.y = y;
          currentXOffsets[1] += y;
        } else {
          d.y0 = currentXOffsets[0] + y;
          d.y = -y;
          currentXOffsets[0] += y;
        }

      }
    }

    return d3.layout.stack()
      .values((d) => { return d.data; })
      .out(buildOut(chartSeries.length));
  }

  _setGeomVoronoi () {
    const {
      width,
      height,
      margins,
      x,
      xScaleSet,
      y,
      yScaleSet,
      stack
    } = this.props;

    var voronoi = d3.geom.voronoi()
      .x((d) => { return xScaleSet(d.x); })
      .y((d) => { return stack ? yScaleSet(d.y + d.y0): yScaleSet(d.y); })
      .clipExtent([
        [-margins.left, -margins.top],
        [width + margins.right, height + margins.bottom]
      ]);

    return voronoi;
  }

  render() {
    var voronoi = this._mkVoronoi();

    return (
      <g className="react-d3-basics__voronoi_utils">
        {voronoi}
      </g>
    );
  }
}

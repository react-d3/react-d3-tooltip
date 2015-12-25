"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {Legend} from 'react-d3-core';
import {Chart} from 'react-d3-shape';
import Tooltip from './utils/tooltip';
import Focus from './utils/focus';
import AreaStackVoronoi from './charts/areaStack';
import VoronoiEvt from './inherit/voronoiEvt';
import CommonProps from './commonProps';

export default class LineTooltip extends VoronoiEvt {

  constructor(props) {
    super(props);
  }

  static defaultProps = CommonProps

  render() {

    const {
      width,
      height,
      focus
    } = this.props;

    var focusDom;

    if(focus) {
      focusDom = <Focus {...this.props} {...this.state}/>
    }

    return (
      <div>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        <Legend
          {...this.props}
        />
        <Chart
          {...this.props}
          {...this.state}
          stack= {true}
          >
          <AreaStackVoronoi
            {...this.props}
            {...this.state}
            stack= {true}
            onMouseOver= {this.voronoiMouseOver.bind(this)}
            onMouseOut= {this.voronoiMouseOut.bind(this)}
          />
          {focusDom}
        </Chart>
      </div>
    )
  }
}

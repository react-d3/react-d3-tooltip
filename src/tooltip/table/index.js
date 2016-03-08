"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class SimpleTooltipStyle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const contentTooltip = this.props.contentTooltip;

    var cv = Object.keys(contentTooltip).map((d, i) => {
      if(d === 'color') {
        var colorStyle = {
          backgroundColor: contentTooltip[d],
          color: '#FFF'
        };
      }

      var trStyle = {
        display: 'table-row',
        backgroundImage: 'linear-gradient(#FFF, #EEE)',
        padding: '3px',
        height: '30px'
      }

      var tdStyle = {
        display: 'table-cell',
        padding: '3px',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        border: '1px solid #D3D3D3'
      }

      var tdHeadStyle = {
        display: 'table-cell',
        padding: '3px',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        border: '1px solid #D3D3D3',
        backgroundColor: '#555',
        color: '#FFF',
        textTransform: 'capitalize'
      }

      if(colorStyle) {
        var tdColorStyle = Object.assign(tdStyle, colorStyle);
      }

      return (
        <div className= "tooltip_tr" style={trStyle} key={i}>
          <div className= "tooltip_td" style={tdHeadStyle} key={i}>
            {d}
          </div>
          <div className= "tooltip_td" style={colorStyle? tdColorStyle: tdStyle} key={i.i}>
            {contentTooltip[d]}
          </div>
        </div>
      )
    })

    return (
      <div>
        {cv}
      </div>
    )
  }
}

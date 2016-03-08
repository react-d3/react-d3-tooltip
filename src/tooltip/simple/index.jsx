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

  static propTypes = {
    title: React.PropTypes.any,
    color: React.PropTypes.any,
    fieldTitle: React.PropTypes.string,
    value: React.PropTypes.any
  }

  render() {
    const {
      title,
      color,
      fieldTitle,
      value
    } = this.props.contentTooltip;

    const tooltip_bkg_style = {
      backgroundColor: 'rgba(50, 50, 50, 0.8)',
      borderRadius: '4px',
      padding: '10px',
      border: '0'
    }

    const tooltip_title = {
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '5px'
    }

    const tooltip_content = {
      color: 'white'
    }

    return (
      <div className= "tooltip_bkg" style={tooltip_bkg_style} key="tooltip">
        <div style={tooltip_title}>{title}</div>
        <div style={tooltip_content}>
          {fieldTitle}: {value}
        </div>
      </div>
    )
  }
}

"use strict";
// Please check bottom propTypes to know which props is accepted.
import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Tooltip extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    gravity: 's',
    dist: 15
  }

  static propTypes = {
    contentTooltip: React.PropTypes.shape({
      title: React.PropTypes.any,
      color: React.PropTypes.any,
      fieldTitle: React.PropTypes.string,
      value: React.PropTypes.any
    })
  }

  _mkContent() {
    const {
      contentTooltip
    } = this.props;
    const title = contentTooltip.title;
    const fieldTitle = contentTooltip.fieldTitle;
    const value = contentTooltip.value;
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

  render() {
    const {
      xTooltip,
      yTooltip,
      contentTooltip,
      dist
    } = this.props;

    var style = {
      left: xTooltip? xTooltip + dist: -100,
      top: yTooltip? yTooltip + dist: -100,
      position: 'fixed'
    }

    if(contentTooltip) {
      var cvContent = this._mkContent();
    }

    var tableStyle = {
      display: 'table',
      borderStyle: 'solid',
      borderWidth: '1px',
      boxSizing: 'border-box'
    };

    return (
      <div
        style= {style}
        className= "react-d3-basics__tooltip_utils"
        >
        <div className= "tooltip_table">
          {cvContent}
        </div>
      </div>
    )
  }
}
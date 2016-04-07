"use strict";
// Please check bottom propTypes to know which props is accepted.
import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as TableTooltipStyle
} from '../tooltip/table';


export default class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    gravity: 's',
    dist: 15
  }

  render() {
    const {
      xTooltip,
      yTooltip,
      contentTooltip,
      dist
    } = this.props;

    let contentTooltipTmpl;

    var style = {
      left: xTooltip ? xTooltip + dist : -10000,
      top: yTooltip ? yTooltip + dist : -10000,
      position: 'fixed'
    }

    if (contentTooltip) {
      if (this.props.children) {
        contentTooltipTmpl = React.cloneElement(this.props.children, { contentTooltip: contentTooltip });
      } else {
        contentTooltipTmpl = <TableTooltipStyle contentTooltip={contentTooltip}/>;
      }
    }

    return (
      <div
        style= {style}
        className= "react-d3-basics__tooltip_utils"
        >
        {contentTooltipTmpl}
      </div>
    )
  }
}

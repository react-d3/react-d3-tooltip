"use strict";

export function isTooltipUpdate(nextProps, nextState, that) {
  if(nextProps.xTooltip !== that.props.xTooltip ||
    nextProps.yTooltip !== that.props.yTooltip)
    return true;
  else
    return false;
}

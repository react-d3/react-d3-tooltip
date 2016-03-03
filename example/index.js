import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import Container from './container'

import AreaStack from './src/tooltip_area_stack'
import AreaStackNegative from './src/tooltip_area_stack_negative'
import Bar from './src/tooltip_bar'
import BarGroup from './src/tooltip_bar_group'
import BarStack from './src/tooltip_bar_stack'
import Line from './src/tooltip_line'
import LineMulti from './src/tooltip_line_multi'
import Pie from './src/tooltip_pie'
import Scatter from './src/tooltip_scatter'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
        

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/example" component={Container}>
      <IndexRedirect to="area_stack"/>
    	<Route path="bar" component={Bar}/>
      <Route path="area_stack" component={AreaStack}/>
      <Route path="area_stack_negative" component={AreaStackNegative}/>
      <Route path="bar_group" component={BarGroup}/>
      <Route path="bar_stack" component={BarStack}/>
      <Route path="line_multi" component={LineMulti}/>
      <Route path="line" component={Line}/>
      <Route path="pie" component={Pie}/>
      <Route path="scatter" component={Scatter}/>    
    </Route>
  </Router>
), document.getElementById('root'))
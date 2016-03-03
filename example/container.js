import React, { Component } from 'react'
import {Nav, NavItem} from 'react-bootstrap'

export default class ContainerExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		const route = this.props.routes[1].path || 'area_stack'

		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/example">
				        React-d3 tooltip
				      </a>
				    </div>
				  </div>
				</nav>
				<div style={{marginTop: '50px', padding: '30px'}}>
					<Nav bsStyle="pills" justified activeKey={route}>
	          <NavItem eventKey="area_stack" href="/example/area_stack">Area Stack</NavItem>
	          <NavItem eventKey="area_stack_negative" href="/example/area_stack_negative">Area Stack negative</NavItem>
	          <NavItem eventKey="bar" href="/example/bar">Bar</NavItem>
	          <NavItem eventKey="bar_group" href="/example/bar_group">Bar Group </NavItem>
	          <NavItem eventKey="bar_stack" href="/example/bar_stack">Bar Stack</NavItem>
	          <NavItem eventKey="line" href="/example/line">Line</NavItem>
	          <NavItem eventKey="line_multi" href="/example/line_multi">Line Multiple</NavItem>
	          <NavItem eventKey="pie" href="/example/pie">Pie</NavItem>
	          <NavItem eventKey="scatter" href="/example/scatter">Scatter</NavItem>
	        </Nav>
	      </div>
				{this.props.children}
			</div>
		)
	}
}
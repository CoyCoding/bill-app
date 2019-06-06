import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');
import FontAwesome from 'react-fontawesome';

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<nav id="menu">
				<div className="link">
					<div className="icon">
						<FontAwesome className="fa" name="far fa-credit-card" />
					</div>
					<div className="text">spend</div>
				</div>
				<div className="link">
					<div className="icon">
						<i className="material-icons">attach_money</i>
					</div>
					<div className="text">save</div>
				</div>
				<div className="link">
					<div className="icon">
						<FontAwesome className="fa" name="fas fa-cogs" />
					</div>
					<div className="text">config</div>
				</div>
			</nav>
		);
	}
}

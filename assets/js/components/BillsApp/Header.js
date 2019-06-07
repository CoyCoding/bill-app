import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<header>
				<h2>Bills App</h2>
				<i onClick={this.props.clickedAddBillBtn}>+</i>
			</header>
		);
	}
}

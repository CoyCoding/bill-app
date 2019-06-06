import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');
import Header from './Header';
import AllBills from './AllBills';
import Menu from './Menu';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div id={'bills-app'}>
				<Header />
				<AllBills />
				<Menu />
			</div>
		);
	}
}

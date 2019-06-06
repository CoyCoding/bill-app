import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		const bills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

		return bills.map(bill => {
			return (
				<li className="bill" key={bill}>
					<div className="company">
						<div className="logo">
							<img src="img/billsapp/logo.png" />
						</div>
					</div>
					<div className="title">Coding Phase</div>
					<div className="price">-$29.99</div>
				</li>
			);
		});
	};

	render() {
		return (
			<section id={'all-bills'}>
				<div className="container">
					<div className="total-bills">
						<div className="text">Total Amount:</div>
						<div className="number">$700:</div>
					</div>
					<div>
						<ul className="bill-list">{this.showAllBills()}</ul>
					</div>
				</div>
			</section>
		);
	}
}

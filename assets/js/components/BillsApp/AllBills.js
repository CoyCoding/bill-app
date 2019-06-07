import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		const bills = this.props.allBills;
		if (bills.length > 0) {
			return bills.map((bill, index) => {
				console.log(bills.length);
				return (
					<li className="bill" key={index}>
						<div className="company">
							<div className="logo">
								<img src="img/billsapp/logo.png" />
							</div>
						</div>
						<div className="title">{bill.business_name}</div>
						<div className="price">${bill.price}</div>
						<div className="buttons">
							<div className="paid">pay</div>
							<div className="delete">delete</div>
						</div>
					</li>
				);
			});
		} else {
			return (
				<li className="bill">
					<div className="no-bills">No bills</div>
				</li>
			);
		}
	};

	billsTotaler = () => {
		const bills = this.props.allBills;
		let total = 0;
		if (bills.length > 0) {
			for (let i = 0; i < bills.length; i++) {
				total += parseInt(bills[i].price);
			}
			return total;
		} else {
			return 0;
		}
	};

	render() {
		return (
			<section id={'all-bills'}>
				<div className="container">
					<div className="total-bills">
						<div className="text">Total Amount:</div>
						<div className="number">${this.billsTotaler()}</div>
					</div>
					<div>
						<ul className="bill-list">{this.showAllBills()}</ul>
					</div>
				</div>
			</section>
		);
	}
}

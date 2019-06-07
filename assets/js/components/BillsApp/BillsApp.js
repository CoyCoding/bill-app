import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');
import Header from './Header';
import AllBills from './AllBills';
import Menu from './Menu';
import AddBill from './AddBill';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			allBills: [{ business_name: 'test', price: 44 }]
		};
	}

	clickedAddBillBtn = () => {
		this.setState({
			addBillOpen: !this.state.addBillOpen
		});
	};

	saveBill = bill => {
		const newBills = update(this.state.allBills, {
			$push: [bill]
		});
		this.setState({
			allBills: newBills,
			addBillOpen: !this.state.addBillOpen
		});
	};

	render() {
		return (
			<div id={'bills-app'}>
				<Header clickedAddBillBtn={this.clickedAddBillBtn} />
				<AllBills allBills={this.state.allBills} />
				<AddBill
					saveBill={this.saveBill}
					addBillOpen={this.state.addBillOpen}
				/>
				<Menu />
			</div>
		);
	}
}

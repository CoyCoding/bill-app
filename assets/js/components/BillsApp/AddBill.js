import React, { Component } from 'react';
import update from 'immutability-helper';
var classNames = require('classnames');

export default class AddBill extends Component {
	constructor() {
		super();
		this.state = {
			business_name: ' ',
			price: ''
		};
	}

	inputChange = () => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		this.setState({
			[name]: value
		});
	};
	handleFormSubmit = () => {
		event.preventDefault();
		this.props.saveBill(this.state);
		this.setState({
			business_name: '',
			price: ''
		});
	};

	render() {
		return (
			<section
				id="add-bill"
				className={`${this.props.addBillOpen ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form onSubmit={this.handleFormSubmit}>
						<div className="form-group">
							<label htmlFor="business_name">Business Name</label>
							<input
								onChange={this.inputChange}
								type="text"
								name="business_name"
								id="business-name"
								value={this.state.business_name}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="price">Price</label>
							<input
								onChange={this.inputChange}
								type="text"
								name="price"
								placeholder="0"
								id="price"
								value={this.state.price}
							/>
						</div>
						<button type="submit">Save</button>
					</form>
				</div>
			</section>
		);
	}
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addChannel } from '../../actions/channelActions';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateChannel extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			link: '',
			rating: '',
			clearInput: false,
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
		if (nextProps.tools.clearInput) {
			this.setState({
				name: '',
				link: '',
				rating: '',
				errors: {}
			});
		}
		this.props.tools.clearInput = false;
	}

	onSubmit(e) {
		e.preventDefault();

		const channelData = {
			name: this.state.name,
			link: this.state.link,
			rating: this.state.rating === '' ? '2' : this.state.rating //if empty - assign default middle rating
		};

		this.props.addChannel(channelData);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors } = this.state;
		// Select rating options for channel
		const ratingOptions = [
			{ label: '* Choose Channels Rating ', value: 0 },
			{ label: 'Low', value: 1 },
			{ label: 'Middle', value: 2 },
			{ label: 'High', value: 3 }
		];

		return (
			<div className='create-profile'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 m-auto'>
							<Link to='/channels' className='btn btn-light'>
								Go Back
							</Link>
							<h1 className='display-4 text-center'>Add channel</h1>
							<small className='d-block pb-3'>* = required fields</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder='* Channels Name'
									name='name'
									value={this.state.name}
									onChange={this.onChange}
									error={errors.name}
									info='Please, add a Name to new Channel'
								/>
								<TextFieldGroup
									placeholder='Link'
									name='link'
									value={this.state.link}
									onChange={this.onChange}
									error={errors.link}
									info='add a link to streaming service'
								/>
								<SelectListGroup
									placeholder='Rating'
									name='rating'
									value={this.state.rating}
									onChange={this.onChange}
									options={ratingOptions}
									error={errors.rating}
									info='select an your rating to new channel'
								/>

								<input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	tools: state.tools,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ addChannel }
)(withRouter(CreateChannel));

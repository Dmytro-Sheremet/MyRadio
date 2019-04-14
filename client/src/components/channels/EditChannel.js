import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { deleteChannel } from '../../actions/channelActions';

class EditChannel extends Component {
	onDeleteClick(id) {
		this.props.deleteChannel(id);
	}

	render() {
		const { channel } = this.props;
		return (
			<div className='card card-body bg-light mb-2'>
				<div className='row'>
					<div className=''>
						<audio src={channel.link} controls />
					</div>
					<div className=''>
						<h3>{channel.name}</h3>
					</div>
					<div className=''>
						<h4>{channel.rating}</h4>
					</div>
					<button onClick={this.onDeleteClick.bind(this, channel._id)} type='button' className='btn btn-danger mr-1'>
						<i className='fas fa-times' />
					</button>
				</div>
				<div className='row'>
					<div className='text-muted'>{channel.link}</div>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ deleteChannel }
)(EditChannel);

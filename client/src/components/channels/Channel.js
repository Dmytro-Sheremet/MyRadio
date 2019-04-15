import React, { Component } from 'react';

class Channel extends Component {
	rating = num => {
		if (num === 3) {
			return (
				<div>
					<i className='fas fa-star' />
					<i className='fas fa-star' />
					<i className='fas fa-star' />
				</div>
			);
		} else if (num === 2) {
			return (
				<div>
					<i className='fas fa-star' />
					<i className='fas fa-star' />
				</div>
			);
		} else {
			return (
				<div>
					<i className='fas fa-star' />
				</div>
			);
		}
	};

	render() {
		const { channel } = this.props;

		return (
			<div className='row'>
				<div className='col-4 '>
					<h5>{channel.name}</h5>
				</div>
				<div className='col-6'>
					<audio src={channel.link} controls />
				</div>
				<div className='col-2'>{this.rating(channel.rating)}</div>
			</div>
		);
	}
}

export default Channel;

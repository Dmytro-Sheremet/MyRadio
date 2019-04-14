import React, { Component } from 'react';

class Channel extends Component {
	render() {
		const { channel } = this.props;

		return (
			<div>
				<div className='card card-body bg-light mb-2'>
					<div className='row'>
						<div className='col-6'>
							<audio src={channel.link} controls />
						</div>
						<div className='col-6'>
							<h4>{channel.rating}</h4>
						</div>
					</div>
				</div>

				<div className='card card-body bg-light mb-2'>
					<div className='row'>
						<div className='col-lg-6 col-md-4 col-8'>
							<h3>{channel.name}</h3>
						</div>
						<div className='col-md-4 d-none d-md-block'>
							<h4>{channel.rating}</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Channel;

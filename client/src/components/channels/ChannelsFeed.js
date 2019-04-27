import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getChannels } from '../../actions/channelActions';
import PlayPanel from '../player/PlayPanel';

class ChannelsFeed extends Component {
	componentDidMount() {
		this.props.getChannels();
	}

	render() {
		const { channels, loading } = this.props.channels;

		let allChannels;

		if (channels === null || loading) {
			allChannels = <Spinner />;
		} else {
			if (channels.length > 0) {
				allChannels = channels.map(channel => (
					<div key={channel._id} className='mb-2'>
						<PlayPanel props={channel} />
					</div>
				));
			} else {
				allChannels = <h4>No channels found...</h4>;
			}
		}

		return <>{allChannels}</>;
	}
}

const mapStateToProps = state => ({
	channels: state.channels,
});

export default connect(
	mapStateToProps,
	{ getChannels },
)(ChannelsFeed);

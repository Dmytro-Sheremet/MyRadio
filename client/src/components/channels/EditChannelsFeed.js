import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import EditChannel from './EditChannel';
import { getChannels } from '../../actions/channelActions';

class EditChannels extends Component {
	componentDidMount() {
		this.props.getChannels();
	}

	componentWillUnmount(){
		console.log('unmounted')
	}

	render() {
		const { channels, loading } = this.props.channels;

		let allChannels;

		if (channels === null || loading) {
			allChannels = <Spinner />;
		} else {
			if (channels.length > 0) {
				allChannels = channels.map(channel => <EditChannel key={channel._id} channel={channel} />);
			} else {
				allChannels = <h4>No channels found...</h4>;
			}
		}

		return (
			<div className='container'>
				<div className='col-md-12'>{allChannels}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	channels: state.channels
});

export default connect(
	mapStateToProps,
	{ getChannels }
)(EditChannels);

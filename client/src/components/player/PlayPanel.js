import React from 'react';
import PlayControls from './PlayControls';

const PlayPanel = ({ ...props }) => {
	console.log(props);
	return (
		<div className='d-line'>
			<div className='d-block p-2 bg-secondary text-white'>
				<PlayControls />
			</div>
		</div>
	);
};

export default PlayPanel;

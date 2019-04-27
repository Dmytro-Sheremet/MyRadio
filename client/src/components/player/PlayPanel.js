import React from 'react';
import PlayControls from './PlayControls';

const PlayPanel = ({ props }) => {
	console.log(props);
	return (
		<div className='row border border-warning p-2 rounded'>
			<div class='col-6'>
				<PlayControls props={props} />
			</div>
			<div class='col-6'>
				<div className='  p-2 rounded bg-secondary text-white '>
					<span>{props.name}</span>
				</div>
			</div>
		</div>
	);
};

export default PlayPanel;

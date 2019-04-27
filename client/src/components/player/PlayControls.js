// import React from 'react';
import React from 'react';
import Button from '../common/Button';

const PlayControls = ({ src }) => {
	const Player = new Audio();

	Player.src = 'http://onair.lviv.fm:8000/lviv.fm';
	Player.src = src;
	Player.preload = 'none';

	Player.addEventListener('play', () =>
		console.log(`Loading Data from ${Player.src}`),
	);
	Player.addEventListener('playing', () => console.log('Begin playing'));
	Player.addEventListener('volumechange', () => console.log('VolumeChange'));

	const onPlay = () => Player.play();
	const onPause = () => Player.pause();
	const onVolumeUp = () =>
		Player.volume + 0.1 <= 1 ? (Player.volume += 0.1) : null;
	const onVolumeDown = () =>
		Player.volume - 0.1 >= 0 ? (Player.volume -= 0.1) : null;

	const getVolume = () => `${Player.volume.toFixed(1) * 100} %`;
	// const getInfo = () => console.log(getVolume());

	return (
		<div className='d-flex justify-content-start'>
			<div className='btn-group ' role='group' aria-label='...'>
				<Button
					onClick={onPlay}
					clicked={onPause}
					faName='fa-play'
					faNameClicked='fa-pause'
				/>
				<Button
					info={getVolume}
					onClick={onVolumeUp}
					faName='fa-volume-up'
				/>
				<Button
					info={getVolume}
					onClick={onVolumeDown}
					faName='fa-volume-down'
				/>
			</div>
		</div>
	);
};

export default PlayControls;

// import React from 'react';
import React, { Component } from 'react';

const Player = ({ src }) => {
	const Player = new Audio();

	Player.src = 'http://onair.lviv.fm:8000/lviv.fm';
	Player.src = src;
	Player.preload = 'none';

	Player.addEventListener('play', () =>
		console.log(`Loading Data from ${Player.src}`),
	);
	Player.addEventListener('playing', () => console.log('Begin playing'));
	Player.addEventListener('volumechange', () => console.log('VolumeChange'));

	const onPlay = () => {
		Player.play();
	};

	const onPause = () => {
		Player.pause();
	};

	const onVolumeUp = () =>
		Player.volume + 0.1 <= 1 ? (Player.volume += 0.1) : null;

	const onVolumeDown = () =>
		Player.volume - 0.1 >= 0 ? (Player.volume -= 0.1) : null;

	const getInfo = () => {
		console.log(Player.currentSrc);
	};

	//button component
	class Button extends Component {
		constructor(props) {
			super(props);
			this.state = {
				pushed: false,
			};
			this.handleClick = this.handleClick.bind(this);
		}

		handleClick() {
			const { onClick, clicked } = this.props;
			if (clicked) {
				this.setState(previousState => {
					!previousState.pushed ? onClick() : clicked();
					return {
						pushed: !previousState.pushed,
					};
				});
			} else {
				onClick();
			}
		}

		render() {
			const faIcon = !this.state.pushed
				? this.props.faName
				: this.props.faNameClicked;
			return (
				<button
					onClick={this.handleClick.bind(this)}
					type='button'
					className='btn btn-warning text-white'
				>
					<i className={`fas ${faIcon}`} />
				</button>
			);
		}
	}

	return (
		<div className='row'>
			<div class='btn-group btn-group' role='group' aria-label='...'>
				<Button
					onClick={onPlay}
					clicked={onPause}
					faName='fa-play'
					faNameClicked='fa-pause'
				/>
				<Button onClick={onVolumeUp} faName='fa-volume-up' />
				<Button onClick={onVolumeDown} faName='fa-volume-down' />
			</div>
			<div className='ml-2'>
				<Button onClick={getInfo} faName='fa-info' />
			</div>
		</div>
	);
};

export default Player;

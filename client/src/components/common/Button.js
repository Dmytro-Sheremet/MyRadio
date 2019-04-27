import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pushed: false,
			showInfo: false,
			buttonText: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { onClick, clicked, info } = this.props;

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

		if (info) {
			this.setState({
				showInfo: true,
			});

			const backUpState = () =>
				this.setState({
					showInfo: false,
				});
			setTimeout(backUpState, 2000);
		}
	}

	render() {
		const { faName, faNameClicked, info } = this.props;
		const { pushed, showInfo } = this.state;

		let icon = null;

		icon = !pushed ? (
			<i className={`fas ${faName}`} />
		) : (
			<i className={`fas ${faNameClicked}`} />
		);

		if (showInfo) {
			icon = info();
		}

		return (
			<button
				onClick={this.handleClick.bind(this)}
				type='button'
				className='btn btn-warning text-white'
			>
				{icon}
			</button>
		);
	}
}
export default Button;

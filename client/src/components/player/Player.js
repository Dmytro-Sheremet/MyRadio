import React, { Component } from 'react';

export default class Player extends Component {
	render() {
		return (
			<div>
				<audio
					src='http://online-radioroks2.tavrmedia.ua/RadioROKS_Ukr_HD'
					controls
					preload='none'
				/>
			</div>
		);
	}
}

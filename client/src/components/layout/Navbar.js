import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		const { isAuthenticated } = this.props.auth;

		const authLinks = (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item'>
					<Link className='nav-link' to='/channels/addone'>
						Add Channel
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/channels/edit'>
						Edit Channels
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						onClick={this.onLogoutClick.bind(this)}
						to='#'
						className='nav-link'
					>
						Logout
					</Link>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item'>
					<Link className='nav-link' to='/register'>
						Sign Up
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/login'>
						Login
					</Link>
				</li>
			</ul>
		);

		return (
			<nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						MyRadio
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#mobile-nav'
					>
						<span className='navbar-toggler-icon' />
					</button>

					<div className='collapse navbar-collapse' id='mobile-nav'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/channels'>
									Channels
								</Link>
							</li>
							{/* <li className='nav-item'>
								<Link className='nav-link' to='/player'>
									Player
								</Link>
							</li> */}
						</ul>
						{isAuthenticated ? authLinks : guestLinks}
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(
	mapStateToProps,
	{ logoutUser },
)(Navbar);

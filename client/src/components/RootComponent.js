import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import PrivateRoute from './common/PrivateRoute';
import ChannelsFeed from './channels/ChannelsFeed';
import CreateChannel from './channels/CreateChannel';
import EditChannelsFeed from './channels/EditChannelsFeed';

class RootComponent extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Route exact path='/' component={Landing} />
				<div className='container'>
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/channels' component={ChannelsFeed} />
					<PrivateRoute
						exact
						path='/channels/addone'
						component={CreateChannel}
					/>
					<PrivateRoute
						exact
						path='/channels/edit'
						component={EditChannelsFeed}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}
export default RootComponent;

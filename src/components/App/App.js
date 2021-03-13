import React from 'react';
import Donate from '../Donate/Donate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Auth/Login';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import NewsHomePage from '../News-HomePage/NewsHomePage';
import SignUp from '../Auth/SignUp';

export default function App() {
	return (
		<div>
			<Header />
			{/* <NewsHomePage /> */}
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/donate" component={Donate} />
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

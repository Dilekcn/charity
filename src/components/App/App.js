import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Auth/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewsHomePage from '../News-HomePage/NewsHomePage';
import SignUp from '../Auth/SignUp';

export default function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<NewsHomePage />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

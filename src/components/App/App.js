import React from 'react';
<<<<<<< HEAD
import Donate from '../Donate/Donate';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Auth/Login';
import Footer from '../Footer/Footer';
>>>>>>> e98fa1e4a4679608a13a6f73f661342176d59c73
import Header from '../Header/Header';
import NewsHomePage from '../News-HomePage/NewsHomePage';
import SignUp from '../Auth/SignUp';

export default function App() {
	return (
<<<<<<< HEAD
		<div>
			<Header />
			{/* <Donate/> */}
		</div>
=======
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
>>>>>>> e98fa1e4a4679608a13a6f73f661342176d59c73
	);
}

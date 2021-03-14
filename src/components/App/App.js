import React, { useState } from 'react';
import Donate from '../Donate/Donate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Auth/Login';
import Footer from '../Footer/Footer';
import About from '../About/About'
import Header from '../Header/Header';
import NewsHomePage from '../News-HomePage/NewsHomePage';
import SignUp from '../Auth/SignUp';
import Slider from '../Slider/Slider';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<div>
			<Header isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>


			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<React.Fragment>
								<Slider />
								<NewsHomePage />
							</React.Fragment>
						)}
					/>
					<Route exact path="/login" render={(() => <Login setIsLoggedIn={setIsLoggedIn}/>)} />
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/donate" component={Donate} />
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

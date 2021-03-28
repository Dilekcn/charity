import React, { useEffect, useState } from 'react';
import Donate from '../Donate/Donate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Auth/Login';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import NewsHomePage from '../News-HomePage/NewsHomePage';
import SignUp from '../Auth/SignUp';
import Slider from '../Slider/Slider';
import axios from 'axios';
import News from '../News/News'
import NewsDetail from '../NewsDetail/NewsDetail';
import DonateGoods from '../GetInvolved/DonateGoods/DonateGoods';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div>
			<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
					<Route
						exact
						path="/login"
						render={() => <Login setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/signup" render={() => <SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
					<Route exact path="/donate" component={Donate} />
					<Route exact path="/campaigns&news" component={News} />
					<Route
					   exact
					   path="/newsdetail/:id"
					   render={() => <NewsDetail />}
					/>
					<Route to='/getinvolved/donategoods' component={DonateGoods}/>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

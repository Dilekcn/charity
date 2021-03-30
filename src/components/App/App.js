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
import News from '../News/News';
import NewsDetail from '../NewsDetail/NewsDetail';
import GetInvolved from '../GetInvolved/GetInvolved';
import DonateGoods from '../GetInvolved/DonateGoods/DonateGoods';
import GiftCard from '../GetInvolved/DonateGiftCard/GiftCard';
import DonateGoodsForm from '../GetInvolved/DonateGoods/DonateGoodsForm';
import Ambassador from '../GetInvolved/BeAnAmbassador/Ambassador';
import AmbassadorForm from '../GetInvolved/BeAnAmbassador/AmbassadorForm';
import DonateYourTime from '../GetInvolved/DonateYourTime/DonateYourTime'
import DonateYourTimeForm from '../GetInvolved/DonateYourTime/DonateYourTimeForm'


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
					<Route
						exact
						path="/signup"
						render={() => (
							<SignUp
								setIsLoggedIn={setIsLoggedIn}
								isLoggedIn={isLoggedIn}
							/>
						)}
					/>
					<Route exact path="/donate" component={Donate} />
					<Route exact path="/campaigns&news" component={News} />
					<Route
						exact
						path="/newsdetail/:id"
						render={() => <NewsDetail />}
					/>
					<Route exact path="/getinvolved" component={GetInvolved} />
					<Route
						exact
						path="/getinvolved/donategoods"
						component={DonateGoods}
					/>
					<Route
						exact
						path="/getinvolved/donategoods-form"
						component={DonateGoodsForm}
					/>
	<Route
						exact
						path="/getinvolved/donateyourtime"
						component={DonateYourTime}
					/>
						<Route
						exact
						path="/getinvolved/donateyourtime-form"
						component={DonateYourTimeForm}
					/>
					<Route
						exact
						path="/getinvolved/donate-with-gift-card"
						component={GiftCard}
					/>
					<Route
						exact
						path="/getinvolved/beanambassador"
						component={Ambassador}
					/>
					<Route
						exact
						path="/getinvolved/beanambassador-form"
						component={AmbassadorForm}
					/>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

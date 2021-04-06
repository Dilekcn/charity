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
			<Router>
			<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
					<Route exact path="/getinvolved" render={() => <GetInvolved isLoggedIn={isLoggedIn}/>} />
					<Route
						exact
						path="/getinvolved/donategoods"
						render={() => <DonateGoods isLoggedIn={isLoggedIn}/>}
					/>
					<Route
						exact
						path="/getinvolved/donategoods-form"
						render={() => <DonateGoodsForm isLoggedIn={isLoggedIn}/>}
					/>
	<Route
						exact
						path="/getinvolved/donateyourtime"
						render={() => <DonateYourTime isLoggedIn={isLoggedIn}/>}
					/>
						<Route
						exact
						path="/getinvolved/donateyourtime-form"
						render={() => <DonateYourTimeForm />}
					/>
					<Route
						exact
						path="/getinvolved/donate-with-gift-card"
						render={() => <GiftCard isLoggedIn={isLoggedIn}/>}
					/>
					<Route
						exact
						path="/getinvolved/beanambassador"
						render={() => <Ambassador isLoggedIn={isLoggedIn}/>}
					/>
					<Route
						exact
						path="/getinvolved/beanambassador-form"
						render={() => <AmbassadorForm />}
					/>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

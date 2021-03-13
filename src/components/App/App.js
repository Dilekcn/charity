import React from 'react';
import './App.css'
import Login from '../Auth/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewsHomePage from '../News-HomePage/NewsHomePage';
import SignUp from '../Auth/SignUp';


export default function App() {
	return (
		<div>
			<Header />
			<NewsHomePage/>
			<Footer />
		</div>
	);
}

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom'
import './Login.css';
import GoogleLogin from 'react-google-login';
import googleLogo from './grommet-icons_google.jpg';

const Login = ({setIsLoggedIn}) => {
	const [users, setUsers] = useState([])
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('') 
	const [userExist, setUserExist] = useState(false)

	useEffect( 
		() => {
			window.scroll(0, 0)
			axios
				.get('https://mern-brothers.herokuapp.com/users')
				.then((res) => {
					setUsers(res.data);
				})
				.catch((err) => console.log(err));
		},
		[]
	);

	const responseGoogle = (response) => {
		if(!response.googleId) return document.querySelector('.valid').textContent = 'Something went wrong try again or sign in manually'
		const { email} = response.profileObj
		if(users) {
			for(let i = 0; i < users.length; i++) {
				if(users[i].email === email) {
					setUserExist(true)
					setIsLoggedIn(true)
					return
				}
			}
			document.querySelector('.valid').textContent = 'This account does not exist. Please sign up first.'
		}
	};

	const login = (e) => {
	
		if(email.trim() === '' || password.trim() === '') {
			document.querySelector('.valid').textContent = 'Please fill the blanks!'
			return false
		}
		const username = email.includes('@') ? {
			email: email,
			password:password
		} : {
			username: email,
			password:password
		}
		axios.post('https://mern-brothers.herokuapp.com/signin', username)
		.then(res => {
			setUserExist(true)
			setIsLoggedIn(true)
			sessionStorage.setItem('userInfo', JSON.stringify(res.data))
		
			console.log(res.data)
		})
		.catch(err => {
			setUserExist(false)
			document.querySelector('.valid').textContent = 'Invalid email or password!'
			console.log(err)
		})
	}

	if(userExist) {
		return <Redirect to='/'/>
	}

	return (
		<div className="sign-in">
			<div className="sign-in-body">
				<h1 className="sign-in-SignIn">Sign in</h1>
				<h3 className="valid" style={{color:'red'}}> </h3>
				<form className="sign-in-form" >
				<label style={{color:"#347ca5"}} htmlFor="email">Email or Username</label>
					<input
						className="sign-in-email"
						type="text"
						id="email"
						name="email"
						placeholder="Enter your email or username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label style={{color:"#347ca5"}} htmlFor="password">Password</label>
					<input
						className="sign-in-password"
						type="password"
						id="password"
						name="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Link onClick={ login } className="link" to={userExist ? '/' : '/login'}>Sign in</Link>
					<GoogleLogin
						render={(renderProps) => (
							<button
								className="sign-up-google"
								type="button"
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								<img src={googleLogo} alt="google logo" /> Sign in with Google
							</button>
						)}
						className="sign-up-google"
						clientId="906847324262-e38d6kiavhpnl6nu22g4u03ms5h4ul42.apps.googleusercontent.com"
						buttonText="Join with Google"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</form>
				<div className="sign-in-signUp">
					<p>
						New to Helping Hands? <a href="/signup">Join Now</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
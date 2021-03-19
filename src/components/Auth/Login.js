import axios from 'axios';
import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import './Login.css';

const Login = ({setIsLoggedIn}) => {
	const [users, setUsers] = useState([])
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userExist, setUserExist] = useState(false)

	const login = (e) => {
		if(email.trim() == '' || password.trim() == '') {
			document.querySelector('.valid').textContent = 'Please fill the blanks!'
			return false
		}
		axios.get('http://localhost:4000/users')
		.then(res => {
			for(let i = 0; i < res.data.length; i++) {
				if(res.data[i].email == email && res.data[i].password == password) {
					setUserExist(true)
					setIsLoggedIn(true)
				} else {
					setUserExist(false)
					document.querySelector('.valid').textContent = 'Invalid email or password!'
				}
			}
		})
		.catch(err => console.log(err))
	}

	if(userExist) {
		return <Redirect to='/'/>
	}

	return (
		<div className="sign-in">
			<div className="sign-in-body">
				<h1 className="sign-in-SignIn">Sign in</h1>
				<h3 className="valid" style={{color:'red'}}></h3>
				<form className="sign-in-form" >
					<input
						className="sign-in-email"
						type="text"
						name="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="sign-in-password"
						type="password"
						name="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Link onClick={ login } className="link" to={userExist ? '/' : '/login'}>Sign in</Link>
				</form>
				<div className="sign-in-signUp">
					<p>
						New to Helping? <a href="/signup">Join Now</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;

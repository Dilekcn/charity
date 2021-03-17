import React, { useEffect, useState } from 'react';
import './SignUp.css';
import googleLogo from './grommet-icons_google.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

const SignUp = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirm, setConfirm ] = useState('');
	const [ existEmail, setExistEmail ] = useState(true);
	const [ users, setUsers ] = useState(null);
	const [ refresh, setRefresh ] = useState(false);

	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	};

	useEffect(
		() => {
			axios
				.get('http://localhost:4000/users')
				.then((res) => {
					setUsers(res.data);
				})
				.catch((err) => console.log(err));
		},
		[ refresh ]
	);

	const signup = (e) => {
		e.preventDefault();
		document.querySelector('.valid').textContent = '';
		if (email.trim() == '' || password.trim() == '' || confirm.trim() == '') {
			document.querySelector('.valid').textContent = 'Please fill the blanks!';
			return;
		}
		if (password !== confirm) {
			document.querySelector('.valid').textContent = 'Password did not match';
			setExistEmail(false);
			return;
		}
		if (users) {
			users.forEach((user) => {
				if (user.email == email.trim()) {
					document.querySelector('.valid').textContent = 'Email is already taken';
					setExistEmail(false);
					return;
				}
			});
		}

		if (existEmail) {
			axios
				.post('http://localhost:4000/users', {
					email: email,
					password: password
				})
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
			document.querySelector('.valid').textContent = 'Signed up successfully!';
			setExistEmail(true);
			setConfirm('');
			setEmail('');
			setPassword('');
			setRefresh(!refresh);
		}
	};

	return (
		<div className="sign-up">
			<div className="sign-up-body">
				<h1 className="sign-up-SignIn">Sign up</h1>
				<h3 className="valid" style={{ color: 'red' }} />
				<form className="sign-up-form" onSubmit={signup}>
					<input
						className="sign-up-email"
						type="email"
						name="email"
						value={email}
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="sign-up-password"
						type="password"
						name="password"
						value={password}
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						className="sign-up-password"
						type="password"
						name="password"
						value={confirm}
						placeholder="Confirm your password"
						onChange={(e) => setConfirm(e.target.value)}
					/>
					<button className="link">Sign up</button>
					<GoogleLogin
						render={(renderProps) => (
							<button
								className="sign-up-google"
								type="button"
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								<img src={googleLogo} alt="google logo" /> Join with Google
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
				<div className="sign-up-login">
					<p>
						Already have an account? <a href="/login">Sign in</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

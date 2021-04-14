import React, { useEffect, useState } from 'react';
import './SignUp.css';
import googleLogo from './grommet-icons_google.jpg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

const SignUp = ({ setIsLoggedIn, isLoggedIn }) => {
	const [ emailInput, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
	const [ surname, setSurname ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ confirm, setConfirm ] = useState('');
	const [ existEmail, setExistEmail ] = useState(false);
	const [ users, setUsers ] = useState(null);
	const [ refresh, setRefresh ] = useState(false);

	const history = useHistory();

	useEffect(() => {
		axios
			.get('https://mern-brothers.herokuapp.com/users')
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const responseGoogle = (response) => {
		if (!response.googleId)
			return (document.querySelector('.valid').textContent =
				'Something went wrong try again or sign up manually');
		const { familyName, givenName, email, googleId } = response.profileObj;
		if (users) {
			for (let i = 0; i < users.length; i++) {
				if (users[i].email === email) {
					setExistEmail(true);
					document.querySelector('.valid').textContent = 'You already signed up. Please Log in.';
					return;
				}
			}
		}

		axios
			.post('https://mern-brothers.herokuapp.com/users', {
				firstname: givenName,
				lastname: familyName,
				username: email,
				email: email,
				password: googleId
			})
			.then((res) => {
				window.scroll(0, 0);
				document.querySelector('.valid').textContent = 'Signed up successfully. Redirecting to homepage...';
				setTimeout(() => {
					setIsLoggedIn(true);
					history.push('/');
				}, 1500);
			})
			.catch((err) => console.log(err));
	};

	const signup = (e) => {
		e.preventDefault();
		document.querySelector('.valid').textContent = '';
		if (
			emailInput.trim() === '' ||
			password.trim() === '' ||
			confirm.trim() === '' ||
			username.trim() === '' ||
			name.trim() === '' ||
			surname.trim() === ''
		) {
			document.querySelector('.valid').textContent = 'Please fill the blanks!';
			return;
		}
		if (password !== confirm) {
			document.querySelector('.valid').textContent = 'Password did not match';
			return;
		}
		if (users !== null) {
			for (let i = 0; i < users.length; i++) {
				if (users[i].email === emailInput.trim().toLowerCase()) {
					document.querySelector('.valid').textContent = 'Email is already taken';
					return;
				}
			}
		}

		if (!existEmail) {
			axios
				.post('https://mern-brothers.herokuapp.com/users', {
					firstname: name,
					lastname: surname,
					username: username,
					email: emailInput,
					password: password
				})
				.then((res) => {
					window.scroll(0, 0);
					axios
						.post('https://mern-brothers.herokuapp.com/signin', {
							email:emailInput,
							password:password
						})
						.then((res) => {
							setIsLoggedIn(true)
							sessionStorage.setItem('userInfo', JSON.stringify(res.data))

							console.log(res.data);
						})
						.catch((err) => {
							console.log(err);
						});
					document.querySelector('.valid').textContent = 'Signed up successfully. Redirecting to homepage...';
					setTimeout(() => {
						setIsLoggedIn(true);
						history.push('/');
					}, 1500);
					console.log(res.data);
				})
				.catch((err) => console.log(err));
			document.querySelector('.valid').textContent = 'Signed up successfully. Redirecting to homepage...';
			setExistEmail(true);
			setConfirm('');
			setEmail('');
			setPassword('');
			setName('');
			setSurname('');
			setUsername('');
			setRefresh(!refresh);
		}
	};

	return (
		<div className="sign-up">
			<div className="sign-up-body">
				<h1 className="sign-up-SignIn">Sign up</h1>
				<h3 className="valid" style={{ color: 'red' }}>
					{' '}
				</h3>
				<form className="sign-up-form" onSubmit={signup}>
					<label style={{ color: '#347ca5' }} htmlFor="name">
						Name
					</label>
					<input
						className="sign-up-email"
						type="text"
						name="name"
						id="name"
						value={name}
						placeholder="Enter your firstname"
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<label style={{ color: '#347ca5' }} htmlFor="surname">
						Surname
					</label>
					<input
						className="sign-up-email"
						type="text"
						id="surname"
						name="surname"
						value={surname}
						placeholder="Enter your lastname"
						onChange={(e) => setSurname(e.target.value)}
						required
					/>
					<label style={{ color: '#347ca5' }} htmlFor="username">
						Username
					</label>
					<input
						className="sign-up-email"
						type="text"
						id="username"
						name="username"
						value={username}
						placeholder="Enter your username"
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<label style={{ color: '#347ca5' }} htmlFor="email">
						Email
					</label>
					<input
						className="sign-up-email"
						type="email"
						id="email"
						name="email"
						value={emailInput}
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label style={{ color: '#347ca5' }} htmlFor="password">
						Password
					</label>
					<input
						className="sign-up-password"
						type="password"
						id="password"
						name="password"
						value={password}
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<label style={{ color: '#347ca5' }} htmlFor="confirm">
						Confirm your password
					</label>
					<input
						className="sign-up-password"
						type="password"
						id="confirm"
						name="password"
						value={confirm}
						placeholder="Confirm your password"
						onChange={(e) => setConfirm(e.target.value)}
						required
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

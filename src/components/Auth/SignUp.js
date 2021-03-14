import React from 'react';
import './SignUp.css';
import googleLogo from './grommet-icons_google.jpg';

const SignUp = () => {
	return (
		<div className="sign-up">
			<div className="sign-up-body">
				<h1 className="sign-up-SignIn">Sign up</h1>
				<form className="sign-up-form">
					<input
						className="sign-up-email"
						type="text"
						name="email"
						placeholder="Enter your email"
					/>
					<input
						className="sign-up-password"
						type="password"
						name="password"
						placeholder="Enter your password"
					/>
					<input
						className="sign-up-password"
						type="password"
						name="password"
						placeholder="Confirm your password"
					/>
					<input
						className="sign-up-submit"
						type="submit"
						value="Sign in"
					/>
					<button className="sign-up-google" type="button">
						<img src={googleLogo} alt="google logo" /> Join with Google
					</button>
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

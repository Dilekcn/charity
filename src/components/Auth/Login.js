import React from 'react';
import './Login.css';
import logo from './sign-in-logo.jpg'

const Login = () => {
	return (
		<div className="sign-in">
			<div className="sign-in-header">
				<div className="sign-in-logo">
					<img src={logo} alt="sign in logo" />
				</div>
				<div className="sign-in-h1">
					<h1>Welcome to Helping Hands</h1>
				</div>
			</div>
			<div className="sign-in-body">
                 <h1 className="sign-in-SignIn">Sign in</h1>
				<form className="sign-in-form">
					<input className="sign-in-email" type="text" name="email" placeholder="Enter your email" />
					<input className="sign-in-password" type="password" name="password" placeholder="Enter your password" />
                    <p className="sig-in-forgot-password"><a href="#">Forgot your password?</a></p>
					<input className="sign-in-submit" type="submit" value="Sign in" />
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

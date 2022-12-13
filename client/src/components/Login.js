import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import splash from "./img/splash.png";

export default function Login({ setUser }) {
	const [option, setOption] = useState(null);

	const formOptions = {
		login: <LoginForm setUser={setUser} />,
		signup: <SignupForm setOption={setOption} setUser={setUser} />,
	};

	return (
		<div id="login-splash">
			<div id="login-panel">
				<div id="welcome-greeting">
					<h1>Welcome!</h1>
					<img id="splash-img" src={splash} alt="doggo chat!" />
				</div>
				<div>{formOptions[option]}</div>
				<Button.Group id="login-buttons" size="large">
					<Button onClick={() => setOption("login")}>Log-in</Button>
					<Button.Or />
					<Button onClick={() => setOption("signup")}>Sign-up</Button>
				</Button.Group>
			</div>
		</div>
	);
}

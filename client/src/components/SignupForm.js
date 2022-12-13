import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function SignupForm({ setUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username.toLowerCase(),
				password,
				password_confirmation: passwordConfirmation,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user));
			}
		});
	}

	return (
		<div className="form-container" id="signup-form">
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<input
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Password - MUST be more than 4 characters"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Confirm Password"
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
						type="password"
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}

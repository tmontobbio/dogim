import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function LoginForm({ setUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user));
			}
		});
	}

	return (
		<div className="form-container" id="login-form">
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<input
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}

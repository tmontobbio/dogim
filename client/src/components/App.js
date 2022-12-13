import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useState, useEffect } from "react";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user));
			}
		});
	}, []);

	return (
		<div id="main-container">
			{user ? (
				<Home user={user} setUser={setUser} />
			) : (
				<Login setUser={setUser} />
			)}
		</div>
	);
}

export default App;

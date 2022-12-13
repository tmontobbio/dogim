import logo from "./img/dog-logo.png";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav({ user, setUser }) {
	function handleLogout() {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null);
			}
		});
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div id="nav-bar">
			<img src={logo} alt="dog" id="logo" />
			<h2>Welcome {capitalizeFirstLetter(user.username)}</h2>
			<Button.Group>
				<Link to="/">
					<Button className="buttons">
						<i className="fa-regular fa-user fa-3x"></i>
					</Button>
				</Link>
				<Link to="/groups">
					<Button className="buttons">
						<i className="fa-regular fa-comment fa-3x"></i>
					</Button>
				</Link>
				<Link to="/settings">
					<Button className="buttons">
						<i className="fa-solid fa-gears fa-3x"></i>
					</Button>
				</Link>
				<Link to="/">
					<Button className="buttons" onClick={handleLogout}>
						<i className="fa-solid fa-door-open fa-3x"></i>
					</Button>
				</Link>
			</Button.Group>
		</div>
	);
}

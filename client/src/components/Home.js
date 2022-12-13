import { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";
import Settings from "./Settings";
import Nav from "./Nav";
import Profile from "./Profile";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

export default function Home({ user, setUser }) {
	const [userProfile, setUserProfile] = useState([]);
	useEffect(() => {
		fetch(`/api/profile`).then((r) => {
			if (r.ok) {
				r.json().then((data) => setUserProfile(data));
			}
		});
	}, []);

	return (
		<>
			<Nav user={user} setUser={setUser} />
			<div id="home-container">
				<Routes>
					<Route path="/" element={<Profile userProfile={userProfile} />} />
					<Route path="/groups" element={<ChatList />} />
					<Route path="/groups/:id" element={<ChatRoom user={user} />} />
					<Route
						path="/settings"
						element={
							<Settings
								setUser={setUser}
								setUserProfile={setUserProfile}
								userProfile={userProfile}
							/>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</>
	);
}

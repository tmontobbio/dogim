import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import errorDog from "./img/uh-oh.png";

export default function ChatRoom({ user }) {
	const [currentGroup, setCurrentGroup] = useState([]);
	const [currentMessages, setCurrentMessages] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [errors, setErrors] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetch(`/api/groups/${id}`).then((r) => {
			if (r.ok) {
				r.json().then((data) => {
					setCurrentGroup(data);
					setCurrentMessages(data.messages);
				});
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: newComment,
				user_id: user.id,
				group_id: currentGroup.id,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((msg) => setCurrentMessages([...currentMessages, msg]));
			} else {
				r.json().then((r) => {
					setErrors(r.errors);
				});
			}
		});
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className="component-container">
			{currentMessages ? (
				<>
					<div className="chat-tile">
						<div className="icon-container">
							<img src={currentGroup.icon} alt="icon" className="chat-icon" />
						</div>
						<div className="details-container">
							<h1>{currentGroup.name}</h1>
							<h4>{currentGroup.createdAt}</h4>
							<h4>{currentGroup.description}</h4>
						</div>
					</div>
					<div id="comment-feed">
						{currentMessages.map((m) => {
							return (
								<div key={"comment: " + m.id} className="comment-container">
									<div>
										<h5>
											{capitalizeFirstLetter(m.user.username)}
											<br />
											{m.created_at}
										</h5>
										<img
											className="comment-avatar"
											src={m.user.profile.profile_img}
											alt="profile-img"
										/>
									</div>
									<div className="comment-body">
										<p>{m.content}</p>
									</div>
								</div>
							);
						})}
					</div>

					<div id="comment-form">
						<form onSubmit={handleSubmit}>
							<textarea
								placeholder="Message here..."
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
								type="text"
							/>
							{errors.map((e) => {
								return <p>{e}</p>;
							})}
							<button type="submit">Send</button>
						</form>
					</div>
				</>
			) : (
				<div id="error-dog">
					<div id="error-img">
						<img src={errorDog} alt="error dog" />
					</div>
				</div>
			)}
			<div className="chat-room"></div>
		</div>
	);
}

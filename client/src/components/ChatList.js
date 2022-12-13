import { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import ChatTile from "./ChatTile";

export default function ChatList() {
	const [chats, setChats] = useState([]);
	const [formVisible, setFormVisible] = useState(false);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [icon, setIcon] = useState("");
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		fetch("/api/groups").then((r) => {
			if (r.ok) {
				r.json().then((data) => setChats(data));
			}
		});
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/groups", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				description: description,
				icon: icon,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((data) => {
					setChats([...chats, data]);
					setFormVisible(!formVisible);
				});
			} else {
				r.json().then((r) => {
					setErrors(r.errors);
				});
			}
		});
	}

	function showForm() {
		setFormVisible(!formVisible);
	}

	const chatData = chats.map((chat) => {
		return (
			<ChatTile
				createdAt={chat.created_at}
				chats={chats}
				setChats={setChats}
				key={"chat-list: " + chat.id}
				name={chat.name}
				description={chat.description}
				icon={chat.icon}
				id={chat.id}
			/>
		);
	});

	return (
		<div className="component-container">
			<div id="chat-header">
				<h1>Join a group!</h1>
			</div>
			<Button onClick={showForm} id="new-topic-btn">
				New Topic
			</Button>
			{formVisible ? (
				<div>
					{errors.map((e) => {
						return <h5>{e}</h5>;
					})}
				</div>
			) : null}

			{formVisible ? (
				<div id="topic-form-container">
					<Form onSubmit={handleSubmit} id="new-topic-form">
						<Form.Field>
							<input
								placeholder="Topic"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<input
								placeholder="Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<input
								placeholder="Icon URL"
								value={icon}
								onChange={(e) => setIcon(e.target.value)}
							/>
						</Form.Field>
						<Button positive type="submit">
							Post Topic
						</Button>
					</Form>
				</div>
			) : null}
			{chatData}
		</div>
	);
}

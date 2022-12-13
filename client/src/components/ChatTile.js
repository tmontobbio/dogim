import { Link } from "react-router-dom";

export default function ChatTile({
	icon,
	description,
	name,
	id,
	setChats,
	chats,
	createdAt,
}) {
	function deleteGroup() {
		fetch(`/api/groups/${id}`, { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setChats((chats) => chats.filter((c) => c.id !== id));
			}
		});
	}

	return (
		<div className="chat-tile">
			<div className="icon-container">
				<img src={icon} alt="icon" className="chat-icon" />
			</div>
			<div className="details-container">
				<h1>{name}</h1>
				<h4>{description}</h4>
				<h4>{createdAt}</h4>
				<Link to={`/groups/${id}`}>
					<button>Join</button>
				</Link>
			</div>
			<div className="delete-tile">
				<button onClick={deleteGroup} className="delete-tile-btn">
					X
				</button>
			</div>
		</div>
	);
}

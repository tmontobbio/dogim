import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export default function UpdateProfile({
	setUserProfile,
	userProfile,
	deleteAccount,
	showDeleteConfirm,
	deleteConfirmation,
}) {
	const [displayName, setDisplayName] = useState(userProfile.display_name);
	const [breed, setBreed] = useState(userProfile.breed);
	const [age, setAge] = useState(userProfile.age);
	const [favoriteToy, setFavoriteToy] = useState(userProfile.favorite_toy);
	const [profileImg, setProfileImg] = useState(userProfile.profile_img);
	const [bio, setBio] = useState(userProfile.bio);
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/profile", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				display_name: displayName,
				breed: breed,
				age: age,
				favorite_toy: favoriteToy,
				profile_img: profileImg,
				bio: bio,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((data) => {
					setUserProfile(data);
					navigate("/");
				});
			} else {
				r.json().then((r) => {
					setErrors(r.errors);
				});
			}
		});
	}

	return (
		<div className="component-container">
			<h1>Update Profile</h1>
			{errors.map((e) => {
				return <p>{e}</p>;
			})}
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<input
						placeholder="Display Name"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Breed"
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Favorite Toy"
						value={favoriteToy}
						onChange={(e) => setFavoriteToy(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Profile Image URL"
						value={profileImg}
						onChange={(e) => setProfileImg(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<textarea
						placeholder="Bio"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
			{deleteConfirmation ? (
				<div className="delete-account-options">
					<Button onClick={deleteAccount} negative>
						CONFIRM
					</Button>
					<h2>This cannot be un-done, all of your data will be destroyed!</h2>
				</div>
			) : (
				<div className="delete-account-options">
					<Button onClick={showDeleteConfirm} negative>
						Deactivate Account
					</Button>
				</div>
			)}
		</div>
	);
}

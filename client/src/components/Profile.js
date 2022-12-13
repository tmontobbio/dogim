import errorDog from "./img/uh-oh.png";

export default function Profile({ userProfile }) {
	return (
		<div className="component-container">
			{userProfile ? (
				<div id="profile">
					<h1>{userProfile.display_name}</h1>
					<div id="profile-image-container">
						<img
							src={userProfile.profile_img}
							alt="profile pic"
							id="profile-image"
						/>
					</div>
					<p>
						<b>Breed:</b> {userProfile.breed}
					</p>
					<p>
						<b>Age:</b> {userProfile.age}
					</p>
					<p>
						<b>Favorite:</b> {userProfile.favorite_toy}
					</p>
					<p>
						<b>About Me:</b> {userProfile.bio}
					</p>
				</div>
			) : (
				<div className="error-dog">
					Please create a profile in settings!
					<div id="error-img">
						<img src={errorDog} alt="error dog" />
					</div>
				</div>
			)}
		</div>
	);
}

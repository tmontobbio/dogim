import UpdateProfile from "./UpdateProfile";
import { useState } from "react";

export default function Settings({ setUserProfile, userProfile, setUser }) {
	const [deleteConfirmation, deleteConfirmationVisible] = useState(false);

	function showDeleteConfirm() {
		deleteConfirmationVisible(true);
	}

	function deleteAccount() {
		fetch("/api/users/delete", {
			method: "DELETE",
		});
		setUser(null);
	}

	return (
		<UpdateProfile
			showDeleteConfirm={showDeleteConfirm}
			deleteAccount={deleteAccount}
			deleteConfirmation={deleteConfirmation}
			deleteConfirmationVisible={deleteConfirmationVisible}
			setUser={setUser}
			userProfile={userProfile}
			setUserProfile={setUserProfile}
		/>
	);
}

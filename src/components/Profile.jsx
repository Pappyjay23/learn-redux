import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
	const user = useSelector((state) => state.user.value); // This is used to extract a particular state from the store. 
	return (
		<div>
			<h1>Profile Page</h1>
			<p>Name: {user.name} </p>
			<p>Age:{user.age}  </p>
			<p>Email: {user.email} </p>
		</div>
	);
};

export default Profile;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
	const colorCode = useSelector((state) => state.color.value)
	const dispatch = useDispatch(); // Used to dispatch actions to set state

	const [userDetails, setUserDetails] = useState({
		name: "",
		age: "",
		email: "",
	});

	return (
		<div>
			<h1 style={{color: colorCode}}>Login Page</h1>
			<div className='loginForm'>
				<input
					type='text'
					placeholder='Name'
					value={userDetails.name}
					onChange={(e) => {
						setUserDetails({ ...userDetails, name: e.target.value });
					}}
				/>
				<input
					type='text'
					placeholder='Age'
					value={userDetails.age}
					onChange={(e) => {
						setUserDetails({ ...userDetails, age: e.target.value });
					}}
				/>
				<input
					type='text'
					placeholder='Email'
					value={userDetails.email}
					onChange={(e) => {
						setUserDetails({ ...userDetails, email: e.target.value });
					}}
				/>
				<div className='btnGroup'>
					<button
						style={{ cursor: "pointer" }}
						onClick={() => {
							dispatch(login(userDetails));
							setUserDetails({ ...userDetails, name: "", email: "", age: "" });
						}}>
						Login
					</button>
					<button
						style={{ cursor: "pointer" }}
						onClick={() => dispatch(logout())}>
						Reset Profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;

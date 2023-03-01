import React from "react";
import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
	return (
		<div>
			<Profile />
			<Login />
			<ChangeColor />
		</div>
	);
};

export default App;

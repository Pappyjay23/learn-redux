import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import userReducer from "./features/user";
import colorReducer from "./features/colorTheme";

const store = configureStore({
	reducer: {
		// Name of reducer : Reducer imported from the slice function.
		user: userReducer,
		color: colorReducer,
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import store from "./stores/store";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ThemeContextProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeContextProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

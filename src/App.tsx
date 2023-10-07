import React, { useState } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AuthContext from "./contexts/AuthContext";
import AuthLayout from "./components/layout/AuthLayout";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [user, setUser] = useState({});
	const [isAdmin, setIsAdmin] = useState(false);

	const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
		return isAuthenticated ? (
			<AuthContext.Provider
				value={{
					user,
					isAdmin,
				}}>
				<AuthLayout>{children}</AuthLayout>
			</AuthContext.Provider>
		) : (
			<Navigate to="/login" replace={true} />
		);
	};

	return (
		<ThemeContextProvider>
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<PrivateRoute>
							<Login />
						</PrivateRoute>
					}
				/>
			</Routes>
		</ThemeContextProvider>
	);
}

export default App;

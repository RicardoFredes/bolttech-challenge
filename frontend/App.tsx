import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { AuthService } from "./services/auth.service";

const PrivateRoute = ({ children }) => {
  const auth = AuthService.has();
  return auth ? children : <Navigate to="/login" />;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

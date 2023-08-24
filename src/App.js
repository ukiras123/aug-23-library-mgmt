import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Books from "./pages/books/Books";
import Clients from "./pages/clients/Clients";
import Dashboard from "./pages/dashboard/Dashboard";
import History from "./pages/history/History";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Login />} />

        {/* Private Routes */}
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="admin-signup" element={<SignUp />} />
        <Route path="books" element={<Books />} />
        <Route path="history" element={<History />} />
        <Route path="clients" element={<Clients />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

// App.js
import React, { useState } from 'react';
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/Home/Home";
import SinglePost from "./components/singlePost/singlePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(true);

  const handleLogout = () => {
    // Logout logic here, e.g., clear authentication token, reset user state
    setUser(false);
  };

  return (
    <Router>
      <TopBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/singlepost" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;

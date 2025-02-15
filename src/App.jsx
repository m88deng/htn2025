import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/loading" element={<Loading onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./components/Admin/Admin"
import { useState } from "react";

function App() {
  const [authToken, setAuthToken] = useState(false)
  
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login authToken={authToken} setAuthToken={setAuthToken}/>} />
          <Route path="/admin" element={<Admin authToken={authToken} setAuthToken={setAuthToken}/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

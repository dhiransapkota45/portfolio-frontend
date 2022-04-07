//React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//state
import { useState, useEffect } from "react";

//components
import Navbar2 from "./components/Navbar/Navbar2";
import Login from "./components/Login/Login";
import Home from "./Home";
import Admin from "./components/Admin/Admin";

//hook for fetching data from server
// import useFetch from "./CustomHooks/useFetch";

function App() {
  const [authToken, setAuthToken] = useState(false);
   return (
    <div className=" scroll-smooth">
      <Router>
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login authToken={authToken} setAuthToken={setAuthToken} />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin authToken={authToken} setAuthToken={setAuthToken} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

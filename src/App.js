//React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//state
import { useState, useEffect } from "react";

//amimation on scroll library
import AOS from "aos";
import "aos/dist/aos.css";

//components
import Navbar2 from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./Home";
import Admin from "./components/Admin/Admin";

//hook for fetching data from server
// import useFetch from "./CustomHooks/useFetch";

function App() {
  const [authToken, setAuthToken] = useState(false);
  
  //for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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

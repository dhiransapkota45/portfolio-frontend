import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
// import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);


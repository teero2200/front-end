import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar'
import Users from './Users'

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Users />
    </div>
  </Router>
  );
}

export default App;

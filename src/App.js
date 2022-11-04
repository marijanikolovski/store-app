import React from "react";
import Router from "./Router";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link to='/customers'>Customers</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;

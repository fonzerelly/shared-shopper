import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">SharedShopper</Link>
            </li>
            <li>
              <Link to="/list">Einkaufszettel</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/list">
            <List />
            <input></input>
            <button></button>
            <div><p>02.01.2021</p> <button></button> </div>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <SharedShopper />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function SharedShopper() {
  return <h2>Home</h2>;
}

function List() {
  return <h2>Einkaufszettel</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

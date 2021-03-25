import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from './List/List'

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
          </ul>
        </nav>

        <Switch>
          <Route path="/list">
            <List />
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

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from './List/List'
import ShoppingList from './ShoppingList/ShoppingList'
import './App.css';
import {SignIn} from './Signin/signin' 
import {Register} from './Register/register'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/list/shoppinglist">
            <ShoppingList/>
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <SharedShopper />
          </Route>
        </Switch>
    </Router>
  );
}

function SharedShopper() {
  return <h2>Home</h2>;
}

export default App;

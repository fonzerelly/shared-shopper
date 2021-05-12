import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import List from './List/List'
import ShoppingList from './ShoppingList/ShoppingList'
import './App.css';
import {SignIn} from './Login/Signin/signin' 
import {Register, handleEmail} from './Login/Register/register'
import {Loading} from './Loading/Loading'

function App() {
  /* comment to trigger rerun of activation */
  return (
    <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register checkFunction={(e: string) => handleEmail(e)} />
          </Route>
          <Route path="/list/shoppinglist">
            <ShoppingList/>
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <Loading />
          </Route>
        </Switch>
    </Router>
  );
}



export default App;

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
import {Register} from './Login/Register/register'
import {Loading} from './Loading/Loading'
import { ProvideAuth, PrivateRoute} from './Login/auth';

function App() {
  /* comment to trigger rerun of activation */
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/list/shoppinglist">
              <ShoppingList/>
            </PrivateRoute>
            <PrivateRoute path="/list">
              <List />
            </PrivateRoute>
            <Route path="/">
              <Loading />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}




export default App;

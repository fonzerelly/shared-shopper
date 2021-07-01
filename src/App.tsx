import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import List from './List/List'
import {ShoppingList} from './ShoppingList/ShoppingList'
import './App.css';
import {SignIn} from './Login/Signin/signin' 
import {Register} from './Login/Register/register'
import {Loading} from './Loading/Loading'
import { ProvideAuth, PrivateRoute} from './Login/auth';

function App() {
  // const commandPrototype = (product: string, count: number) => async () => {
  //   await addEntry( product, count)
  // }
  // const commandBuffer: Function [] = []
  // commandBuffer.push(commandPrototype('Kekse', 2))

  // if (internet) {
  //   commandBuffer.forEach((fn) => {
  //     fn()
  //   }
  // }
   
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

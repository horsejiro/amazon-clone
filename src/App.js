import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './component/Home'
import Header from './component/Header';
import Product from './component/Product'
import Login from './component/Login';
import Checkout from './component/Checkout';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("このユーザーは....", authUser);

      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

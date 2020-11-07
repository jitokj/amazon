import './App.css';
import Header from "./Header";
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CheckOut from './CheckOut';
import Footer from './Footer';
import Login from './Login';
import React,{ useEffect } from 'react';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

const promise = loadStripe("pk_test_51HkocFJDO5EtKwrcDhxZNYIY4vZK5iv05W3xbtLi7cPCo1Zc8p6tUKCHL5E0GBOL1mEuKZo6uPaBLOTbJgLXLi1000AlarrUl3");


function App() {
  const [,dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
     
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
  },[]);


  return (
    <Router>
    <div className="app">
   
    <Switch>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/checkout" exact>
    <Header />
     <CheckOut />
    </Route>
    <Route path="/payment" exact>
    <Header />
    <Elements stripe={promise}>
    <Payment />
    </Elements>
    </Route>
    <Route path="/">
    <Header />
    <Home />
     <Footer />
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

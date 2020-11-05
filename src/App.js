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

function App() {
  const [,dispatch] = useStateValue();

  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The User is >>>>",authUser);
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
    })
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

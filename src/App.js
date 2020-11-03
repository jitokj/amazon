import './App.css';
import Header from "./Header";
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CheckOut from './CheckOut';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="app">
    <Header />
    <Switch>
    <Route path="/checkout" exact>
     
     <CheckOut />
    </Route>
    <Route path="/">
    
   
     <Home />
     <Footer />
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

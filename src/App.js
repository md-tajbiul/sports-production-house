import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound';
import CartDetails from './Components/CartDetails';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/league/:idLeague">
          <CartDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

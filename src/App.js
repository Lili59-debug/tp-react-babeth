import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import Admin from './Components/admin/Admin'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

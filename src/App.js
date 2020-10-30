import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import Admin from './Components/admin/Admin'
import Footer from './Components/footer/Footer'
import Qui from './Components/qui/Qui'

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
          <Route path="/qui">
            <Qui />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

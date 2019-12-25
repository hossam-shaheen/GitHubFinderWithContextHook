import React from 'react';
import './App.css';
import Nav from './component/layout/Nav';
import Home from './component/Pages/Home';
import UserDetails from './component/Pages/UserDetails';
import About from "./component/Pages/About";
import NotFound from "./component/Pages/NotFound";
import GitHubProvider from "./context/githubContext/GitHubProvider";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {

  return (

    <GitHubProvider>
      <Router>
        <Nav />

        <Switch >

          <Route exact path="/" render={() => (
            <div className="container">
              <Home />
            </div>
          )} />

          <Route path="/users/:login" render={(props) => (
            <div className="container">
              <UserDetails {...props} />
            </div>
          )} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />

        </Switch >

      </Router>

    </GitHubProvider>
  );
}

export default App;

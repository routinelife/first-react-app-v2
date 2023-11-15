import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//import logo from './logo.svg';
import Home from './Home';
import Movie from './Movie';
import './App.css';


const NotFound = () => {
  return <h2>404 Not Found!</h2>;
}

const App = () => {
  return (
    <Router basename="/first-react-app-v2">
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className="navbar-brand" to="/">Movie Finder</Link>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Movie} />
      <Route component={NotFound} />
    </Switch>
    </Router>
  );
}


export default App;
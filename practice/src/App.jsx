import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './containers/Home';
import Nav from './components/Nav';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Nav />

      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default App;

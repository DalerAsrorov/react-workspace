import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './containers/Home';
import './App.css';

const App = () => (
  <div class="app">
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>

)

export default App;

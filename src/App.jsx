import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Nav from './components/Nav';
import styled from 'styled-components';
import './App.css';

const AppContentWrapper = styled.div`
  margin-top: 25px;
  padding: 10px;
`;

const App = () => (
  <Router>
    <div className="app">
      <Nav />

      <AppContentWrapper>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </AppContentWrapper>
    </div>
  </Router>
);

export default App;

import React from 'react';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

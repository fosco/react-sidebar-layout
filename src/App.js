import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import createHistory from 'history/createBrowserHistory';

class App extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', width: '100%', height:'100%' }}>
        <Router history={createHistory()}>
          <Switch>
            <Route component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import createHistory from 'history/createBrowserHistory';
import styled from 'styled-components';

const AppWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router history={createHistory()}>
          <Switch>
            <Route component={HomePage} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;

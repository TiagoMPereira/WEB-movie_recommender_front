import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Screen from './pages/Response/Screen'
import App from './pages/Home/App'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/recommendation">
          <Screen />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
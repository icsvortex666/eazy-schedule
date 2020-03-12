import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home as HomePage } from 'pages';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          component={HomePage}
        />
        <Route
          exact={true}
          path="*"
          component={HomePage}
        />
      </Switch>
    </Router>
  );
};

export default App;
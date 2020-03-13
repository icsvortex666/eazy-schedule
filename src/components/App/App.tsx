import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home as HomePage } from 'pages';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="*" component={HomePage} />
    </Switch>
  </Router>
);

export default App;

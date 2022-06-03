import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Home } from './pages';

import React from 'react';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

import React, { Fragment } from 'react';
import Header from './header';
import routeConfig from './route.config';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        {
          routeConfig.map(v => {
            const { name, ...rest } = v;
            return <Route key={v.path} {...v} />
          })
        }
      </Switch>
    </Fragment>
  )
};

export default App;
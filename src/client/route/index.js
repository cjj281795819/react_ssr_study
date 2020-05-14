import React, { Fragment } from 'react';
import Header from './header';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = ({ pathname, initialData, routeConfig }) => {
  return (
    <Fragment>
      <Header />
      <Switch>
        {
          routeConfig.map(v => {
            const { name, ...rest } = v;
            if (pathname === v.path) {
              const { component: Component, ..._rest } = rest;
              return <Route key={v.path} {..._rest} render={(props) => {
                props.initialData = initialData;
                return <Component {...props} />
              }} />
            } else {
              return <Route key={v.path} {...rest} />
            }
          })
        }
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Fragment>
  )
};

export default App;
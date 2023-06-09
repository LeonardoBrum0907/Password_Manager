import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { List } from './components/List';
import { SignUp } from './components/SignUp';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute path="/list" component={List} />
      <PrivateRoute path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

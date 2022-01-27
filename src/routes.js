import { SignIn } from './components/SignIn';
import { List } from './components/List';
import { SignUp } from './components/SignUp';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated()? (
                <Component {...props} />
            ) : (
                <Redirect to={{ path: {SignIn}, state: { from: props.location } }} />
            )
        }
    />
)

const Routes = () => (
        <BrowserRouter>
        <Switch>
            <Route 
                exact path="/" // exact faz com que ele chame a rota que seja identica a essa
                component={SignIn}>
            </Route>

            <PrivateRoute
                path="/list" 
                component={List}
            />

            <PrivateRoute
                path="/signup" 
                component={SignUp}
            />
                
        </Switch>
        </BrowserRouter>
);

export default Routes;
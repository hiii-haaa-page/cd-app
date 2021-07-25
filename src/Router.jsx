import { Route, Switch } from 'react-router';
import { Home, SignUp, SignIn } from './templates';
import './assets/reset.css';
import './assets/style.css';
import Auth from './Auth';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Auth>
        <Route exact path="/" component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;

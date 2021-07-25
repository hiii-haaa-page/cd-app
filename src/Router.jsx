import { Route, Switch } from 'react-router';
import { Home, SignUp, SignIn } from './templates';
import './assets/reset.css';
import './assets/style.css';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
};

export default Router;

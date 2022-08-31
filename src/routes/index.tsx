import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import CreateTask from '../pages/Task/create';

const Routes: React.FC = () => (
  <Switch>
    <Route path={'/'} exact component={SignIn}/>
    <Route path={'/signUp'} component={SignUp}/>

    <Route path={'/dashboard'} component={Dashboard} isPrivate />
    <Route path={'/tasks/create'} component={CreateTask} isPrivate />
  </Switch>
);

export default Routes;

import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import UsersList from './usersList/UsersList';
import UserDetails from './userDetails/UserDetails';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/users" component={UsersList} />
      <Route exact path="/users/:email" component={UserDetails} />
      <Redirect exact from="/" to="/users" />
    </Switch>
  );
}

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UsersList from './usersList/UsersList';
import UserDetails from './userDetails/UserDetails';

export default function Routes() {
  return (
    <>
      <Redirect to="/users" />
      <Route exact path="/users" component={UsersList} />
      <Route exact path="/users/:username" component={UserDetails} />
    </>
  );
}

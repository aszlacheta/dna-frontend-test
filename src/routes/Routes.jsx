import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UsersList from './usersList/UsersList';

export default function Routes() {
  return (
    <>
      <Redirect to="/users" />
      <Route exact path="/users" component={UsersList} />
    </>
  );
}
